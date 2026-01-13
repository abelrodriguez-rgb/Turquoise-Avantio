var departureStartDate = "2026-01-01"; // desde qué fecha de salida quieres recuperar reservas

// Caches en memoria para no repetir llamadas
var ACCOMMODATION_CACHE = {};
var CUSTOMER_CACHE = {};

/**
 * @OnlyCurrentDoc
 */
function obtenerReservasAvantio() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Reservas");
  if (!sheet) {
    sheet = ss.insertSheet("Reservas");
    var header = [[
      "Id", "Propiedad", "Huesped", "Canal", "Precio", "Comision",
      "Check-In", "Check-Out", "FReserva", "FCancelado", "Noches",
      "EstReserva", "EstPago", "Teléfono", "Email", "Adultos"
    ]];
    sheet.getRange(1, 1, 1, header[0].length).setValues(header);
  }

  // Año actual y fecha fin (31/12 de ese año, en UTC)
  var currentYear = 2026;
  var departureEndDate = new Date(Date.UTC(currentYear, 11, 31))
    .toISOString()
    .split("T")[0]; // "2025-12-31"

  // máximo id en la columna A (para saber qué reservas son nuevas)
  var maxId = sheet.getRange("A2:A").getValues()
    .reduce(function (max, row) {
      var val = row[0];
      if (typeof val === "number") {
        return Math.max(max, val);
      }
      return max;
    }, 0);
  Logger.log("Reservas desde id: " + maxId);

  var paginationCursor = null;

  while (true) {
    var baseUrl = "https://api.avantio.pro/pms/v2/bookings";

    var departureFrom = departureStartDate + "T00:00:00.000Z";
    var departureTo   = departureEndDate   + "T23:59:59.999Z";

    var params = [
      "limit=50", // Avantio: entre 10 y 50
      "departureDate_from=" + encodeURIComponent(departureFrom),
      "departureDate_to="   + encodeURIComponent(departureTo)
    ];

    // Ordenamos por fecha de salida
    if (!paginationCursor) {
      params.push("sort=departureDate");
    }

    if (paginationCursor) {
      params.push("pagination_cursor=" + encodeURIComponent(paginationCursor));
    }

    var url = baseUrl + "?" + params.join("&");
    Logger.log("Llamando a: " + url);

    var options = {
      method: "get",
      headers: {
        accept: "application/json",
        "X-Avantio-Auth": AVANTIO_API_TOKEN
      },
      muteHttpExceptions: true
    };

    var response   = UrlFetchApp.fetch(url, options);
    var statusCode = response.getResponseCode();
    var text       = response.getContentText();

    if (statusCode >= 400) {
      Logger.log("Error HTTP " + statusCode + " al llamar a Avantio /bookings");
      Logger.log(text);
      throw new Error("Error en llamada a Avantio /bookings: " + statusCode + " – mira el log para detalles.");
    }

    var data = JSON.parse(text);

    // Aseguramos que resultados SIEMPRE es un array
    var resultados = data.data;
    if (!Array.isArray(resultados)) {
      resultados = data.bookings;
    }
    if (!Array.isArray(resultados)) {
      resultados = [];
    }

    Logger.log("Resultados devueltos: " + resultados.length);

    if (resultados.length === 0) {
      Logger.log("Sin más resultados.");
      break;
    }

    var nuevasFilas = [];

    resultados.forEach(function (booking, idx) {
      var bookingId = booking.id;

      // ---- ESTADOS ----
      var status = booking.status || "";
      var statusUpper = (status || "").toUpperCase();

      // EstPago: si hay campo específico úsalo; si no, reutiliza status
      var paymentStatus =
        booking.paymentStatus ||
        booking.payment_status ||
        booking.paymentState ||
        booking.payment_state ||
        status;

      // Log de la primera reserva para inspeccionar estructura si hace falta
      if (idx === 0) {
        Logger.log("Ejemplo de booking:");
        Logger.log(JSON.stringify(booking, null, 2));
      }

      // ---- ID ALOJAMIENTO ----
      var accommodationId =
        booking.accommodationId ||
        booking.accommodation_id ||
        booking.accommodation ||
        booking.propertyId ||
        booking.property_id ||
        null;

      // Nombre del alojamiento desde /accommodations/{id}
      var propertyName = "";
      if (accommodationId) {
        propertyName = getAccommodationName(accommodationId);
      }

      // ---- ID CLIENTE / HUÉSPED ----
      var customerId = null;

      if (booking.customerId) {
        customerId = booking.customerId;
      } else if (booking.customer_id) {
        customerId = booking.customer_id;
      } else if (booking.customer && typeof booking.customer === "string") {
        customerId = booking.customer;
      } else if (booking.customer && typeof booking.customer === "object" && booking.customer.id) {
        customerId = booking.customer.id;
      }

      // Datos de huésped desde /customers/{id}
      var customerData = {};
      if (customerId) {
        customerData = getCustomerData(customerId);
      }

      // ---- HUÉSPED (nombre / teléfono / email) ----
      var guestName = customerData.name || "";

      var phone =
        customerData.phone ||
        customerData.mobile ||
        "";

      var email = customerData.email || "";

      // ---- CANAL ----
      var channel =
        booking.channel ||
        booking.channelName ||
        booking.portal ||
        booking.portalName ||
        booking.source ||
        "";

      // ---- PRECIOS ----
      var priceObj = booking.price || booking.prices || {};

      var totalPrice =
        booking.totalPrice ||
        booking.total ||
        booking.amount ||
        priceObj.total ||
        priceObj.amount ||
        priceObj.totalPrice ||
        priceObj.total_price ||
        priceObj.totalGross ||
        priceObj.total_gross ||
        priceObj.totalNet ||
        priceObj.total_net ||
        "";

      var commission =
        booking.channelCommissionAmount ||
        booking.commission ||
        priceObj.commission ||
        priceObj.commissionAmount ||
        priceObj.commission_amount ||
        "";

      // ---- FECHAS ----
      // Check-in
      var arrivalDate =
        booking.arrivalDate ||
        booking.arrival_date ||
        booking.arrival ||
        booking.checkIn ||
        booking.check_in ||
        booking.checkin ||
        booking.startDate ||
        booking.start_date ||
        (booking.stay && (booking.stay.checkIn || booking.stay.arrivalDate || booking.stay.startDate)) ||
        "";

      // Check-out
      var departureDate =
        booking.departureDate ||
        booking.departure_date ||
        booking.departure ||
        booking.checkOut ||
        booking.check_out ||
        booking.checkout ||
        booking.endDate ||
        booking.end_date ||
        (booking.stay && (booking.stay.checkOut || booking.stay.departureDate || booking.stay.endDate)) ||
        "";

      // Fecha de reserva
      var reservationDate =
        booking.creationDate ||
        booking.createdAt ||
        booking.creation_date ||
        booking.bookingDate ||
        booking.booking_date ||
        "";

      // Fecha de cancelación
      var cancellationDate =
        booking.cancellationDate ||
        booking.cancellation_date ||
        booking.cancelDate ||
        booking.cancel_date ||
        booking.cancelledAt ||
        booking.canceledAt ||
        "";

      // ---- NOCHES ----
      var nights =
        booking.nights ||
        (booking.stay && booking.stay.nights) ||
        calcularNoches(arrivalDate, departureDate);

      // ---- ADULTOS ----
      var adults =
        (booking.guests && booking.guests.adults) ||
        booking.adults ||
        "";

      var fila = [
        bookingId,        // Id
        propertyName,     // Propiedad (nombre)
        guestName,        // Huesped
        channel,          // Canal
        totalPrice,       // Precio
        commission,       // Comision
        arrivalDate,      // Check-In
        departureDate,    // Check-Out
        reservationDate,  // FReserva
        cancellationDate, // FCancelado
        nights,           // Noches
        status,           // EstReserva
        paymentStatus,    // EstPago
        phone,            // Teléfono
        email,            // Email
        adults            // Adultos
      ];

      if (bookingId > maxId) {
        nuevasFilas.push(fila);
      } else {
        // actualizar si se ha cancelado
        var statusLower = status.toString().toLowerCase();
        if (statusLower === "cancelled" || statusLower === "canceled") {
          var ids = sheet.getRange("A:A").getValues();
          var rowIndex = ids.findIndex(function (row) {
            return row[0] === bookingId;
          });
          if (rowIndex > 0) {
            sheet.getRange(rowIndex + 1, 1, 1, fila.length).setValues([fila]);
          }
        }
      }
    });

    // Escribimos solo si hay filas nuevas
    if (nuevasFilas.length > 0) {
      sheet
        .getRange(sheet.getLastRow() + 1, 1, nuevasFilas.length, nuevasFilas[0].length)
        .setValues(nuevasFilas);
    }

    // paginación
    if (data.pagination && data.pagination.next_cursor) {
      paginationCursor = data.pagination.next_cursor;
      Logger.log("Siguiente cursor: " + paginationCursor);
    } else {
      Logger.log("No hay siguiente cursor.");
      break;
    }
  }
}

