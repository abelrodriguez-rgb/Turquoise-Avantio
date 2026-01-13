/**
 * Turquoise Avantio - Unified Script
 * 
 * Extracts booking data from the Avantio PMS API and outputs it either to:
 * - Google Sheets (when running in Google Apps Script)
 * - Console table (when running in Node.js)
 * 
 * The same code works in both environments without modification.
 */

// ==================== ENVIRONMENT DETECTION ====================
// Detect if we're running in Google Apps Script or Node.js
const IS_GAS = typeof UrlFetchApp !== 'undefined';
const IS_NODE = typeof process !== 'undefined' && process.versions && process.versions.node;

// ==================== ENVIRONMENT SETUP ====================
// Load Node.js-specific dependencies
if (IS_NODE) {
	require('dotenv').config();  // Load .env file
	var axios = require('axios'); // HTTP client for Node.js
}

// ==================== CONFIGURATION ====================
/**
 * Gets configuration based on execution environment
 * - GAS: Reads from secrets.gs file
 * - Node.js: Reads from .env file
 */
function getConfig() {
	if (IS_GAS) {
		return {
			AVANTIO_API_TOKEN: AVANTIO_API_TOKEN, // From secrets.gs
			DEPARTURE_START_DATE: '2026-01-01',
			CURRENT_YEAR: 2026
		};
	} else {
		return {
			AVANTIO_API_TOKEN: process.env.AVANTIO_API_TOKEN,
			DEPARTURE_START_DATE: process.env.DEPARTURE_START_DATE || '2026-01-01',
			CURRENT_YEAR: parseInt(process.env.CURRENT_YEAR || '2026')
		};
	}
}

const CONFIG = getConfig();
const API_BASE_URL = 'https://api.avantio.pro/pms/v2';

// ==================== CACHES ====================
// In-memory caches to avoid redundant API calls
const ACCOMMODATION_CACHE = {}; // {id: name}
const CUSTOMER_CACHE = {};      // {id: {name, phone, email}}

// ==================== HTTP & LOGGING ====================
/**
 * Makes HTTP GET request using the appropriate client for the environment
 * @param {string} url - Full URL to fetch
 * @param {Object} headers - HTTP headers
 * @returns {Promise<Object>} Parsed JSON response
 */
async function httpGet(url, headers) {
	if (IS_GAS) {
		// Google Apps Script: Use UrlFetchApp
		const options = {
			method: 'get',
			headers: headers,
			muteHttpExceptions: true
		};
		const response = UrlFetchApp.fetch(url, options);
		const statusCode = response.getResponseCode();
		const text = response.getContentText();
		
		if (statusCode >= 400) {
			throw new Error(`HTTP ${statusCode}: ${text}`);
		}
		
		return JSON.parse(text);
	} else {
		// Node.js: Use axios
		const response = await axios.get(url, { headers });
		return response.data;
	}
}

/**
 * Logger that works in both environments
 */
const log = {
	info: (msg) => IS_GAS ? Logger.log(msg) : console.log(msg),
	error: (msg) => IS_GAS ? Logger.log('ERROR: ' + msg) : console.error('✗', msg)
};

// ==================== API FUNCTIONS ====================

/**
 * Generic function to call any Avantio API endpoint
 * @param {string} endpoint - API endpoint (e.g., '/bookings/123')
 * @param {string} errorContext - Description for error messages
 * @returns {Promise<Object|null>} API response data or null on error
 */
async function callAvantioAPI(endpoint, errorContext) {
	try {
		const data = await httpGet(
			`${API_BASE_URL}${endpoint}`,
			{
				'accept': 'application/json',
				'X-Avantio-Auth': CONFIG.AVANTIO_API_TOKEN
			}
		);
		// API wraps data in a 'data' property, unwrap it
		return data.data || data;
	} catch (error) {
		log.error(`Error ${errorContext}: ${error.message}`);
		return null;
	}
}

/**
 * Fetches full booking details from /bookings/{id}
 * The list endpoint returns minimal data, so we need to fetch each booking individually
 * @param {string} id - Booking ID
 * @returns {Promise<Object|null>} Full booking object
 */
async function getBookingDetails(id) {
	if (!id) return null;
	
	const data = await callAvantioAPI(`/bookings/${id}`, `fetching booking ${id}`);
	if (data && !IS_GAS) log.info(`✓ Fetched booking details for ${id}`);
	return data;
}

/**
 * Fetches accommodation/property name from /accommodations/{id}
 * Results are cached to avoid repeated API calls
 * @param {string} id - Accommodation ID
 * @returns {Promise<string>} Accommodation name or ID as string
 */
async function getAccommodationName(id) {
	if (!id) return '';
	if (ACCOMMODATION_CACHE[id]) return ACCOMMODATION_CACHE[id];

	const acc = await callAvantioAPI(`/accommodations/${id}`, `fetching accommodation ${id}`);
	
	if (acc) {
		const name = acc.name || acc.internalName || String(id);
		ACCOMMODATION_CACHE[id] = name;
		return name;
	}
	
	// Cache failed lookups too to avoid retrying
	ACCOMMODATION_CACHE[id] = String(id);
	return ACCOMMODATION_CACHE[id];
}

/**
 * Fetches customer data from /customers/{id}
 * Extracts name, phone, and email from the customer object
 * Results are cached to avoid repeated API calls
 * @param {string} id - Customer ID
 * @returns {Promise<Object>} {name, phone, email}
 */
async function getCustomerData(id) {
	if (!id) return {};
	if (CUSTOMER_CACHE[id]) return CUSTOMER_CACHE[id];

	const cust = await callAvantioAPI(`/customers/${id}`, `fetching customer ${id}`);
	
	if (!cust) {
		CUSTOMER_CACHE[id] = {};
		return {};
	}

	// Extract name with surnames (API separates them)
	let name = cust.name || '';
	if (cust.surnames && Array.isArray(cust.surnames)) {
		name += ' ' + cust.surnames.join(' ');
	}

	// Extract first valid phone from array (skip empty/placeholder values)
	let phone = '';
	if (cust.contact && cust.contact.phones && Array.isArray(cust.contact.phones)) {
		for (const phoneObj of cust.contact.phones) {
			const phoneNum = (phoneObj.number || '').trim();
			if (phoneNum && phoneNum !== '-' && phoneNum !== ' ') {
				phone = phoneNum;
				break;
			}
		}
	}

	// Extract first valid email from array
	let email = '';
	if (cust.contact && cust.contact.emails && Array.isArray(cust.contact.emails)) {
		for (const emailStr of cust.contact.emails) {
			if (emailStr && emailStr.trim()) {
				email = emailStr.trim();
				break;
			}
		}
	}

	const result = { name, phone, email };
	CUSTOMER_CACHE[id] = result;
	return result;
}

/**
 * Calculates number of nights between two dates
 * @param {string} checkIn - ISO date string (YYYY-MM-DD)
 * @param {string} checkOut - ISO date string (YYYY-MM-DD)
 * @returns {number|string} Number of nights or empty string on error
 */
function calcularNoches(checkIn, checkOut) {
	if (!checkIn || !checkOut) return '';
	try {
		const start = new Date(checkIn);
		const end = new Date(checkOut);
		const diffMs = end.getTime() - start.getTime();
		return diffMs / (1000 * 60 * 60 * 24) || '';
	} catch (e) {
		return '';
	}
}

// ==================== PROCESS BOOKING ====================

/**
 * Processes a booking from the list API and enriches it with full details
 * Fetches:
 * - Full booking details (prices, dates, status)
 * - Accommodation/property name
 * - Customer contact information
 * 
 * @param {Object} booking - Minimal booking object from list API
 * @returns {Promise<Object>} Processed booking ready for output
 */