/**
 * Llama a /pms/v2/accommodations/{id} y devuelve el nombre del alojamiento.
 */
function getAccommodationName(id) {
  if (!id) return "";
  if (ACCOMMODATION_CACHE[id]) {
    return ACCOMMODATION_CACHE[id];
  }

  var url = "https://api.avantio.pro/pms/v2/accommodations/" + encodeURIComponent(id);
  var options = {
    method: "get",
    headers: {
      accept: "application/json",
      "X-Avantio-Auth": AVANTIO_API_TOKEN
    },
    muteHttpExceptions: true
  };

  var response   = UrlFetchApp.fetch(url, options);
  var statusCode = response.getResponseCode();
  var text       = response.getContentText();

  if (statusCode >= 400) {
    Logger.log("Error HTTP " + statusCode + " en getAccommodationName para id " + id);
    Logger.log(text);
    // fallback: devolvemos el id como string
    ACCOMMODATION_CACHE[id] = String(id);
    return ACCOMMODATION_CACHE[id];
  }

  var data = JSON.parse(text);
  var acc = data.data || data;

  var name =
    acc.name ||
    acc.accommodationName ||
    acc.accommodation_name ||
    acc.internalName ||
    acc.internal_name ||
    acc.title ||
    String(id);

  ACCOMMODATION_CACHE[id] = name;
  return name;
}

/**
 * Llama a /pms/v2/customers/{id} y devuelve {name, phone, mobile, email}.
 */
function getCustomerData(id) {
  if (!id) return {};
  if (CUSTOMER_CACHE[id]) {
    return CUSTOMER_CACHE[id];
  }

  var url = "https://api.avantio.pro/pms/v2/customers/" + encodeURIComponent(id);
  var options = {
    method: "get",
    headers: {
      accept: "application/json",
      "X-Avantio-Auth": AVANTIO_API_TOKEN
    },
    muteHttpExceptions: true
  };

  var response   = UrlFetchApp.fetch(url, options);
  var statusCode = response.getResponseCode();
  var text       = response.getContentText();

  if (statusCode >= 400) {
    Logger.log("Error HTTP " + statusCode + " en getCustomerData para id " + id);
    Logger.log(text);
    CUSTOMER_CACHE[id] = {};
    return CUSTOMER_CACHE[id];
  }

  var data = JSON.parse(text);
  var cust = data.data || data;

  var name =
    cust.fullName ||
    cust.name ||
    ((cust.firstName || cust.firstname || "") + " " +
     (cust.lastName || cust.lastname || "")).trim();

  var phone =
    cust.phone ||
    cust.phone1 ||
    cust.phoneNumber ||
    cust.phone_number ||
    cust.mobile ||
    cust.mobilePhone ||
    "";

  var email =
    cust.email ||
    cust.mail ||
    cust.emailAddress ||
    cust.email_address ||
    "";

  var result = {
    name: name,
    phone: phone,
    mobile: cust.mobile || "",
    email: email
  };

  CUSTOMER_CACHE[id] = result;
  return result;
}

/**
 * Calcula noches entre dos fechas ISO (si no lo da la API).
 */
function calcularNoches(checkIn, checkOut) {
  if (!checkIn || !checkOut) return "";
  try {
    var start = new Date(checkIn);
    var end = new Date(checkOut);
    var diffMs = end.getTime() - start.getTime();
    var nights = diffMs / (1000 * 60 * 60 * 24);
    return nights || "";
  } catch (e) {
    return "";
  }
}