async function processBooking(booking) {
	const bookingId = booking.id;

	// Fetch full booking details (list endpoint only returns minimal data)
	const fullBooking = await getBookingDetails(bookingId);
	if (fullBooking) {
		booking = fullBooking;
	}

	// Extract accommodation/property name
	const accommodationId = booking.accommodation?.id || null;
	const propertyName = accommodationId ? await getAccommodationName(accommodationId) : '';

	// Extract customer data (try API first, then use embedded data)
	const customerId = booking.customer?.id || null;
	let customerData = {};
	
	if (customerId) {
		// Fetch from API endpoint
		customerData = await getCustomerData(customerId);
	} else if (booking.customer) {
		// Extract from embedded customer object
		const custObj = booking.customer;
		let name = custObj.name || '';
		if (custObj.surnames && Array.isArray(custObj.surnames)) {
			name += ' ' + custObj.surnames.join(' ');
		}

		let phone = '';
		if (custObj.contact?.phones?.[0]?.number) {
			phone = custObj.contact.phones[0].number.trim();
		}

		let email = '';
		if (custObj.contact?.emails?.[0]) {
			email = custObj.contact.emails[0].trim();
		}

		customerData = { name, phone, email };
	}

	// Extract prices (API stores amounts as integers with separate decimal places)
	// Example: 123456 with decimalPlaces=3 means 123.456
	const decimalPlaces = booking.decimalPlaces || 0;
	const divisor = decimalPlaces > 0 ? Math.pow(10, decimalPlaces) : 1;
	
	let totalPrice = '';
	if (booking.amounts?.total) {
		const net = booking.amounts.total.net || 0;
		const vat = booking.amounts.total.vat || 0;
		totalPrice = (net + vat) / divisor;
	}

	let commission = '';
	if (booking.amounts?.commission?.portal !== undefined) {
		commission = booking.amounts.commission.portal / divisor;
	}

	// Extract dates from booking
	const arrivalDate = booking.stayDates?.arrival || '';
	const departureDate = booking.stayDates?.departure || '';
	const reservationDate = booking.creationDate || '';
	const cancellationDate = booking.cancellationDate || booking.cancelledAt || '';

	// Extract other booking fields
	const nights = booking.nights || calcularNoches(arrivalDate, departureDate);
	const adults = booking.occupancy?.adults || '';
	const channel = booking.salesChannel?.name || '';
	const status = booking.status || '';

	// Return standardized booking object for output
	return {
		id: bookingId,
		propiedad: propertyName,
		huesped: customerData.name || '',
		canal: channel,
		precio: totalPrice,
		comision: commission,
		checkIn: arrivalDate,
		checkOut: departureDate,
		fReserva: reservationDate,
		fCancelado: cancellationDate,
		noches: nights,
		estado: status,
		telefono: customerData.phone || '',
		email: customerData.email || '',
		adultos: adults
	};
}

// ==================== OUTPUT HANDLERS ====================

/**
 * Outputs bookings to Google Sheets
 * Creates "Reservas" sheet if it doesn't exist
 * @param {Array<Object>} bookings - Array of processed bookings
 */
function outputToSheets(bookings) {
	const ss = SpreadsheetApp.getActiveSpreadsheet();
	let sheet = ss.getSheetByName('Reservas');
	
	// Create sheet with headers if it doesn't exist
	if (!sheet) {
		sheet = ss.insertSheet('Reservas');
		const header = [[
			'Id', 'Propiedad', 'Huesped', 'Canal', 'Precio', 'Comision',
			'Check-In', 'Check-Out', 'FReserva', 'FCancelado', 'Noches',
			'Estado', 'Teléfono', 'Email', 'Adultos'
		]];
		sheet.getRange(1, 1, 1, header[0].length).setValues(header);
	}

	// Convert bookings to rows
	const rows = bookings.map(b => [
		b.id, b.propiedad, b.huesped, b.canal, b.precio, b.comision,
		b.checkIn, b.checkOut, b.fReserva, b.fCancelado, b.noches,
		b.estado, b.telefono, b.email, b.adultos
	]);

	// Append rows to sheet
	if (rows.length > 0) {
		sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
	}

	log.info(`✓ ${bookings.length} reservas agregadas a Google Sheets`);
}

/**
 * Outputs bookings to console as a formatted table
 * @param {Array<Object>} bookings - Array of processed bookings
 */
function outputToConsole(bookings) {
	console.log('='.repeat(150));
	console.log(`📊 TOTAL BOOKINGS FOUND: ${bookings.length}`);
	console.log('='.repeat(150));
	console.log('');

	// Print table header
	console.log(
		'ID'.padEnd(12) +
		'Propiedad'.padEnd(18) +
		'Huesped'.padEnd(18) +
		'Canal'.padEnd(22) +
		'Precio'.padEnd(10) +
		'Check-In'.padEnd(12) +
		'Check-Out'.padEnd(12) +
		'Noches'.padEnd(8) +
		'Estado'.padEnd(12) +
		'Teléfono'.padEnd(15) +
		'Email'.padEnd(25) +
		'Adultos'
	);
	console.log('-'.repeat(150));

	// Print each booking row
	for (const booking of bookings) {
		console.log(
			String(booking.id).padEnd(12) +
			String(booking.propiedad).substring(0, 17).padEnd(18) +
			String(booking.huesped).substring(0, 17).padEnd(18) +
			String(booking.canal).substring(0, 21).padEnd(22) +
			String(booking.precio).padEnd(10) +
			String(booking.checkIn).padEnd(12) +
			String(booking.checkOut).padEnd(12) +
			String(booking.noches).padEnd(8) +
			String(booking.estado).substring(0, 11).padEnd(12) +
			String(booking.telefono).substring(0, 14).padEnd(15) +
			String(booking.email).substring(0, 24).padEnd(25) +
			String(booking.adultos)
		);
	}

	console.log('');
	console.log('='.repeat(150));
	console.log('✅ Extraction completed successfully!');
	console.log('='.repeat(150));
}

// ==================== MAIN FUNCTION ====================

/**
 * Main function that orchestrates the booking extraction
 * 
 * Process:
 * 1. Validates configuration
 * 2. Fetches bookings from API (with pagination)
 * 3. Processes each booking (enriches with full data)
 * 4. Outputs results to appropriate destination
 */
async function obtenerReservasAvantio() {
	// Show startup message in Node.js
	if (!IS_GAS) {
		console.log('🚀 Starting Avantio Bookings Extraction\n');
		console.log(`📅 Fetching bookings from ${CONFIG.DEPARTURE_START_DATE} to ${CONFIG.CURRENT_YEAR}-12-31\n`);
	}

	// Validate configuration
	if (!CONFIG.AVANTIO_API_TOKEN) {
		log.error('AVANTIO_API_TOKEN not configured');
		if (!IS_GAS) process.exit(1);
		return;
	}

	const departureEndDate = `${CONFIG.CURRENT_YEAR}-12-31`;
	let paginationCursor = null;
	const allBookings = [];

	try {
		// Pagination loop: Keep fetching until no more results
		while (true) {
			// Build query parameters
			const params = {
				limit: '50',
				departureDate_from: `${CONFIG.DEPARTURE_START_DATE}T00:00:00.000Z`,
				departureDate_to: `${departureEndDate}T23:59:59.999Z`
			};

			// First request: sort by date. Subsequent: use cursor
			if (!paginationCursor) params.sort = 'departureDate';
			if (paginationCursor) params.pagination_cursor = paginationCursor;

			// Build query string
			const queryString = Object.keys(params)
				.map(key => `${key}=${encodeURIComponent(params[key])}`)
				.join('&');

			const url = `${API_BASE_URL}/bookings?${queryString}`;
			
			if (!IS_GAS) log.info('📡 Fetching page...');

			// Fetch bookings page
			const data = await httpGet(url, {
				'accept': 'application/json',
				'X-Avantio-Auth': CONFIG.AVANTIO_API_TOKEN
			});

			// Extract bookings array from response
			let resultados = data.data || data.bookings || [];
			if (!Array.isArray(resultados)) resultados = [];

			log.info(`✓ Received ${resultados.length} bookings`);

			// No more results, exit loop
			if (resultados.length === 0) {
				log.info('✓ No more results');
				break;
			}

			// Process each booking (fetch full details, accommodation, customer)
			for (const booking of resultados) {
				const processedBooking = await processBooking(booking);
				allBookings.push(processedBooking);
			}

			// Check if there are more pages
			if (data.pagination?.next_cursor) {
				paginationCursor = data.pagination.next_cursor;
				if (!IS_GAS) log.info('→ Next page available\n');
			} else {
				log.info('✓ No more pages');
				break;
			}
		}

		// Output results based on environment
		if (IS_GAS) {
			outputToSheets(allBookings);
		} else {
			outputToConsole(allBookings);
		}

	} catch (error) {
		log.error(`Error during extraction: ${error.message}`);
		if (!IS_GAS) {
			console.error(error);
			process.exit(1);
		}
		throw error;
	}
}

// ==================== ENTRY POINT ====================

// Auto-run in Node.js, wait for manual trigger in GAS
if (IS_NODE) {
	obtenerReservasAvantio();
}
