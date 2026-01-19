# Delete Customer

URL: https://pms-api-docs.avantio.pro/reference/customercontroller_delete

Delete Customer
===============

delete

https://api.avantio.pro/pms/v2/customers/{id}

This call allows users to remove an existing customer from the system by specifying the customer ID.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200

400


=======

[](#customercontroller-delete-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Update Customer

](/reference/customercontroller_update)[

Create Customer

](/reference/customercontroller_create)

Did this page help you?

Yes

No# Create Customer

URL: https://pms-api-docs.avantio.pro/reference/customercontroller_create

Create Customer
===============

post

https://api.avantio.pro/pms/v2/customers

This call allows users to create a new customer entry in the system. By providing the necessary details, users can add new customers to the system. This endpoint is essential for property managers who must add new customers to the system.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#body-params)Body Params

accountingInfo

object

Customer's accounting information

accountingInfo object

address

object

Customer's address

address object

contact

object

Customer's contact data

contact object

creationDate

date

Customer's creation date

identityDocument

object

Customer's identity document

identityDocument object

language

string

enum

required

Customer's language

es\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

name

string

length ≤ 100

Customer's name

surnames

array of strings

Customer's surnames

surnames

ADD string

[](#response-schemas)Responses

201


=======

[](#customercontroller-create-object-response-body)Response body

object

400


=======

[](#customercontroller-create-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Delete Customer

](/reference/customercontroller_delete)[

Owners

](/reference/owners)

Did this page help you?

Yes

No# List Customers

URL: https://pms-api-docs.avantio.pro/reference/customercontroller_list

List Customers
==============

get

https://api.avantio.pro/pms/v2/customers

This call retrieves a complete list of all customers in the system. It allows users to view various details about each customer. This endpoint is useful to allow you to browse and select customers based on your preferences.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

name

string

length ≤ 100

Customer's name

surnames

array of strings

Customer's surnames

surnames

ADD string

email

string

Customer's email

[](#response-schemas)Responses

200


=======

[](#customercontroller-list-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

country

string

enum

Customer's country

`AD` `AE` `AF` `AG` `AI` `AL` `AM` `AO` `AQ` `AR` `AS` `AT` `AU` `AW` `AX` `AZ` `BA` `BB` `BD` `BE` `BF` `BG` `BH` `BI` `BJ` `BL` `BM` `BN` `BO` `BQ` `BR` `BS` `BT` `BV` `BW` `BY` `BZ` `CA` `CC` `CD` `CF` `CG` `CH` `CI` `CK` `CL` `CM` `CN` `CO` `CR` `CU` `CV` `CW` `CX` `CY` `CZ` `DE` `DJ` `DK` `DM` `DO` `DZ` `EC` `EE` `EG` `EH` `ER` `ES` `ET` `FI` `FJ` `FK` `FM` `FO` `FR` `GA` `GB` `GD` `GE` `GF` `GG` `GH` `GI` `GL` `GM` `GN` `GP` `GQ` `GR` `GS` `GT` `GU` `GW` `GY` `HK` `HM` `HN` `HR` `HT` `HU` `ID` `IE` `IL` `IM` `IN` `IO` `IQ` `IR` `IS` `IT` `JE` `JM` `JO` `JP` `KE` `KG` `KH` `KI` `KM` `KN` `KP` `KR` `KW` `KY` `KZ` `LA` `LB` `LC` `LI` `LK` `LR` `LS` `LT` `LU` `LV` `LY` `MA` `MC` `MD` `ME` `MF` `MG` `MH` `MK` `ML` `MM` `MN` `MO` `MP` `MQ` `MR` `MS` `MT` `MU` `MV` `MW` `MX` `MY` `MZ` `NA` `NC` `NE` `NF` `NG` `NI` `NL` `NO` `NP` `NR` `NU` `NZ` `OM` `PA` `PE` `PF` `PG` `PH` `PK` `PL` `PM` `PN` `PR` `PS` `PT` `PW` `PY` `QA` `RE` `RO` `RS` `RU` `RW` `SA` `SB` `SC` `SD` `SE` `SG` `SH` `SI` `SJ` `SK` `SL` `SM` `SN` `SO` `SR` `SS` `ST` `SV` `SX` `SY` `SZ` `TC` `TD` `TF` `TG` `TH` `TJ` `TK` `TL` `TM` `TN` `TO` `TR` `TT` `TV` `TW` `TZ` `UA` `UG` `UM` `US` `UY` `UZ` `VA` `VC` `VE` `VG` `VI` `VN` `VU` `WF` `WS` `YE` `YT` `ZA` `ZM` `ZW`

email

string

Customer's email

id

string

required

Customer ID

identityDocumentId

string

Customer's identity document ID

name

string

Customer's name

phone

string

Customer's phone

surnames

array of strings

Customer's surnames

surnames

400


=======

[](#customercontroller-list-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Update CheckIn Status

](/reference/checkincontroller_updateoccupants)[

Get Customer

](/reference/customercontroller_get)

Did this page help you?

Yes

No# Update Customer

URL: https://pms-api-docs.avantio.pro/reference/customercontroller_update

Update Customer
===============

put

https://api.avantio.pro/pms/v2/customers/{id}

This call allows users to update the details of an existing customer. Users can make changes to customer details.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#body-params)Body Params

accountingInfo

object

Customer's accounting information

accountingInfo object

address

object

Customer's address

address object

contact

object

Customer's contact data

contact object

creationDate

date

Customer's creation date

identityDocument

object

Customer's identity document

identityDocument object

language

string

enum

required

Customer's language

es\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

name

string

length ≤ 100

Customer's name

surnames

array of strings

Customer's surnames

surnames

ADD string

[](#response-schemas)Responses

200


=======

[](#customercontroller-update-object-response-body)Response body

object

data

object

required

accountingInfo

object

Customer's accounting information

accountingInfo object

address

object

Customer's address

address object

contact

object

Customer's contact data

contact object

creationDate

date

Customer's creation date

id

string

required

Customer ID

identityDocument

object

Customer's identity document

identityDocument object

language

string

enum

required

Customer's language

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

name

string

length ≤ 100

Customer's name

surnames

array of strings

Customer's surnames

surnames

400


=======

[](#customercontroller-update-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Get Customer

](/reference/customercontroller_get)[

Delete Customer

](/reference/customercontroller_delete)

Did this page help you?

Yes

No# Get Customer

URL: https://pms-api-docs.avantio.pro/reference/customercontroller_get

Get Customer
============

get

https://api.avantio.pro/pms/v2/customers/{id}

This call retrieves the details of a specific customer by providing the customer ID. It allows users to view all the details of a specific customer, such as their name, contact information, address, and language. This endpoint is useful for users who want to view the details of a specific customer.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200


=======

[](#customercontroller-get-object-response-body)Response body

object

data

object

required

accountingInfo

object

Customer's accounting information

accountingInfo object

address

object

Customer's address

address object

contact

object

Customer's contact data

contact object

creationDate

date

Customer's creation date

id

string

required

Customer ID

identityDocument

object

Customer's identity document

identityDocument object

language

string

enum

required

Customer's language

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

name

string

length ≤ 100

Customer's name

surnames

array of strings

Customer's surnames

surnames

400


=======

[](#customercontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Customers

](/reference/customercontroller_list)[

Update Customer

](/reference/customercontroller_update)

Did this page help you?

Yes

No# Get Accommodation Rate

URL: https://pms-api-docs.avantio.pro/reference/ratescontroller_getaccommodationrate

Get accommodation rate
======================

get

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/rate

This call allows users to get the accommodation rate. Use this endpoint to retrieve the details of the accommodation rate.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID.

[](#response-schemas)Responses

200


=======

[](#ratescontroller-getaccommodationrate-object-response-body)Response body

object

data

object

required

id

string

required

Rate ID

modifiers

array

Rate discounts and supplements

modifiers

OccupantDiscount

LongStayDiscount

ShortStaySupplement

ExtraOccupantSupplement

SingleOccupantSupplement

LastMinuteDiscount

SimpleDiscount

SimpleSupplement

EarlyBookingBeforeArrivalDiscount

EarlyBookingBeforeDateDiscount

name

string

required

length ≤ 128

Name of the rate

seasons

array of objects

required

Rate seasons

seasons\*

object

from

date

required

First day of the season

regimes

object

required

Season regimes

regimes object

to

date

required

Last day of the season

400


=======

[](#ratescontroller-getaccommodationrate-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get rate

](/reference/ratescontroller_get)[

Booking Updates

](/reference/booking-updates-1)

Did this page help you?

Yes

No# Get Rate

URL: https://pms-api-docs.avantio.pro/reference/ratescontroller_get

Get rate
========

get

https://api.avantio.pro/pms/v2/rates/{id}

This call allows users to get a specific rate by ID. Use this endpoint to retrieve the details of a specific rate.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Rate ID.

[](#response-schemas)Responses

200


=======

[](#ratescontroller-get-object-response-body)Response body

object

data

object

required

id

string

required

Rate ID

modifiers

array

Rate discounts and supplements

modifiers

OccupantDiscount

LongStayDiscount

ShortStaySupplement

ExtraOccupantSupplement

SingleOccupantSupplement

LastMinuteDiscount

SimpleDiscount

SimpleSupplement

EarlyBookingBeforeArrivalDiscount

EarlyBookingBeforeDateDiscount

name

string

required

length ≤ 128

Name of the rate

seasons

array of objects

required

Rate seasons

seasons\*

object

from

date

required

First day of the season

regimes

object

required

Season regimes

regimes object

to

date

required

Last day of the season

400


=======

[](#ratescontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Update accommodation rate

](/reference/ratescontroller_updateaccommodationrate)[

Get accommodation rate

](/reference/ratescontroller_getaccommodationrate)

Did this page help you?

Yes

No# List Rates

URL: https://pms-api-docs.avantio.pro/reference/ratescontroller_list

List rates
==========

get

https://api.avantio.pro/pms/v2/rates

This call retrieves all rates for the company. Use this endpoint to view all rates to manage them.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

[](#response-schemas)Responses

200


=======

[](#ratescontroller-list-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

id

string

required

Rate ID

modifiers

array

Rate discounts and supplements

modifiers

OccupantDiscount

LongStayDiscount

ShortStaySupplement

ExtraOccupantSupplement

SingleOccupantSupplement

LastMinuteDiscount

SimpleDiscount

SimpleSupplement

EarlyBookingBeforeArrivalDiscount

EarlyBookingBeforeDateDiscount

name

string

required

length ≤ 128

Name of the rate

seasons

array of objects

required

Rate seasons

seasons\*

object

from

date

required

First day of the season

regimes

object

required

Season regimes

regimes object

to

date

required

Last day of the season

400


=======

[](#ratescontroller-list-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Update Occupation Rule

](/reference/occupationrulescontroller_updaterule)[

Update accommodation rate

](/reference/ratescontroller_updateaccommodationrate)

Did this page help you?

Yes

No# Update Accommodation Rate

URL: https://pms-api-docs.avantio.pro/reference/ratescontroller_updateaccommodationrate

Update accommodation rate
=========================

put

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/rates

This call allows userts to update rates for a specific accommodation. This operation replaces the entire rates configuration for the accommodation. Use this endpoint to modify all the aspects of the rate.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID.

[](#body-params)Body Params

modifiers

array

Rate discounts and supplements

modifiers

ADD

name

string

required

length ≤ 128

Name of the rate

seasons

array of objects

required

Rate seasons

seasons\*

ADD object

[](#response-schemas)Responses

200


=======

[](#ratescontroller-updateaccommodationrate-object-response-body)Response body

object

data

object

required

id

string

required

Rate ID

400


=======

[](#ratescontroller-updateaccommodationrate-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List rates

](/reference/ratescontroller_list)[

Get rate

](/reference/ratescontroller_get)

Did this page help you?

Yes

No# Delete Supplier

URL: https://pms-api-docs.avantio.pro/reference/suppliercontroller_delete

Delete Supplier
===============

delete

https://api.avantio.pro/pms/v2/suppliers/{id}

This call allows users to remove an existing supplier from the system by specifying the supplier ID.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

204

400


=======

[](#suppliercontroller-delete-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Update Supplier

](/reference/suppliercontroller_update)[

Messaging

](/reference/messaging)

Did this page help you?

Yes

No# Create Supplier

URL: https://pms-api-docs.avantio.pro/reference/suppliercontroller_create

Create Supplier
===============

post

https://api.avantio.pro/pms/v2/suppliers

This call allows users to create a new supplier entry in the system. By providing the necessary details, users can add new suppliers to the system. This endpoint is essential for property managers who must add new suppliers to the system.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#body-params)Body Params

accountingInfo

object

Supplier's accounting info

accountingInfo object

contact

object

Supplier's contact data

contact object

identityDocument

object

Supplier's identity document

identityDocument object

language

string

enum

Supplier's language

es\_ESes\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

name

string

required

Supplier's name

surnames

array of strings

Supplier's surnames

surnames

ADD string

[](#response-schemas)Responses

201


=======

[](#suppliercontroller-create-object-response-body)Response body

object

400


=======

[](#suppliercontroller-create-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Get Supplier

](/reference/suppliercontroller_get)[

Update Supplier

](/reference/suppliercontroller_update)

Did this page help you?

Yes

No# List Suppliers

URL: https://pms-api-docs.avantio.pro/reference/suppliercontroller_list

List Suppliers
==============

get

https://api.avantio.pro/pms/v2/suppliers

This call retrieves a complete list of all suppliers in the system. It allows users to view various details about each supplier. This endpoint is useful to allow you to browse and select suppliers based on your preferences.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

[](#response-schemas)Responses

200


=======

[](#suppliercontroller-list-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

email

string

Supplier's email

id

string

required

Supplier ID

name

string

Supplier's name

phone

string

Supplier's phone

services

array of objects

Names of the services provided by the supplier

services

object

name

array of objects

required

Name of the service provided by the supplier

name\*

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

Localized text

surnames

array of strings

Supplier's surnames

surnames

400


=======

[](#suppliercontroller-list-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Review Response

](/reference/reviewcontroller_createresponse)[

Get Supplier

](/reference/suppliercontroller_get)

Did this page help you?

Yes

No# Update Supplier

URL: https://pms-api-docs.avantio.pro/reference/suppliercontroller_update

Update Supplier
===============

put

https://api.avantio.pro/pms/v2/suppliers/{id}

This call allows users to update the details of an existing supplier. Users can make changes to supplier details.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#body-params)Body Params

accountingInfo

object

Supplier's accounting info

accountingInfo object

contact

object

Supplier's contact data

contact object

identityDocument

object

Supplier's identity document

identityDocument object

language

string

enum

Supplier's language

es\_ESes\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

name

string

required

Supplier's name

surnames

array of strings

Supplier's surnames

surnames

ADD string

[](#response-schemas)Responses

200


=======

[](#suppliercontroller-update-object-response-body)Response body

object

data

object

required

accountingInfo

object

Supplier's accounting info

accountingInfo object

contact

object

Supplier's contact data

contact object

id

string

required

Supplier ID

identityDocument

object

Supplier's identity document

identityDocument object

language

string

enum

Supplier's language

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

name

string

required

Supplier's name

services

array of objects

services

object

name

array of objects

required

Localized name for the service

name\*

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

Localized text

reference

string

required

Internal reference of the service

surnames

array of strings

Supplier's surnames

surnames

400


=======

[](#suppliercontroller-update-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Supplier

](/reference/suppliercontroller_create)[

Delete Supplier

](/reference/suppliercontroller_delete)

Did this page help you?

Yes

No# Get Supplier

URL: https://pms-api-docs.avantio.pro/reference/suppliercontroller_get

Get Supplier
============

get

https://api.avantio.pro/pms/v2/suppliers/{id}

This call retrieves the details of a specific supplier by providing the supplier ID. It allows users to view all the details of a specific supplier, such as their name, contact information, address, and language. This endpoint is useful for users who want to view the details of a specific supplier.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200


=======

[](#suppliercontroller-get-object-response-body)Response body

object

data

object

required

accountingInfo

object

Supplier's accounting info

accountingInfo object

contact

object

Supplier's contact data

contact object

id

string

required

Supplier ID

identityDocument

object

Supplier's identity document

identityDocument object

language

string

enum

Supplier's language

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

name

string

required

Supplier's name

services

array of objects

services

object

name

array of objects

required

Localized name for the service

name\*

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

Localized text

reference

string

required

Internal reference of the service

surnames

array of strings

Supplier's surnames

surnames

400


=======

[](#suppliercontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Suppliers

](/reference/suppliercontroller_list)[

Create Supplier

](/reference/suppliercontroller_create)

Did this page help you?

Yes

No# Get Checkin

URL: https://pms-api-docs.avantio.pro/reference/checkincontroller_get

Get Checkin
===========

get

https://api.avantio.pro/pms/v2/bookings/{id}/check-in

This call retrieves the details of a specific checkin by providing the Booking ID. It allows users to view all the checkin details of a specific booking, such as their status and occupant data. This endpoint is useful for users who want to view the checkin details of a specific booking.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200


=======

[](#checkincontroller-get-object-response-body)Response body

object

data

object

required

Checkin data

bookingId

string

required

Unique identifier for the booking

creationDate

date-time

Date when the check-in record was created

done

boolean

Indicates if the check-in process is completed

externalApp

string

External application associated with the check-in

id

string

required

Checkin id

lastModificationDate

date-time

Date when the check-in record was last modified

occupants

array of objects

List of occupants for the check-in

occupants

object

acceptCommercialInfo

boolean

Indicates if the check-in occupant accepts commercial information

address

object

Address of the check-in occupant

address object

assets

object

Assets associated with the check-in occupant

assets object

comment

string

Additional comments about the check-in occupant

completed

boolean

Indicates if the check-in process is completed for the occupant

creationDate

date-time

Date when the check-in occupant record was created

customer

string

Identifier for the customer

deletionDate

date-time

Date when the check-in occupant record was deleted

documentSupportNumber

string

Support number of the check-in occupant's document

email

string

Email address of the check-in occupant

identityDocument

object

Identity document of the check-in occupant

identityDocument object

kinship

string

enum

Kinship relation of the check-in occupant

`GRANDPA_GRANDMA` `GREAT_GRANDPA_GRANDMA` `GREAT_GRANDSON_GRANDDAUGHTER` `BROTHER_SISTER_IN_LAW` `SPOUSE` `SON_DAUGHTER` `BROTHER_SISTER` `GRANDSON_GRANDDAUGHTER` `FATHER_MOTHER` `NEPHEW_NIECE` `FATHER_MOTHER_IN_LAW` `UNCLE_AUNT` `SON_DAUGHTER_IN_LAW` `TUTORS` `OTHER`

name

string

First name of the check-in occupant

occupantId

string

Identifier for the checkin occupant

phoneNumber

string

Contact phone number of the check-in occupant

rentalContract

object

Rental contract document related to the check-in occupant

rentalContract object

report

object

Report document related to the check-in occupant

report object

surnames

array of strings

List of surnames of the check-in occupant

surnames

taxId

string

Tax identification number of the check-in occupant

type

string

enum

Type of the check-in occupant

`ADULT` `CHILD` `BABY`

updatedAt

date-time

Date when the check-in occupant record was last updated

validationDate

date-time

Date when the check-in occupant was validated

validation

object

Validation details for the check-in

validation object

400


=======

[](#checkincontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Update Booking External Field

](/reference/bookingcontroller_setexternalfield)[

Update CheckIn Status

](/reference/checkincontroller_updateoccupants)

Did this page help you?

Yes

No# Update CheckIn Status

URL: https://pms-api-docs.avantio.pro/reference/checkincontroller_updateoccupants

Update CheckIn Status
=====================

put

https://api.avantio.pro/pms/v2/bookings/{id}/check-in

This call updates the status of a specific checkin by providing the Booking ID. It allows users to update the validation status of the checkin occupants for a specific booking. This endpoint is useful for users who want to update the status of the checkin process for a specific booking.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#body-params)Body Params

occupants

array of objects

required

List of occupants to be validated

occupants\*

ADD object

[](#response-schemas)Responses

200

400


=======

[](#checkincontroller-updateoccupants-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Checkin

](/reference/checkincontroller_get)[

Customers

](/reference/customers)

Did this page help you?

Yes

No# Retrieve Company Data

URL: https://pms-api-docs.avantio.pro/reference/whoamicontroller_get

Retrieve company data
=====================

get

https://api.avantio.pro/pms/v2/whoami

Returns company identity data.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#response-schemas)Responses

200


=======

[](#whoamicontroller-get-object-response-body)Response body

object

data

object

required

company

object

required

Company information

company object

401

404

500

Updated 10 days ago

* * *

[

Create or update length of stay prices

](/reference/lengthofstaycontroller_createlosprices)

Did this page help you?

Yes

No# Update Booking External Field

URL: https://pms-api-docs.avantio.pro/reference/bookingcontroller_setexternalfield

Update Booking External Field
=============================

put

https://api.avantio.pro/pms/v2/bookings/{id}/external-field

This call allows partners to set an external field for a booking. By specifying the booking ID and providing the necessary details, partners can provide extra info for a booking such as smart lock codes.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Booking ID.

[](#body-params)Body Params

type

string

enum

required

Type of the external field. Use LINK to provide url addresses, use TEXT for anything else.

TEXTLINK

Allowed:

`TEXT``LINK`

value

string

required

length ≤ 600

Value of the external field

[](#response-schemas)Responses

200

400


=======

[](#bookingcontroller-setexternalfield-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Update Booking Occupants

](/reference/bookingcontroller_updateoccupants)[

Check-in

](/reference/check-in)

Did this page help you?

Yes

No# Get Booking

URL: https://pms-api-docs.avantio.pro/reference/bookingcontroller_get

Get Booking
===========

get

https://api.avantio.pro/pms/v2/bookings/{id}

This call retrieves the details of a specific booking by providing the booking ID. It allows users to view all the details of a specific booking, such as its status, payments, occupants, extras, and check-in times. This endpoint is useful for users who want to view the details of a specific booking.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Booking ID

[](#response-schemas)Responses

200


=======

[](#bookingcontroller-get-object-response-body)Response body

object

data

object

required

accommodation

object

required

Accommodation information.

accommodation object

agentId

string

Agent ID.

agentReference

string

Agent reference.

amounts

object

required

Booking payment amounts.

amounts object

arrivalInfo

object

Requested check-in and check-out times.

arrivalInfo object

attendedBy

string

User who attended the booking.

board

string

enum

Board.

`ONLY_ACCOMMODATION` `WITH_BREAKFAST` `HALF_BOARD` `FULL_BOARD` `ALL_INCLUDED`

checkIn

object

Check-in information.

checkIn object

checkInTime

string

Time when the guest checked-in.

checkOut

object

Check-out information.

checkOut object

checkOutTime

string

Time when the guest checked-out.

comments

object

Comments.

comments object

createdAt

date-time

required

Booking creation date.

creationDate

string

required

Booking creation date.

currency

string

enum

required

Amounts Currency code.

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYN` `BZD` `CAD` `CDF` `CHE` `CHF` `CHW` `CLF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LYD` `MAD` `MDL` `MGA` `MKD` `MMK` `MNT` `MOP` `MRU` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `SSP` `STN` `SVC` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `USN` `UYI` `UYU` `UYW` `UZS` `VES` `VND` `VUV` `WST` `XAF` `XAG` `XAU` `XBA` `XBB` `XBC` `XBD` `XCD` `XDR` `XOF` `XPD` `XPF` `XPT` `XSU` `XTS` `XUA` `XXX` `YER` `ZAR` `ZMW` `ZWL`

customer

object

Customer information.

customer object

decimalPlaces

number

required

Specifies the position of the decimal point from right to left for monetary amounts. To calculate the actual value, divide the amount integer by 10 raised to the number of decimalPlaces. For example, decimalPlaces=3 and amount=100870 represents 100,87.

externalData

object

External data.

externalData object

externalPartners

array of objects

External partners.

externalPartners

object

category

string

required

External partner category.

code

string

required

External partner code.

createdAt

date-time

required

External partner creation date.

info

array of objects

required

External partner information.

info\*

object

type

string

enum

required

`TEXT` `LINK`

value

string

required

updatedAt

date-time

required

External partner update date.

extras

array of objects

required

Extras.

extras\*

object

applicationDate

date-time

Extra application date.

displayMode

string

enum

required

Defaults to VISIBLE\_ITEMIZED

Extra display mode.

`VISIBLE_ITEMIZED` `VISIBLE_INCLUDED` `INVISIBLE_INCLUDED`

info

object

Extra information.

info object

price

object

Extra price.

price object

quantity

number

required

Extra quantity.

guests

array of objects

required

Guests information.

guests\*

object

address

object

Customer address.

address object

comments

string

Customer comments.

contact

object

Customer contact information.

contact object

id

string

required

Customer ID.

identityDocument

object

Customer identity document.

identityDocument object

kinship

string

enum

Customer kinship type.

`GRANDPA_GRANDMA` `GREAT_GRANDPA_GRANDMA` `GREAT_GRANDSON_GRANDDAUGHTER` `BROTHER_SISTER_IN_LAW` `SPOUSE` `SON_DAUGHTER` `BROTHER_SISTER` `GRANDSON_GRANDDAUGHTER` `FATHER_MOTHER` `NEPHEW_NIECE` `FATHER_MOTHER_IN_LAW` `UNCLE_AUNT` `SON_DAUGHTER_IN_LAW` `TUTORS` `OTHER`

language

object

Customer language.

language object

name

string

Customer name.

surnames

array of strings

required

Customer surnames.

surnames\*

title

string

Customer title.

id

string

required

Booking ID

language

object

Language.

language object

occupancy

object

Booking occupancy information.

occupancy object

occupant

object

Occupant information.

occupant object

paymentMethod

object

Payment method internal.

paymentMethod object

payments

array of objects

required

Payments information.

payments\*

object

amount

number

required

Payment amount. This integer needs to be converted according to decimalPlaces.

dueDate

date-time

Payment due date.

id

string

required

Payment ID.

method

object

Payment method.

method object

paidDate

date-time

Payment paid date.

status

string

enum

Payment status.

`PENDING` `PAID` `PAID_TO_PORTAL` `FAILED` `ON_HOLD`

type

string

enum

required

Payment type.

`BOOKING` `SECURITY_DEPOSIT`

promotionalCode

string

Promotional code applied to the booking.

reference

string

Booking reference.

salesChannel

object

Booking sales channel information.

salesChannel object

status

string

enum

Booking status

`CONFIRMED` `CANCELLED` `PAID` `INFORMATION_REQUEST` `UNAVAILABLE` `OWNER` `UNPAID` `CANCELLED_BY_OWNER` `TPV_REQUEST` `UNDER_REQUEST` `AVAILABILITY_REQUEST` `GUARANTEE` `CONFLICTED` `INVOICED` `NON_BLOCKING` `UNKNOWN`

stayDates

object

required

Booking arrival and departure dates.

stayDates object

tags

array of strings

Tags associated with the booking.

tags

updatedAt

date-time

required

Booking last update date.

400


=======

[](#bookingcontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

404

Updated 10 days ago

* * *

[

List Bookings

](/reference/bookingcontroller_getlist)[

Delete Booking

](/reference/bookingcontroller_delete)

Did this page help you?

Yes

No# Update Booking Occupants

URL: https://pms-api-docs.avantio.pro/reference/bookingcontroller_updateoccupants

Update Booking Occupants
========================

put

https://api.avantio.pro/pms/v2/bookings/{id}/occupants

This call allows users to update the number of occupants for an existing booking. By specifying the booking ID and providing the necessary details, users can adjust the number of guests and their data.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Booking ID.

[](#body-params)Body Params

customer

object

customer object

occupants

array of objects

occupants

ADD object

[](#response-schemas)Responses

200

400


=======

[](#bookingcontroller-updateoccupants-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Update Booking

](/reference/bookingcontroller_update)[

Update Booking External Field

](/reference/bookingcontroller_setexternalfield)

Did this page help you?

Yes

No# List Bookings

URL: https://pms-api-docs.avantio.pro/reference/bookingcontroller_getlist

List Bookings
=============

get

https://api.avantio.pro/pms/v2/bookings

This call retrieves a complete list of all bookings in the system. It allows users to get a preview information about each booking, such as its reference, accommodation, dates or status. This endpoint is useful to allow you to browse and select bookings based on your preferences.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

enum

Defaults to creationDate,asc

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

idcreationDateasccreationDateupdatedAtarrivalDatedepartureDatecreatedAt\-creationDate\-updatedAt\-arrivalDate\-departureDate\-createdAt

Show 11 enum values

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

id

number

reference

string

Filter bookings by reference.

accommodation

number

Filter bookings by accommodation id.

creationDate\_from

date-time

Filter bookings created after date.

creationDate\_to

date-time

Filter bookings created before date.

updatedAt\_from

date-time

Filter bookings modified after date.

updatedAt\_to

date-time

Filter bookings modified before date.

arrivalDate\_from

date-time

Filter bookings by arrival after date.

arrivalDate\_to

date-time

Filter bookings by arrival before date.

departureDate\_from

date-time

Filter bookings by departure before date.

departureDate\_to

date-time

Filter bookings by departure before date.

status

array of strings

status

ADD string

[](#response-schemas)Responses

200


=======

[](#bookingcontroller-getlist-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

accommodationId

string

required

Accommodation ID.

companyId

string

required

createdAt

date-time

required

Booking insertion date in our system.

creationDate

date-time

required

Booking creation date.

externalData

object

External data.

externalData object

id

string

required

Booking ID.

reference

string

Booking reference.

status

string

enum

Booking status.

`CONFIRMED` `CANCELLED` `PAID` `INFORMATION_REQUEST` `UNAVAILABLE` `OWNER` `UNPAID` `CANCELLED_BY_OWNER` `TPV_REQUEST` `UNDER_REQUEST` `AVAILABILITY_REQUEST` `GUARANTEE` `CONFLICTED` `INVOICED` `NON_BLOCKING` `UNKNOWN`

stayDates

object

required

Booking stay dates.

stayDates object

updatedAt

date-time

required

Booking last update date.

400


=======

[](#bookingcontroller-getlist-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

Updated 10 days ago

* * *

[

Acknowledge Booking Update

](/reference/acknowledgebookingupdatescontroller_acknowledge-1)[

Get Booking

](/reference/bookingcontroller_get)

Did this page help you?

Yes

No# Update Booking

URL: https://pms-api-docs.avantio.pro/reference/bookingcontroller_update

Update Booking
==============

put

https://api.avantio.pro/pms/v2/bookings/{id}

This call allows users to update the details of an existing reservation for a specific accommodation. By indicating the accommodation ID and booking ID, users can modify information such as booking dates, guest information, payment status and other relevant details.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Booking ID.

[](#body-params)Body Params

accommodationId

string

Accommodation ID. If it's not provided, the booking will remain in the same accommodation.

checkInTime

string

Time when the guest checked-in.

checkOutTime

string

Time when the guest checked-out.

customer

object

customer object

occupants

array of objects

occupants

ADD object

payments

array of objects

Booking payments.

payments

ADD object

requestedCheckInTime

string

Time when the guest requested to check-in. Unlike checkInTime, this field represents the guest's request, not the time the PM agreed to.

requestedCheckOutTime

string

Time when the guest requested to check-out. Unlike checkOutTime, this field represents the guest's request, not the time the PM agreed to.

status

string

enum

Booking status.

CONFIRMEDCONFIRMEDCANCELLEDPAIDUNPAID

Allowed:

`CONFIRMED``CANCELLED``PAID``UNPAID`

[](#response-schemas)Responses

200

400


=======

[](#bookingcontroller-update-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Delete Booking

](/reference/bookingcontroller_delete)[

Update Booking Occupants

](/reference/bookingcontroller_updateoccupants)

Did this page help you?

Yes

No# Delete Booking

URL: https://pms-api-docs.avantio.pro/reference/bookingcontroller_delete

Delete Booking
==============

delete

https://api.avantio.pro/pms/v2/bookings/{id}

This call allows users to delete an existing reservation. By indicating the booking ID, users can delete a specific booking and all related entities.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Booking ID.

[](#response-schemas)Responses

204

400


=======

[](#bookingcontroller-delete-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Booking

](/reference/bookingcontroller_get)[

Update Booking

](/reference/bookingcontroller_update)

Did this page help you?

Yes

No# List Galleries

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_getgalleries

List Galleries
==============

get

https://api.avantio.pro/pms/v2/galleries

This call retrieves the image galleries of the company. Users can access to the list of the galeries available, and access to the details of each gallery by using the list gallery endpoint.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

[](#response-schemas)Responses

200


=======

[](#gallerycontroller-getgalleries-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

accommodations

array of objects

List of accommodations associated with the gallery.

accommodations

object

\_links

object

required

Accommodation links

\_links object

clean

boolean

required

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

id

string

required

The unique identifier of the accommodation

internalId

string

Internal unique identifier of the accommodation in the account

name

string

required

The name of the accommodation

status

string

enum

required

The status of the accommodation

`ENABLED` `DISABLED` `DELETED`

type

string

enum

required

The type of the accommodation

`APARTMENT` `VILLA` `HOTEL` `APARTHOTEL` `FLAT` `COMMERCIAL_SPACE` `COTTAGE` `GARAGE/PARKING` `BRAND_NEW_BUILDING` `PLOT` `SEMI_DETACHED_HOUSE` `STUDIO` `MOORING` `HOUSE` `CHALET` `BUNGALOW` `COUNTRY_HOUSE` `INDUSTRIAL_PREMISE` `BOXROOM` `EXCHANGE` `RESORT` `MOBILE_HOME` `RENT_BY_ROOM` `PENTHOUSE` `BUSINESS_LEASE_TRANSFER` `BOAT` `CONDOMINIUM` `TOWNHOUSE` `FARM_STAY` `TRULLO`

id

string

required

The ID of the gallery.

name

string

required

The name of the gallery.

title

array of objects

The title of the gallery.

title

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 700

Localized text

400


=======

[](#gallerycontroller-getgalleries-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Availabilities

](/reference/availabilitycontroller_createavailability)[

Get Gallery

](/reference/gallerycontroller_getgallery)

Did this page help you?

Yes

No# Upload Image

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_createimage

Upload Image
============

post

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/gallery/{galleryId}/images

This call allows users to add new images to a specific accommodation gallery. By specifying the accommodation ID and gallery ID, along with the necessary image details, users can optimize the visual presentation of the property.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

galleryId

string

required

Gallery ID

[](#body-params)Body Params

category

string

enum

required

Image category

KITCHENFRONTBEDROOMBATHROOMGARDENSWIMMING\_POOLTERRACEGARAGEEXTERIORDETAILSOTHERSLIVING\_ROOMRECEPTIONBALCONYDINNING\_ROOMCOFFE\_PLACEVIEWSPROPERTY\_FLOOR\_PLANSRESORTCHILDRENS\_ROOM

Show 20 enum values

description

array of objects

required

Image localized description

description\*

ADD object

name

string

required

length ≤ 100

Image name

order

number

required

≥ 1

Image order in the gallery. Starts from 1.

url

string

required

Image URL. Note that the URL provided must be public as it will be used to upload the file to our system. Valid MIME types are image/jpg, image/jpeg, image/png, image/webp, image/gif. File size must be between 51200 and 11534336 bytes.

[](#response-schemas)Responses

201

400


=======

[](#gallerycontroller-createimage-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Update Gallery Info

](/reference/gallerycontroller_update)[

Delete Image

](/reference/gallerycontroller_deleteimage)

Did this page help you?

Yes

No# Get Accommodation Gallery

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_get

Get Accommodation Gallery
=========================

get

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/gallery

This call retrieves the image gallery of a specific accommodation. By specifying the ID of the accommodation, users can access images showing the property and provide visual details to potential guests.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

[](#response-schemas)Responses

200


=======

[](#gallerycontroller-get-object-response-body)Response body

object

data

object

required

accommodations

array of objects

List of accommodations associated with the gallery.

accommodations

object

\_links

object

required

Accommodation links

\_links object

clean

boolean

required

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

id

string

required

The unique identifier of the accommodation

internalId

string

Internal unique identifier of the accommodation in the account

name

string

required

The name of the accommodation

status

string

enum

required

The status of the accommodation

`ENABLED` `DISABLED` `DELETED`

type

string

enum

required

The type of the accommodation

`APARTMENT` `VILLA` `HOTEL` `APARTHOTEL` `FLAT` `COMMERCIAL_SPACE` `COTTAGE` `GARAGE/PARKING` `BRAND_NEW_BUILDING` `PLOT` `SEMI_DETACHED_HOUSE` `STUDIO` `MOORING` `HOUSE` `CHALET` `BUNGALOW` `COUNTRY_HOUSE` `INDUSTRIAL_PREMISE` `BOXROOM` `EXCHANGE` `RESORT` `MOBILE_HOME` `RENT_BY_ROOM` `PENTHOUSE` `BUSINESS_LEASE_TRANSFER` `BOAT` `CONDOMINIUM` `TOWNHOUSE` `FARM_STAY` `TRULLO`

description

array of objects

Gallery localized description

description

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 20000

Localized text

id

string

required

Gallery ID

images

array of objects

Gallery images

images

object

category

string

enum

required

Image category

`KITCHEN` `FRONT` `BEDROOM` `BATHROOM` `GARDEN` `SWIMMING_POOL` `TERRACE` `GARAGE` `EXTERIOR` `DETAILS` `OTHERS` `LIVING_ROOM` `RECEPTION` `BALCONY` `DINNING_ROOM` `COFFE_PLACE` `VIEWS` `PROPERTY_FLOOR_PLANS` `RESORT` `CHILDRENS_ROOM`

description

array of objects

required

Image localized description

description\*

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 700

Localized text

id

string

required

Image ID

name

string

required

length ≤ 100

Image name

order

number

required

≥ 1

Image order in the gallery. Starts from 1.

url

string

required

Image URL. Note that the URL provided must be public as it will be used to upload the file to our system. Valid MIME types are image/jpg, image/jpeg, image/png, image/webp, image/gif. File size must be between 51200 and 11534336 bytes.

name

string

required

length ≤ 150

Gallery name

title

array of objects

Gallery localized title

title

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 700

Localized text

400


=======

[](#gallerycontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Gallery

](/reference/gallerycontroller_getgallery)[

Create Gallery

](/reference/gallerycontroller_create)

Did this page help you?

Yes

No# Delete Image

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_deleteimage

Delete Image
============

delete

https://api.avantio.pro/pms/v2/galleries/{galleryId}/images/{imageId}

This call allows users to remove a specific image from an accommodation's gallery. By specifying the accommodation ID, the gallery ID and the image ID, users can delete an image that is no longer relevant or appropriate for the accommodation.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

galleryId

string

required

Gallery ID

imageId

string

required

Image ID

[](#response-schemas)Responses

204

400


=======

[](#gallerycontroller-deleteimage-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Upload Image

](/reference/gallerycontroller_createimage)[

Occupation Rules

](/reference/occupation-rules)

Did this page help you?

Yes

No# Update Gallery Info

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_update

Update Gallery Info
===================

put

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/gallery/{galleryId}

This call allows users to update the gallery details of a specific accommodation. Note that in order to update the images, the "Upload Image" and "Delete Image" endpoints should be used.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

galleryId

string

required

Gallery ID

[](#body-params)Body Params

description

array of objects

Gallery localized description

description

ADD object

name

string

required

length ≤ 150

Gallery name

title

array of objects

Gallery localized title

title

ADD object

[](#response-schemas)Responses

200

400


=======

[](#gallerycontroller-update-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Create Gallery

](/reference/gallerycontroller_create)[

Upload Image

](/reference/gallerycontroller_createimage)

Did this page help you?

Yes

No# Create Gallery

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_create

Create Gallery
==============

post

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/gallery

This call allows users to add new images to the gallery of a specific accommodation. By specifying the accommodation ID and providing the necessary image details, users can optimize the visual presentation of the property.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

[](#body-params)Body Params

accommodations

array of objects

List of accommodations associated with the gallery.

accommodations

ADD object

description

array of objects

Gallery localized description

description

ADD object

images

array of objects

Gallery images

images

ADD object

name

string

required

length ≤ 150

Gallery name

title

array of objects

Gallery localized title

title

ADD object

[](#response-schemas)Responses

201

400


=======

[](#gallerycontroller-create-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Accommodation Gallery

](/reference/gallerycontroller_get)[

Update Gallery Info

](/reference/gallerycontroller_update)

Did this page help you?

Yes

No# Get Gallery

URL: https://pms-api-docs.avantio.pro/reference/gallerycontroller_getgallery

Get Gallery
===========

get

https://api.avantio.pro/pms/v2/galleries/{galleryId}

This call retrieves the image gallery given a gallery ID. Users can access to the details of the gallery, and access to the images of the gallery by providing the gallery ID obtained from the list gallery endpoint.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

galleryId

string

required

Gallery ID

[](#response-schemas)Responses

200


=======

[](#gallerycontroller-getgallery-object-response-body)Response body

object

data

object

required

accommodations

array of objects

List of accommodations associated with the gallery.

accommodations

object

\_links

object

required

Accommodation links

\_links object

clean

boolean

required

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

id

string

required

The unique identifier of the accommodation

internalId

string

Internal unique identifier of the accommodation in the account

name

string

required

The name of the accommodation

status

string

enum

required

The status of the accommodation

`ENABLED` `DISABLED` `DELETED`

type

string

enum

required

The type of the accommodation

`APARTMENT` `VILLA` `HOTEL` `APARTHOTEL` `FLAT` `COMMERCIAL_SPACE` `COTTAGE` `GARAGE/PARKING` `BRAND_NEW_BUILDING` `PLOT` `SEMI_DETACHED_HOUSE` `STUDIO` `MOORING` `HOUSE` `CHALET` `BUNGALOW` `COUNTRY_HOUSE` `INDUSTRIAL_PREMISE` `BOXROOM` `EXCHANGE` `RESORT` `MOBILE_HOME` `RENT_BY_ROOM` `PENTHOUSE` `BUSINESS_LEASE_TRANSFER` `BOAT` `CONDOMINIUM` `TOWNHOUSE` `FARM_STAY` `TRULLO`

description

array of objects

Gallery localized description

description

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 20000

Localized text

id

string

required

Gallery ID

images

array of objects

Gallery images

images

object

category

string

enum

required

Image category

`KITCHEN` `FRONT` `BEDROOM` `BATHROOM` `GARDEN` `SWIMMING_POOL` `TERRACE` `GARAGE` `EXTERIOR` `DETAILS` `OTHERS` `LIVING_ROOM` `RECEPTION` `BALCONY` `DINNING_ROOM` `COFFE_PLACE` `VIEWS` `PROPERTY_FLOOR_PLANS` `RESORT` `CHILDRENS_ROOM`

description

array of objects

required

Image localized description

description\*

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 700

Localized text

id

string

required

Image ID

name

string

required

length ≤ 100

Image name

order

number

required

≥ 1

Image order in the gallery. Starts from 1.

url

string

required

Image URL. Note that the URL provided must be public as it will be used to upload the file to our system. Valid MIME types are image/jpg, image/jpeg, image/png, image/webp, image/gif. File size must be between 51200 and 11534336 bytes.

name

string

required

length ≤ 150

Gallery name

title

array of objects

Gallery localized title

title

object

language

string

enum

required

Language code

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

text

string

required

length ≤ 700

Localized text

400


=======

[](#gallerycontroller-getgallery-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Galleries

](/reference/gallerycontroller_getgalleries)[

Get Accommodation Gallery

](/reference/gallerycontroller_get)

Did this page help you?

Yes

No# Delete Accommodation

URL: https://pms-api-docs.avantio.pro/reference/accommodationcontroller_deleteaccommodation

Delete Accommodation
====================

delete

https://api.avantio.pro/pms/v2/accommodations/{id}

This call allows users to remove an existing property from the system by specifying the property ID, ensuring that it is no longer available for booking or viewing. This endpoint is useful for property managers or administrators who need to remove a property from the portal.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Accommodation ID

[](#response-schemas)Responses

200

400


=======

[](#accommodationcontroller-deleteaccommodation-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Update Accommodation

](/reference/accommodationcontroller_updateaccommodation)[

Availability

](/reference/availability-1)

Did this page help you?

Yes

No# Create Accommodation

URL: https://pms-api-docs.avantio.pro/reference/accommodationcontroller_createaccommodation

Create Accommodation
====================

post

https://api.avantio.pro/pms/v2/accommodations

This call allows users to create a new accommodation entry in the system. By providing the necessary details such as name, location, type, and price, users can add new accommodations available for others to view and book. This endpoint is essential for property managers or administrators who must add new properties to the portal.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#body-params)Body Params

area

object

Area of the accommodation

area object

capacity

object

Capacity of the accommodation

capacity object

clean

object

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

clean object

distribution

object

Distribution of the accommodation

distribution object

externalReference

string

length ≤ 50

External ID of the accommodation, used for integration purposes

features

object

Features of the accommodation

features object

galleryId

string

Gallery ID in case the gallery was created beforehand.

internalId

string

Internal unique identifier of the accommodation in the account

location

object

required

Location of the accommodation

location object

name

string

required

length ≤ 150

Name of the accommodation

pricingModel

string

enum

Pricing model of the accommodation

SEASONAL\_RATESSEASONAL\_RATESLENGTH\_OF\_STAY

Allowed:

`SEASONAL_RATES``LENGTH_OF_STAY`

purpose

string

enum

required

Purpose of the accommodation

RENTALLONG\_STAY\_RENTALSELL

Allowed:

`RENTAL``LONG_STAY_RENTAL``SELL`

registryData

object

Information about the official registration of the property

registryData object

services

array

List of extra services provided by the accommodation

services

ADD

status

string

enum

required

Status of the accommodation

ENABLEDDISABLED

Allowed:

`ENABLED``DISABLED`

subType

string

length ≤ 50

Free text field to specify any other type of accommodation

surroundingsAndDistances

object

Surroundings and distances of the accommodation

surroundingsAndDistances object

type

string

enum

required

Type of accommodation

APARTMENTVILLAHOTELAPARTHOTELFLATCOMMERCIAL\_SPACECOTTAGEGARAGE/PARKINGBRAND\_NEW\_BUILDINGPLOTSEMI\_DETACHED\_HOUSESTUDIOMOORINGHOUSECHALETBUNGALOWCOUNTRY\_HOUSEINDUSTRIAL\_PREMISEBOXROOMEXCHANGERESORTMOBILE\_HOMERENT\_BY\_ROOMPENTHOUSEBUSINESS\_LEASE\_TRANSFERBOATCONDOMINIUMTOWNHOUSEFARM\_STAYTRULLO

Show 30 enum values

[](#response-schemas)Responses

201


=======

[](#accommodationcontroller-createaccommodation-object-response-body)Response body

object

data

object

required

id

string

required

Accomodation ID

400


=======

[](#accommodationcontroller-createaccommodation-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Accommodation

](/reference/accommodationcontroller_getaccommodation)[

Update Accommodation

](/reference/accommodationcontroller_updateaccommodation)

Did this page help you?

Yes

No# Get Accommodation

URL: https://pms-api-docs.avantio.pro/reference/accommodationcontroller_getaccommodation

Get Accommodation
=================

get

https://api.avantio.pro/pms/v2/accommodations/{id}

This call retrieves the details of a specific accommodation by providing the accommodation ID. It allows users to view all the details of a specific accommodation, such as its name, location, type, features, and amenities. This endpoint is useful for users who want to view the details of a specific accommodation.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Accommodation ID

[](#response-schemas)Responses

200


=======

[](#accommodationcontroller-getaccommodation-object-response-body)Response body

object

data

object

required

area

object

Area of the accommodation

area object

capacity

object

Capacity of the accommodation

capacity object

clean

object

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

Has additional fields

distribution

object

required

Distribution of the accommodation

distribution object

externalReference

string

length ≤ 50

External ID of the accommodation, used for integration purposes

features

object

Features of the accommodation

features object

galleryId

string

Gallery ID in case the gallery was created beforehand.

internalId

string

Internal unique identifier of the accommodation in the account

location

object

Location of the accommodation

location object

name

string

required

length ≤ 150

Name of the accommodation

owner

object

Owner of the accommodation

owner object

pricingModel

string

enum

required

Pricing model of the accommodation

`SEASONAL_RATES` `LENGTH_OF_STAY`

purpose

string

enum

required

Purpose of the accommodation

`RENTAL` `LONG_STAY_RENTAL` `SELL`

registryData

object

Information about the official registration of the property

registryData object

services

array

List of extra services provided by the accommodation

services

Heating

AirConditioned

SwimmingPool

HeatedPool

Parking

ExtraBeds

BedClothes

Towels

InternetAccess

PetsAllowed

FinalClean

Cot

Deposit

status

string

enum

required

Status of the accommodation

`ENABLED` `DISABLED` `DELETED`

subType

string

length ≤ 50

Free text field to specify any other type of accommodation

surroundingsAndDistances

object

Surroundings and distances of the accommodation

surroundingsAndDistances object

type

string

enum

required

Type of accommodation

`APARTMENT` `VILLA` `HOTEL` `APARTHOTEL` `FLAT` `COMMERCIAL_SPACE` `COTTAGE` `GARAGE/PARKING` `BRAND_NEW_BUILDING` `PLOT` `SEMI_DETACHED_HOUSE` `STUDIO` `MOORING` `HOUSE` `CHALET` `BUNGALOW` `COUNTRY_HOUSE` `INDUSTRIAL_PREMISE` `BOXROOM` `EXCHANGE` `RESORT` `MOBILE_HOME` `RENT_BY_ROOM` `PENTHOUSE` `BUSINESS_LEASE_TRANSFER` `BOAT` `CONDOMINIUM` `TOWNHOUSE` `FARM_STAY` `TRULLO`

units

number

1 to 34

Defaults to 1

Number of units of the accommodation

updatedAt

date-time

400


=======

[](#accommodationcontroller-getaccommodation-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

List Accommodation

](/reference/accommodationcontroller_getaccommodations)[

Create Accommodation

](/reference/accommodationcontroller_createaccommodation)

Did this page help you?

Yes

No# List Accommodation

URL: https://pms-api-docs.avantio.pro/reference/accommodationcontroller_getaccommodations

List Accommodation
==================

get

https://api.avantio.pro/pms/v2/accommodations

This call retrieves a complete list of all available accommodations in the system. It allows users to get a preview information about each accommodation, such as its name, type or status. This endpoint is useful to allow you to browse and select accommodations based on your preferences. In order to get the full details of a specific accommodation, you can use the "Get Accommodation" endpoint.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

type

string

enum

Filter by accommodation type. Example: type=APARTMENT,VILLA

APARTMENTVILLAHOTELAPARTHOTELFLATCOMMERCIAL\_SPACECOTTAGEGARAGE/PARKINGBRAND\_NEW\_BUILDINGPLOTSEMI\_DETACHED\_HOUSESTUDIOMOORINGHOUSECHALETBUNGALOWCOUNTRY\_HOUSEINDUSTRIAL\_PREMISEBOXROOMEXCHANGERESORTMOBILE\_HOMERENT\_BY\_ROOMPENTHOUSEBUSINESS\_LEASE\_TRANSFERBOATCONDOMINIUMTOWNHOUSEFARM\_STAYTRULLO

Show 30 enum values

status

array of strings

Filter by accommodation status. Example: status=DISABLED,DELETED

status

ADD string

[](#response-schemas)Responses

200


=======

[](#accommodationcontroller-getaccommodations-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

\_links

object

required

Accommodation links

\_links object

clean

boolean

required

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

id

string

required

The unique identifier of the accommodation

internalId

string

Internal unique identifier of the accommodation in the account

name

string

required

The name of the accommodation

status

string

enum

required

The status of the accommodation

`ENABLED` `DISABLED` `DELETED`

type

string

enum

required

The type of the accommodation

`APARTMENT` `VILLA` `HOTEL` `APARTHOTEL` `FLAT` `COMMERCIAL_SPACE` `COTTAGE` `GARAGE/PARKING` `BRAND_NEW_BUILDING` `PLOT` `SEMI_DETACHED_HOUSE` `STUDIO` `MOORING` `HOUSE` `CHALET` `BUNGALOW` `COUNTRY_HOUSE` `INDUSTRIAL_PREMISE` `BOXROOM` `EXCHANGE` `RESORT` `MOBILE_HOME` `RENT_BY_ROOM` `PENTHOUSE` `BUSINESS_LEASE_TRANSFER` `BOAT` `CONDOMINIUM` `TOWNHOUSE` `FARM_STAY` `TRULLO`

400


=======

[](#accommodationcontroller-getaccommodations-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Get Accommodation

](/reference/accommodationcontroller_getaccommodation)

Did this page help you?

Yes

No# Update Accommodation

URL: https://pms-api-docs.avantio.pro/reference/accommodationcontroller_updateaccommodation

Update Accommodation
====================

put

https://api.avantio.pro/pms/v2/accommodations/{id}

This call allows users to update the details of an existing accommodation. Users must provide the whole set of details for the accommodation, including the property ID, to ensure that the system can update the correct property. This endpoint is useful for property managers or administrators who need to update the details of a property.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Accommodation ID

[](#body-params)Body Params

area

object

Area of the accommodation

area object

capacity

object

Capacity of the accommodation

capacity object

clean

object

Flag to indicate if the accommodation is cleaned: true if it is cleaned, false otherwise

clean object

distribution

object

Distribution of the accommodation

distribution object

externalReference

string

length ≤ 50

External ID of the accommodation, used for integration purposes

features

object

Features of the accommodation

features object

galleryId

string

Gallery ID in case the gallery was created beforehand.

internalId

string

Internal unique identifier of the accommodation in the account

location

object

required

Location of the accommodation

location object

name

string

required

length ≤ 150

Name of the accommodation

pricingModel

string

enum

Pricing model of the accommodation

SEASONAL\_RATESSEASONAL\_RATESLENGTH\_OF\_STAY

Allowed:

`SEASONAL_RATES``LENGTH_OF_STAY`

purpose

string

enum

required

Purpose of the accommodation

RENTALLONG\_STAY\_RENTALSELL

Allowed:

`RENTAL``LONG_STAY_RENTAL``SELL`

registryData

object

Information about the official registration of the property

registryData object

services

array

List of extra services provided by the accommodation

services

ADD

status

string

enum

required

Status of the accommodation

ENABLEDDISABLED

Allowed:

`ENABLED``DISABLED`

subType

string

length ≤ 50

Free text field to specify any other type of accommodation

surroundingsAndDistances

object

Surroundings and distances of the accommodation

surroundingsAndDistances object

type

string

enum

required

Type of accommodation

APARTMENTVILLAHOTELAPARTHOTELFLATCOMMERCIAL\_SPACECOTTAGEGARAGE/PARKINGBRAND\_NEW\_BUILDINGPLOTSEMI\_DETACHED\_HOUSESTUDIOMOORINGHOUSECHALETBUNGALOWCOUNTRY\_HOUSEINDUSTRIAL\_PREMISEBOXROOMEXCHANGERESORTMOBILE\_HOMERENT\_BY\_ROOMPENTHOUSEBUSINESS\_LEASE\_TRANSFERBOATCONDOMINIUMTOWNHOUSEFARM\_STAYTRULLO

Show 30 enum values

[](#response-schemas)Responses

200

400


=======

[](#accommodationcontroller-updateaccommodation-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Create Accommodation

](/reference/accommodationcontroller_createaccommodation)[

Delete Accommodation

](/reference/accommodationcontroller_deleteaccommodation)

Did this page help you?

Yes

No# Assign Occupation Rule

URL: https://pms-api-docs.avantio.pro/reference/occupationrulescontroller_assignrule

Assign Occupation Rule
======================

patch

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/occupation-rules

This call allows users to assign a specific occupational rule to an accommodation. By specifying the rule ID and the accommodation ID, the occupational rule will be assigned to the accommodation. One occupational rule can be assigned to multiple accommodations.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID to assign the occupation rule to.

[](#body-params)Body Params

occupationRuleId

string

required

The ID of the occupation rule to assign.

[](#response-schemas)Responses

200

400


=======

[](#occupationrulescontroller-assignrule-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Occupation Rule

](/reference/occupationrulescontroller_createaccommodationrule)[

Update Occupation Rule

](/reference/occupationrulescontroller_updaterule)

Did this page help you?

Yes

No# Update Occupation Rule

URL: https://pms-api-docs.avantio.pro/reference/occupationrulescontroller_updaterule

Update Occupation Rule
======================

put

https://api.avantio.pro/pms/v2/occupation-rules/{id}

This call allows users to update an existing occupancy rule. This operation replaces the entire rule with the new data. Use this endpoint to modify all aspects of an occupancy rule.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Occupation rule ID.

[](#body-params)Body Params

description

string

The description of the occupation rule.

name

string

required

The name of the occupation rule.

seasons

array of objects

required

seasons\*

ADD object

[](#response-schemas)Responses

200

400


=======

[](#occupationrulescontroller-updaterule-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Assign Occupation Rule

](/reference/occupationrulescontroller_assignrule)[

Rates

](/reference/rates-1)

Did this page help you?

Yes

No# List Occupation Rules

URL: https://pms-api-docs.avantio.pro/reference/occupationrulescontroller_listrules

List Occupation Rules
=====================

get

https://api.avantio.pro/pms/v2/occupation-rules

This call retrieves all the occupation rules for the company. Use this endpoint to view all occupation rules to manage them.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

[](#response-schemas)Responses

200


=======

[](#occupationrulescontroller-listrules-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

description

string

The description of the occupation rule.

id

string

required

OccupationRule ID

name

string

required

The name of the occupation rule.

seasons

array of objects

required

seasons\*

object

checkIn

required

Week or month days when the check-in is allowed.

WeekDaysSelection

MonthDaysSelection

AnyDaySelection

checkOut

required

Week or month days when the check-out is allowed.

WeekDaysSelection

MonthDaysSelection

AnyDaySelection

from

date

required

The start date of the season.

maxNights

number

1 to 600

Maximum number of nights. Must be greater or equal to the minimum number of nights.

minNights

number

required

1 to 600

Minimum number of nights.

to

date

required

The end date of the season. Must be after the start date.

400


=======

[](#occupationrulescontroller-listrules-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Delete Image

](/reference/gallerycontroller_deleteimage)[

Get Occupation Rule

](/reference/occupationrulescontroller_getrule)

Did this page help you?

Yes

No# Get Occupation Rule

URL: https://pms-api-docs.avantio.pro/reference/occupationrulescontroller_getrule

Get Occupation Rule
===================

get

https://api.avantio.pro/pms/v2/occupation-rules/{id}

This call retrieves a specific occupational rule by ID. Use this endpoint to retrieve the details of a specific occupational rule.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Occupation rule ID.

[](#response-schemas)Responses

200


=======

[](#occupationrulescontroller-getrule-object-response-body)Response body

object

data

object

required

description

string

The description of the occupation rule.

id

string

required

OccupationRule ID

name

string

required

The name of the occupation rule.

seasons

array of objects

required

seasons\*

object

checkIn

required

Week or month days when the check-in is allowed.

WeekDaysSelection

MonthDaysSelection

AnyDaySelection

checkOut

required

Week or month days when the check-out is allowed.

WeekDaysSelection

MonthDaysSelection

AnyDaySelection

from

date

required

The start date of the season.

maxNights

number

1 to 600

Maximum number of nights. Must be greater or equal to the minimum number of nights.

minNights

number

required

1 to 600

Minimum number of nights.

to

date

required

The end date of the season. Must be after the start date.

400


=======

[](#occupationrulescontroller-getrule-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Occupation Rules

](/reference/occupationrulescontroller_listrules)[

Get Accommodation Occupation Rule

](/reference/occupationrulescontroller_getaccommodationrule)

Did this page help you?

Yes

No# Create Occupation Rule

URL: https://pms-api-docs.avantio.pro/reference/occupationrulescontroller_createaccommodationrule

Create Occupation Rule
======================

post

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/occupation-rules

This call allows users to create a new occupancy rule for a property. This endpoint is central for property managers to apply booking restrictions and optimize the use of their accommodations.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID.

[](#body-params)Body Params

description

string

The description of the occupation rule.

name

string

required

The name of the occupation rule.

seasons

array of objects

required

seasons\*

ADD object

[](#response-schemas)Responses

201

400


=======

[](#occupationrulescontroller-createaccommodationrule-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Get Accommodation Occupation Rule

](/reference/occupationrulescontroller_getaccommodationrule)[

Assign Occupation Rule

](/reference/occupationrulescontroller_assignrule)

Did this page help you?

Yes

No# Get Accommodation Occupation Rule

URL: https://pms-api-docs.avantio.pro/reference/occupationrulescontroller_getaccommodationrule

Get Accommodation Occupation Rule
=================================

get

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/occupation-rule

This call retrieves the occupational rule assigned to a specific accommodation. Use this endpoint to retrieve the details of the occupational rule assigned to an accommodation.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID.

[](#response-schemas)Responses

200


=======

[](#occupationrulescontroller-getaccommodationrule-object-response-body)Response body

object

data

object

required

description

string

The description of the occupation rule.

id

string

required

OccupationRule ID

name

string

required

The name of the occupation rule.

seasons

array of objects

required

seasons\*

object

checkIn

required

Week or month days when the check-in is allowed.

WeekDaysSelection

MonthDaysSelection

AnyDaySelection

checkOut

required

Week or month days when the check-out is allowed.

WeekDaysSelection

MonthDaysSelection

AnyDaySelection

from

date

required

The start date of the season.

maxNights

number

1 to 600

Maximum number of nights. Must be greater or equal to the minimum number of nights.

minNights

number

required

1 to 600

Minimum number of nights.

to

date

required

The end date of the season. Must be after the start date.

400


=======

[](#occupationrulescontroller-getaccommodationrule-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Occupation Rule

](/reference/occupationrulescontroller_getrule)[

Create Occupation Rule

](/reference/occupationrulescontroller_createaccommodationrule)

Did this page help you?

Yes

No# Request Test Credentials

URL: https://pms-api-docs.avantio.pro/docs/request-test-credentials

Documentation
-------------

*   [Getting Started with Avantio PMS API](/docs/getting-started-with-pms-api)
    *   [Introduction](/docs/api-base-url)
    *   [Authentication & Security](/docs/authentication-security)
    *   [Request test credentials](/docs/request-test-credentials)

Powered by [](https://readme.com?ref_src=hub&project=avantio-pms-api)

Request test credentials
========================

/\*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com \*/ @layer theme, base, components, utilities; @layer utilities;

The API allows you to manage and synchronize properties efficiently. To avoid manipulating live data, we provide test content. The integration process includes studying the documentation, reviewing the certification process and familiarizing yourself with the API methods.

Plan your integration, arrange a call with our team ([apiconnect@avantio.com](mailto:apiconnect@avantio.com)) and obtain test credentials. You will have 30 days to develop and complete the integration. Technical support if needed, will be provided via email throughout the process.

After certification, you will receive production credentials and the connection will be monitored during a pilot phase before the final launch.

Updated 4 months ago

* * *

[

Authentication & Security

](/docs/authentication-security)

Did this page help you?

Yes

No# Authentication & Security

URL: https://pms-api-docs.avantio.pro/docs/authentication-security

Documentation
-------------

*   [Getting Started with Avantio PMS API](/docs/getting-started-with-pms-api)
    *   [Introduction](/docs/api-base-url)
    *   [Authentication & Security](/docs/authentication-security)
    *   [Request test credentials](/docs/request-test-credentials)

Powered by [](https://readme.com?ref_src=hub&project=avantio-pms-api)

Authentication & Security
=========================

/\*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com \*/ @layer theme, base, components, utilities; @layer utilities;

Authentication is performed through an HTTP header. Avantio will provide you with an API key to authenticate your requests.

You must include an `X-Avantio-Auth` header in each request, along with your API key. This will authenticate the request, determine privileges, and validate your access.

During the development phase, you will receive a “test” key. Remember that it is critical not to publicly disclose either the test or production key. Keep it in a safe place.

  

> \[NOTE\]  
> Get in touch with our team.
> 
> If you're facing any difficulties, reach out to us at [apiconnect@avantio.com](mailto:apiconnect@avantio.com) for assistance!

Updated 4 months ago

* * *

[

Introduction

](/docs/api-base-url)[

Request test credentials

](/docs/request-test-credentials)

Did this page help you?

Yes

No# Introduction

URL: https://pms-api-docs.avantio.pro/docs/api-base-url

Documentation
-------------

*   [Getting Started with Avantio PMS API](/docs/getting-started-with-pms-api)
    *   [Introduction](/docs/api-base-url)
    *   [Authentication & Security](/docs/authentication-security)
    *   [Request test credentials](/docs/request-test-credentials)

Powered by [](https://readme.com?ref_src=hub&project=avantio-pms-api)

Introduction
============

/\*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com \*/ @layer theme, base, components, utilities; @layer utilities;

**API Base URL**

The base URL for Avantio PMS API is: `https://api.avantio.pro/pms.`

*   All data should be sent in JSON format and with a Content-Type: application/json header.
*   Avantio PMS API is served over HTTPS only for security reasons.

  

**Restrictions**

Each app requires a unique token.

**Rate limits**

Avantio sets rate limits to handle API traffic. Limits can be hard (aborts the call and returns an error) or soft (completes the call and logs a warning). The specific limits are detailed below:

Maximum number of Requests

Time frame

5

1 second

275

1 minute

16.500

1 hour

If more than 15 simultaneous requests are attempted, an immediate rate limit is triggered. If excessive requests continue to be sent, the rate limit quota will be further reduced. These limits ensure a continuous and stable data flow.

_Note_: _This section is currently under development. More information will be added soon._

Updated 4 months ago

* * *

[

Getting Started with Avantio PMS API

](/docs/getting-started-with-pms-api)[

Authentication & Security

](/docs/authentication-security)

Did this page help you?

Yes

No# Create/Update LOS Prices

URL: https://pms-api-docs.avantio.pro/reference/lengthofstaycontroller_createlosprices

Create or update length of stay prices
======================================

post

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/length-of-stay

Creates or updates the length of stay pricing information for a specific accommodation

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

[](#body-params)Body Params

currency

string

required

Currency code (ISO 4217)

records

array of strings

required

Price records in the format: `<date>,<guests>,<nights>:<price>[,<nights>:<price>...]`

Validation rules:

*   Date: YYYY-MM-DD format, within 18 months from today
*   Guests: number or range (≥1), e.g., '1' or '1-8'
*   Nights: number or range (≥1), e.g., '5' or '5-27'
*   Price: positive number, e.g., '100' or '100.50'
*   Max 550 unique dates
*   Max 47 price points per record

records\*

ADD string

[](#response-schemas)Responses

204

400


=======

[](#lengthofstaycontroller-createlosprices-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get length of stay price lines

](/reference/lengthofstaycontroller_getlos)[

Whoami

](/reference/whoami)

Did this page help you?

Yes

No# Get LOS Prices

URL: https://pms-api-docs.avantio.pro/reference/lengthofstaycontroller_getlos

Get length of stay price lines
==============================

get

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/length-of-stay

Retrieves the length of stay pricing information for a specific accommodation

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

[](#response-schemas)Responses

200


=======

[](#lengthofstaycontroller-getlos-object-response-body)Response body

object

currency

string

required

Currency code (ISO 4217)

records

array of strings

required

Price records in the format: `<date>,<guests>,<nights>:<price>[,<nights>:<price>...]`

Validation rules:

*   Date: YYYY-MM-DD format, within 18 months from today
*   Guests: number or range (≥1), e.g., '1' or '1-8'
*   Nights: number or range (≥1), e.g., '5' or '5-27'
*   Price: positive number, e.g., '100' or '100.50'
*   Max 550 unique dates
*   Max 47 price points per record

records\*

400


=======

[](#lengthofstaycontroller-getlos-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Create Message

](/reference/threadscontroller_createmessage)[

Create or update length of stay prices

](/reference/lengthofstaycontroller_createlosprices)

Did this page help you?

Yes

No# Create Availabilities

URL: https://pms-api-docs.avantio.pro/reference/availabilitycontroller_createavailability

Create Availabilities
=====================

post

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/availabilities

This call allows users to create or update the availability status of an accommodation. The periods provided in the request will overwrite any existing availability periods for the accommodation. If the periods are not provided, the availability status will be set to available for five years.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

[](#body-params)Body Params

seasons

array of objects

Defaults to

seasons

ADD object

[](#response-schemas)Responses

201

400


=======

[](#availabilitycontroller-createavailability-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Get Availabilities

](/reference/availabilitycontroller_getavailability)[

Gallery

](/reference/gallery-1)

Did this page help you?

Yes

No# Get Availabilities

URL: https://pms-api-docs.avantio.pro/reference/availabilitycontroller_getavailability

Get Availabilities
==================

get

https://api.avantio.pro/pms/v2/accommodations/{accommodationId}/availabilities

This call allows users to retrieve the availability status of an accommodation split by availability status's seasons. This allows users to retrieve the availability status calendar of an accommodation.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

accommodationId

string

required

Accommodation ID

[](#response-schemas)Responses

200


=======

[](#availabilitycontroller-getavailability-object-response-body)Response body

object

data

array of objects

required

data\*

object

from

date

required

The start date of the season

status

string

enum

required

`AVAILABLE` `UNAVAILABLE` `ON_REQUEST` `OWNER`

to

date

required

The end date of the season

400


=======

[](#availabilitycontroller-getavailability-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Delete Accommodation

](/reference/accommodationcontroller_deleteaccommodation)[

Create Availabilities

](/reference/availabilitycontroller_createavailability)

Did this page help you?

Yes

No# List Owners

URL: https://pms-api-docs.avantio.pro/reference/ownercontroller_list

List Owners
===========

get

https://api.avantio.pro/pms/v2/owners

This call retrieves a complete list of all owners in the system. It allows users to view various details about each owner. This endpoint is useful to allow you to browse and select owners based on your preferences.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

[](#response-schemas)Responses

200


=======

[](#ownercontroller-list-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

country

string

Owner's country

email

string

Owner's email

id

string

required

Owner ID

identityDocumentId

string

Owner's identity document ID

name

string

Owner's name

phone

string

Owner's phone

surnames

array of strings

Owner's surnames

surnames

400


=======

[](#ownercontroller-list-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Customer

](/reference/customercontroller_create)[

Get Owner

](/reference/ownercontroller_get)

Did this page help you?

Yes

No# Delete Owner

URL: https://pms-api-docs.avantio.pro/reference/ownercontroller_delete

Delete Owner
============

delete

https://api.avantio.pro/pms/v2/owners/{id}

This call allows users to remove an existing owner from the system by specifying the owner ID.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

204

400


=======

[](#ownercontroller-delete-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Update Owner

](/reference/ownercontroller_update)[

Reviews

](/reference/reviews)

Did this page help you?

Yes

No# Create Owner

URL: https://pms-api-docs.avantio.pro/reference/ownercontroller_create

Create Owner
============

post

https://api.avantio.pro/pms/v2/owners

This call allows users to create a new owner entry in the system. By providing the necessary details, users can add new owners to the system. This endpoint is essential for property managers who must add new owners to the system.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#body-params)Body Params

accountingInfo

object

Owner's accounting info

accountingInfo object

address

object

Owner's address

address object

birthDate

date

Owner's birth date

contact

object

Owner's contact data

contact object

creationDate

date

Owner's creation date. If not provided, the current date will be used

identityDocument

object

Owner's identity document

identityDocument object

language

string

enum

required

Owner's language

es\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

name

string

required

length ≤ 150

Owner's name

surnames

array of strings

required

Owner's surnames

surnames\*

ADD string

treatment

string

enum

Owner's treatment

MRCOMPANYFAMILYGRADUATE\_ENGINEERPROFESSORMRMR\_DRMR\_AND\_MRSMRSMRS\_AND\_DRMS

Show 10 enum values

[](#response-schemas)Responses

201


=======

[](#ownercontroller-create-object-response-body)Response body

object

400


=======

[](#ownercontroller-create-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Get Owner

](/reference/ownercontroller_get)[

Update Owner

](/reference/ownercontroller_update)

Did this page help you?

Yes

No# Update Owner

URL: https://pms-api-docs.avantio.pro/reference/ownercontroller_update

Update Owner
============

put

https://api.avantio.pro/pms/v2/owners/{id}

This call allows users to update the details of an existing owner. Users can make changes to owner details.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#body-params)Body Params

accountingInfo

object

Owner's accounting info

accountingInfo object

address

object

Owner's address

address object

birthDate

date

Owner's birth date

contact

object

Owner's contact data

contact object

creationDate

date

Owner's creation date. If not provided, the current date will be used

identityDocument

object

Owner's identity document

identityDocument object

language

string

enum

required

Owner's language

es\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

name

string

required

length ≤ 150

Owner's name

surnames

array of strings

required

Owner's surnames

surnames\*

ADD string

treatment

string

enum

Owner's treatment

MRCOMPANYFAMILYGRADUATE\_ENGINEERPROFESSORMRMR\_DRMR\_AND\_MRSMRSMRS\_AND\_DRMS

Show 10 enum values

[](#response-schemas)Responses

200


=======

[](#ownercontroller-update-object-response-body)Response body

object

data

object

required

accountingInfo

object

Owner's accounting info

accountingInfo object

address

object

Owner's address

address object

birthDate

date

Owner's birth date

contact

object

Owner's contact data

contact object

creationDate

date

Owner's creation date. If not provided, the current date will be used

id

string

required

Owner ID

identityDocument

object

Owner's identity document

identityDocument object

language

string

enum

required

Owner's language

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

name

string

required

length ≤ 150

Owner's name

surnames

array of strings

required

Owner's surnames

surnames\*

treatment

string

enum

Owner's treatment

`COMPANY` `FAMILY` `GRADUATE_ENGINEER` `PROFESSOR` `MR` `MR_DR` `MR_AND_MRS` `MRS` `MRS_AND_DR` `MS`

400


=======

[](#ownercontroller-update-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Create Owner

](/reference/ownercontroller_create)[

Delete Owner

](/reference/ownercontroller_delete)

Did this page help you?

Yes

No# Get Owner

URL: https://pms-api-docs.avantio.pro/reference/ownercontroller_get

Get Owner
=========

get

https://api.avantio.pro/pms/v2/owners/{id}

This call retrieves the details of a specific owner by providing the owner ID. It allows users to view all the details of a specific owner, such as their name, contact information, address, and language. This endpoint is useful for users who want to view the details of a specific owner.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200


=======

[](#ownercontroller-get-object-response-body)Response body

object

data

object

required

accountingInfo

object

Owner's accounting info

accountingInfo object

address

object

Owner's address

address object

birthDate

date

Owner's birth date

contact

object

Owner's contact data

contact object

creationDate

date

Owner's creation date. If not provided, the current date will be used

id

string

required

Owner ID

identityDocument

object

Owner's identity document

identityDocument object

language

string

enum

required

Owner's language

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

name

string

required

length ≤ 150

Owner's name

surnames

array of strings

required

Owner's surnames

surnames\*

treatment

string

enum

Owner's treatment

`COMPANY` `FAMILY` `GRADUATE_ENGINEER` `PROFESSOR` `MR` `MR_DR` `MR_AND_MRS` `MRS` `MRS_AND_DR` `MS`

400


=======

[](#ownercontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Owners

](/reference/ownercontroller_list)[

Create Owner

](/reference/ownercontroller_create)

Did this page help you?

Yes

No# Acknowledge Booking Update

URL: https://pms-api-docs.avantio.pro/reference/acknowledgebookingupdatescontroller_acknowledge-1

Acknowledge Booking Update
==========================

put

https://api.avantio.pro/pms/v2/booking-updates/{id}/ack

Acknowledges the booking update for the specified company and user.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200

The user has acknowledged the booking update

400


=======

[](#acknowledgebookingupdatescontroller-acknowledge-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

404

The booking id does not exist

500

Unexpected error

Updated 10 days ago

* * *

[

Get Booking Updates

](/reference/retrievebookingupdatescontroller_retrieve-1)[

Bookings

](/reference/bookings-1)

Did this page help you?

Yes

No# Get Booking Updates

URL: https://pms-api-docs.avantio.pro/reference/retrievebookingupdatescontroller_retrieve-1

Get Booking Updates
===================

get

https://api.avantio.pro/pms/v2/booking-updates

Retrieves the booking updates from the last 24 hours for the specified company.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Defaults to id,asc

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

[](#response-schemas)Responses

200

The booking updates from the last 24 hours


===================================================

[](#retrievebookingupdatescontroller-retrieve-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

id

string

required

reference

string

required

status

string

required

updatedAt

date-time

required

400


=======

[](#retrievebookingupdatescontroller-retrieve-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

500

Unexpected error

Updated 10 days ago

* * *

[

Get accommodation rate

](/reference/ratescontroller_getaccommodationrate)[

Acknowledge Booking Update

](/reference/acknowledgebookingupdatescontroller_acknowledge-1)

Did this page help you?

Yes

No# List Threads

URL: https://pms-api-docs.avantio.pro/reference/threadscontroller_list

List Threads
============

get

https://api.avantio.pro/pms/v2/threads

This call retrieves a list of all threads. It allows users to get a preview of each thread. This endpoint is useful for users who want to retrieve threads based on their preferences.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

pagination\_size

number

10 to 100

pagination\_cursor

string

lastMessage\_from

date-time

Filter threads by last message after date.

unread

boolean

Filter threads by unread messages.

truefalse

participantTypes

array of strings

Filter threads by participant type.

participantTypes

ADD string

customerId

string

Filter threads by customer id.

ownerId

string

Filter threads by owner id.

supplierId

string

Filter threads by supplier id.

booking\_id

string

Filter threads by booking id.

booking\_statuses

array of strings

Filter threads by booking status.

booking\_statuses

ADD string

booking\_salesChannels

array of strings

Filter threads by booking salesChannel.

booking\_salesChannels

ADD string

booking\_creationDate\_from

date-time

Filter threads by booking created after.

booking\_creationDate\_to

date-time

Filter threads by booking created before.

booking\_arrivalDate\_from

date-time

Filter threads by booking arrival date after.

booking\_arrivalDate\_to

date-time

Filter threads by booking arrival date before.

booking\_departureDate\_from

date-time

Filter threads by booking with a departure date after.

booking\_departureDate\_to

date-time

Filter threads by booking with a departure date before.

[](#response-schemas)Responses

200


=======

[](#threadscontroller-list-object-response-body)Response body

object

\_links

object

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

List of threads

data\*

object

active

boolean

required

True if the thread is active

id

string

required

Thread id

lastMessage

object

Thread last message

lastMessage object

participants

array of objects

required

Thread participants

participants\*

object

activeAt

date-time

Date when the participant was last active

alias

string

Alias of the participant. Only present if participant is UNKNOWN

deleted

boolean

Whether the participant is deleted

deletedAt

date-time

Date when the participant was be deleted

id

string

required

Participant id

markedAsUnread

boolean

Whether the participant has marked the thread as unread

name

string

Name of the participant

notifiedAt

date-time

Date when the participant was last notified

source

string

Source of the participant. Only present if participant is UNKNOWN

type

string

enum

required

Type of participant

`COMPANY` `CUSTOMER` `OWNER` `SUPPLIER` `UNKNOWN`

unreadMessages

number

required

Number of unread messages

400


=======

[](#threadscontroller-list-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Delete Supplier

](/reference/suppliercontroller_delete)[

Create Thread

](/reference/threadscontroller_create)

Did this page help you?

Yes

No# List Channels

URL: https://pms-api-docs.avantio.pro/reference/threadscontroller_getthreadchannels

List Channels
=============

get

https://api.avantio.pro/pms/v2/threads/{id}/channels

This call retrieves a list of channels for a specific thread. This endpoint is useful for users who want to view all channels through which a thread is accessible.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Thread ID

[](#response-schemas)Responses

200


=======

[](#threadscontroller-getthreadchannels-object-response-body)Response body

object

data

array of strings

required

List of channels available for the thread

data\*

400


=======

[](#threadscontroller-getthreadchannels-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Thread

](/reference/threadscontroller_create)[

List Messages

](/reference/threadscontroller_getmessages)

Did this page help you?

Yes

No# Create Thread

URL: https://pms-api-docs.avantio.pro/reference/threadscontroller_create

Create Thread
=============

post

https://api.avantio.pro/pms/v2/threads

This call creates a new thread to send messages

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#body-params)Body Params

participants

array

required

length between 1 and 1

Participant of the thread

participants\*

ParticipantId

UnknownParticipantAlias

[](#response-schemas)Responses

201

400


=======

[](#threadscontroller-create-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Threads

](/reference/threadscontroller_list)[

List Channels

](/reference/threadscontroller_getthreadchannels)

Did this page help you?

Yes

No# List Messages

URL: https://pms-api-docs.avantio.pro/reference/threadscontroller_getmessages

List Messages
=============

get

https://api.avantio.pro/pms/v2/threads/{id}/messages

This call retrieves a list of messages for a specific thread. This endpoint is useful for users who want to view all messages in a thread.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Thread ID

[](#query-params)Query Params

pagination\_size

number

10 to 100

pagination\_cursor

string

channels

array of strings

Filter messages by channel.

channels

ADD string

[](#response-schemas)Responses

200


=======

[](#threadscontroller-getmessages-object-response-body)Response body

object

\_links

object

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

List of Messages

data\*

object

attachments

array of objects

required

Attachments of the message.

attachments\*

object

name

string

Name of the attachment

type

string

enum

required

Type of attachment

`IMAGE` `TEMPLATE` `VIDEO` `AUDIO` `DOCUMENT` `FILE`

url

string

required

URL of the attachment

channel

string

enum

required

Channel through which the message is sent.

`AIRBNB` `BOOKING` `CHECKIN` `HOMEAWAY` `INBOX` `INTRANET` `OLB` `VRBO` `VRBO_INQUIRY` `VRMS_BOP` `VRMS_HARMONY` `VRMS_PAYMENTS` `WHATSAPP` `SMS`

contacts

array of objects

Contacts associated with the message.

contacts

object

details

object

Details of the contact

details object

name

string

required

Name of the contact

surnames

array of strings

Surnames of the contact

surnames

content

string

Content of the message. Could be not present if message type is ATTACHMENT.

externalSourceData

object

Data from an external source.

externalSourceData object

isAutomatic

boolean

required

Indicates if the message is automatic.

location

object

Location associated with the message.

location object

mailTo

string

Email address to send the message to

messageId

string

required

Unique identifier for the message.

metadata

object

Metadata associated with the message.

metadata object

recipient

object

Recipient of the message.

recipient object

repliesTo

string

ID of the message this message replies to.

sender

object

required

Sender of the message.

sender object

sentAt

date-time

required

Date and time when the message was sent.

source

string

enum

required

Source of the message.

`AIRBNB` `BOOKING` `BOP` `CHECKIN` `GUEST_AREA` `HARMONY` `HOMEAWAY` `INBOX` `INTRANET` `OLB` `PAYMENTS` `VRBO` `VRMS` `VRMS_BOP` `VRMS_HARMONY` `VRMS_PAYMENTS` `WHATSAPP` `SMS` `API` `STAYMYWAY` `PMS_API`

syncStatus

string

enum

Sync status of the message.

`PENDING_SYNC` `SYNCED` `SYNC_FAILED`

type

string

enum

required

Type of message.

`TEXT` `ATTACHMENT` `WHATSAPP_TEMPLATE` `EMAIL` `LOCATION` `CONTACT` `REACTION` `REPLY` `UNSUPPORTED`

400


=======

[](#threadscontroller-getmessages-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Channels

](/reference/threadscontroller_getthreadchannels)[

Create Message

](/reference/threadscontroller_createmessage)

Did this page help you?

Yes

No# Create Message

URL: https://pms-api-docs.avantio.pro/reference/threadscontroller_createmessage

Create Message
==============

post

https://api.avantio.pro/pms/v2/threads/{id}/messages

This call creates a new message in a thread

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

Thread ID

[](#body-params)Body Params

attachments

array of objects

Attachments of the message

attachments

ADD object

channel

string

enum

required

Channel through which the message is sent

INBOXAIRBNBBOOKINGVRBO

Allowed:

`INBOX``AIRBNB``BOOKING``VRBO`

content

string

required

Content of the message

isAutomatic

boolean

Defaults to false

Indicates if the message is automatic

falsetruefalse

mailTo

string

Email address to send the message to

metadata

object

Metadata associated with the message

metadata object

type

string

enum

required

Type of the message

TEXTEMAIL

Allowed:

`TEXT``EMAIL`

[](#response-schemas)Responses

201


=======

[](#threadscontroller-createmessage-object-response-body)Response body

object

data

object

required

Created Message

attachments

array of objects

required

Attachments of the message.

attachments\*

object

name

string

Name of the attachment

type

string

enum

required

Type of attachment

`IMAGE` `TEMPLATE` `VIDEO` `AUDIO` `DOCUMENT` `FILE`

url

string

required

URL of the attachment

channel

string

enum

required

Channel through which the message is sent.

`AIRBNB` `BOOKING` `CHECKIN` `HOMEAWAY` `INBOX` `INTRANET` `OLB` `VRBO` `VRBO_INQUIRY` `VRMS_BOP` `VRMS_HARMONY` `VRMS_PAYMENTS` `WHATSAPP` `SMS`

contacts

array of objects

Contacts associated with the message.

contacts

object

details

object

Details of the contact

details object

name

string

required

Name of the contact

surnames

array of strings

Surnames of the contact

surnames

content

string

Content of the message. Could be not present if message type is ATTACHMENT.

externalSourceData

object

Data from an external source.

externalSourceData object

id

string

required

Id of message.

isAutomatic

boolean

required

Indicates if the message is automatic.

location

object

Location associated with the message.

location object

mailTo

string

Email address to send the message to

metadata

object

Metadata associated with the message.

metadata object

recipient

object

Recipient of the message.

recipient object

repliesTo

string

ID of the message this message replies to.

sender

object

required

Sender of the message.

sender object

sentAt

date-time

required

Date and time when the message was sent.

source

string

enum

required

Source of the message.

`AIRBNB` `BOOKING` `BOP` `CHECKIN` `GUEST_AREA` `HARMONY` `HOMEAWAY` `INBOX` `INTRANET` `OLB` `PAYMENTS` `VRBO` `VRMS` `VRMS_BOP` `VRMS_HARMONY` `VRMS_PAYMENTS` `WHATSAPP` `SMS` `API` `STAYMYWAY` `PMS_API`

syncStatus

string

enum

Sync status of the message.

`PENDING_SYNC` `SYNCED` `SYNC_FAILED`

type

string

enum

required

Type of message.

`TEXT` `ATTACHMENT` `WHATSAPP_TEMPLATE` `EMAIL` `LOCATION` `CONTACT` `REACTION` `REPLY` `UNSUPPORTED`

400


=======

[](#threadscontroller-createmessage-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Messages

](/reference/threadscontroller_getmessages)[

Length of Stay

](/reference/length-of-stay)

Did this page help you?

Yes

No# Create Review Response

URL: https://pms-api-docs.avantio.pro/reference/reviewcontroller_createresponse

Create Review Response
======================

put

https://api.avantio.pro/pms/v2/reviews/{id}/response

This call allows users to create a response for an existing review. Users can create responses for external reviews. This endpoint is useful for property managers who want to create a response for an external review.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#body-params)Body Params

response

string

required

length ≤ 4000

Content of the response

responseDate

date

required

Defaults to 2026-01-08T14:46:40.507Z

Date when the response was written. Default is current date.

[](#response-schemas)Responses

200


=======

[](#reviewcontroller-createresponse-object-response-body)Response body

object

data

object

required

accommodationId

string

required

Id of the accommodation associated to the review

arrivalDate

date

Date when the customer arrived

bookingId

string

Id of the booking associated to the review

comment

string

length ≤ 4000

Content of the review

createdAt

date-time

required

Date when the review was created

customerCountry

string

enum

Country iso code of the customer who created the review

`AD` `AE` `AF` `AG` `AI` `AL` `AM` `AO` `AQ` `AR` `AS` `AT` `AU` `AW` `AX` `AZ` `BA` `BB` `BD` `BE` `BF` `BG` `BH` `BI` `BJ` `BL` `BM` `BN` `BO` `BQ` `BR` `BS` `BT` `BV` `BW` `BY` `BZ` `CA` `CC` `CD` `CF` `CG` `CH` `CI` `CK` `CL` `CM` `CN` `CO` `CR` `CU` `CV` `CW` `CX` `CY` `CZ` `DE` `DJ` `DK` `DM` `DO` `DZ` `EC` `EE` `EG` `EH` `ER` `ES` `ET` `FI` `FJ` `FK` `FM` `FO` `FR` `GA` `GB` `GD` `GE` `GF` `GG` `GH` `GI` `GL` `GM` `GN` `GP` `GQ` `GR` `GS` `GT` `GU` `GW` `GY` `HK` `HM` `HN` `HR` `HT` `HU` `ID` `IE` `IL` `IM` `IN` `IO` `IQ` `IR` `IS` `IT` `JE` `JM` `JO` `JP` `KE` `KG` `KH` `KI` `KM` `KN` `KP` `KR` `KW` `KY` `KZ` `LA` `LB` `LC` `LI` `LK` `LR` `LS` `LT` `LU` `LV` `LY` `MA` `MC` `MD` `ME` `MF` `MG` `MH` `MK` `ML` `MM` `MN` `MO` `MP` `MQ` `MR` `MS` `MT` `MU` `MV` `MW` `MX` `MY` `MZ` `NA` `NC` `NE` `NF` `NG` `NI` `NL` `NO` `NP` `NR` `NU` `NZ` `OM` `PA` `PE` `PF` `PG` `PH` `PK` `PL` `PM` `PN` `PR` `PS` `PT` `PW` `PY` `QA` `RE` `RO` `RS` `RU` `RW` `SA` `SB` `SC` `SD` `SE` `SG` `SH` `SI` `SJ` `SK` `SL` `SM` `SN` `SO` `SR` `SS` `ST` `SV` `SX` `SY` `SZ` `TC` `TD` `TF` `TG` `TH` `TJ` `TK` `TL` `TM` `TN` `TO` `TR` `TT` `TV` `TW` `TZ` `UA` `UG` `UM` `US` `UY` `UZ` `VA` `VC` `VE` `VG` `VI` `VN` `VU` `WF` `WS` `YE` `YT` `ZA` `ZM` `ZW`

customerName

string

required

length ≤ 100

Name of the customer who created the review

departureDate

date

Date when the customer left

evaluationAspects

array of objects

Breakdown of aspects of the review

evaluationAspects

object

evaluationAspect

object

required

Evaluation aspect details

evaluationAspect object

valoration

number

required

0 to 10

Valoration given by the customer to this evaluation aspect

externalId

string

length ≤ 128

External id of the review

externalResponseStatus

string

length ≤ 128

External response status of the review

globalValoration

number

required

0 to 10

Average score of the review

id

string

required

Id of the review

isEligibleForResponse

boolean

Whether a response can be written for the review or not

language

string

enum

Language iso code in which the review was written

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

likes

number

≥ 0

How many likes the review has

negativeComment

string

length ≤ 4000

Content of the negative review

neutralComment

string

length ≤ 4000

deprecated

Content of the neutral review

positiveComment

string

length ≤ 4000

Content of the positive review

recommendGuest

boolean

Whether the guest recommended the accommodation or not

response

string

length ≤ 4000

Content of the response

responseDate

date

Date when the response was written

salesChannelCode

string

length ≤ 128

Sales channel code of the review

title

string

length ≤ 2000

Title of the review

validated

boolean

Whether the review was validated or not

400


=======

[](#reviewcontroller-createresponse-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Delete Review

](/reference/reviewcontroller_delete)[

Suppliers

](/reference/suppliers)

Did this page help you?

Yes

No# Create Review

URL: https://pms-api-docs.avantio.pro/reference/reviewcontroller_create

Create Review
=============

post

https://api.avantio.pro/pms/v2/reviews

This call allows users to create a new review entry in the system. By providing the necessary details, users can add new reviews to the system. This endpoint is essential for property managers who must add new reviews to the system.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#body-params)Body Params

accommodationId

string

required

Id of the accommodation associated to the review

arrivalDate

date

Date when the customer arrived

bookingId

string

Id of the booking associated to the review

comment

string

length ≤ 4000

Content of the review

createdAt

date-time

required

Date when the review was created

customerCountry

string

enum

Country iso code of the customer who created the review

ADAEAFAGAIALAMAOAQARASATAUAWAXAZBABBBDBEBFBGBHBIBJBLBMBNBOBQBRBSBTBVBWBYBZCACCCDCFCGCHCICKCLCMCNCOCRCUCVCWCXCYCZDEDJDKDMDODZECEEEGEHERESETFIFJFKFMFOFRGAGBGDGEGFGGGHGIGLGMGNGPGQGRGSGTGUGWGYHKHMHNHRHTHUIDIEILIMINIOIQIRISITJEJMJOJPKEKGKHKIKMKNKPKRKWKYKZLALBLCLILKLRLSLTLULVLYMAMCMDMEMFMGMHMKMLMMMNMOMPMQMRMSMTMUMVMWMXMYMZNANCNENFNGNINLNONPNRNUNZOMPAPEPFPGPHPKPLPMPNPRPSPTPWPYQARERORSRURWSASBSCSDSESGSHSISJSKSLSMSNSOSRSSSTSVSXSYSZTCTDTFTGTHTJTKTLTMTNTOTRTTTVTWTZUAUGUMUSUYUZVAVCVEVGVIVNVUWFWSYEYTZAZMZW

Show 249 enum values

customerName

string

required

length ≤ 100

Name of the customer who created the review

departureDate

date

Date when the customer left

evaluationAspects

array of objects

Breakdown of aspects of the review

evaluationAspects

ADD object

externalId

string

length ≤ 128

External id of the review

externalResponseStatus

string

length ≤ 128

External response status of the review

globalValoration

number

required

0 to 10

Average score of the review

isEligibleForResponse

boolean

Whether a response can be written for the review or not

truefalse

language

string

enum

Language iso code in which the review was written

es\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

likes

number

≥ 0

How many likes the review has

negativeComment

string

length ≤ 4000

Content of the negative review

positiveComment

string

length ≤ 4000

Content of the positive review

recommendGuest

boolean

Whether the guest recommended the accommodation or not

truefalse

response

string

length ≤ 4000

Content of the response

responseDate

date

Date when the response was written

salesChannelCode

string

length ≤ 128

Sales channel code of the review

title

string

length ≤ 2000

Title of the review

validated

boolean

Whether the review was validated or not

truefalse

Show Deprecated

[](#response-schemas)Responses

201


=======

[](#reviewcontroller-create-object-response-body)Response body

object

400


=======

[](#reviewcontroller-create-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Get Review

](/reference/reviewcontroller_get)[

Update Review

](/reference/reviewcontroller_update)

Did this page help you?

Yes

No# Get Review

URL: https://pms-api-docs.avantio.pro/reference/reviewcontroller_get

Get Review
==========

get

https://api.avantio.pro/pms/v2/reviews/{id}

This call retrieves the details of a specific review by providing the review ID. It allows users to view all the details of a specific review, such as their creator, possitive comment, negative comment and so on. This endpoint is useful for users who want to view the details of a specific review.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

200


=======

[](#reviewcontroller-get-object-response-body)Response body

object

data

object

required

accommodationId

string

required

Id of the accommodation associated to the review

arrivalDate

date

Date when the customer arrived

bookingId

string

Id of the booking associated to the review

comment

string

length ≤ 4000

Content of the review

createdAt

date-time

required

Date when the review was created

customerCountry

string

enum

Country iso code of the customer who created the review

`AD` `AE` `AF` `AG` `AI` `AL` `AM` `AO` `AQ` `AR` `AS` `AT` `AU` `AW` `AX` `AZ` `BA` `BB` `BD` `BE` `BF` `BG` `BH` `BI` `BJ` `BL` `BM` `BN` `BO` `BQ` `BR` `BS` `BT` `BV` `BW` `BY` `BZ` `CA` `CC` `CD` `CF` `CG` `CH` `CI` `CK` `CL` `CM` `CN` `CO` `CR` `CU` `CV` `CW` `CX` `CY` `CZ` `DE` `DJ` `DK` `DM` `DO` `DZ` `EC` `EE` `EG` `EH` `ER` `ES` `ET` `FI` `FJ` `FK` `FM` `FO` `FR` `GA` `GB` `GD` `GE` `GF` `GG` `GH` `GI` `GL` `GM` `GN` `GP` `GQ` `GR` `GS` `GT` `GU` `GW` `GY` `HK` `HM` `HN` `HR` `HT` `HU` `ID` `IE` `IL` `IM` `IN` `IO` `IQ` `IR` `IS` `IT` `JE` `JM` `JO` `JP` `KE` `KG` `KH` `KI` `KM` `KN` `KP` `KR` `KW` `KY` `KZ` `LA` `LB` `LC` `LI` `LK` `LR` `LS` `LT` `LU` `LV` `LY` `MA` `MC` `MD` `ME` `MF` `MG` `MH` `MK` `ML` `MM` `MN` `MO` `MP` `MQ` `MR` `MS` `MT` `MU` `MV` `MW` `MX` `MY` `MZ` `NA` `NC` `NE` `NF` `NG` `NI` `NL` `NO` `NP` `NR` `NU` `NZ` `OM` `PA` `PE` `PF` `PG` `PH` `PK` `PL` `PM` `PN` `PR` `PS` `PT` `PW` `PY` `QA` `RE` `RO` `RS` `RU` `RW` `SA` `SB` `SC` `SD` `SE` `SG` `SH` `SI` `SJ` `SK` `SL` `SM` `SN` `SO` `SR` `SS` `ST` `SV` `SX` `SY` `SZ` `TC` `TD` `TF` `TG` `TH` `TJ` `TK` `TL` `TM` `TN` `TO` `TR` `TT` `TV` `TW` `TZ` `UA` `UG` `UM` `US` `UY` `UZ` `VA` `VC` `VE` `VG` `VI` `VN` `VU` `WF` `WS` `YE` `YT` `ZA` `ZM` `ZW`

customerName

string

required

length ≤ 100

Name of the customer who created the review

departureDate

date

Date when the customer left

evaluationAspects

array of objects

Breakdown of aspects of the review

evaluationAspects

object

evaluationAspect

object

required

Evaluation aspect details

evaluationAspect object

valoration

number

required

0 to 10

Valoration given by the customer to this evaluation aspect

externalId

string

length ≤ 128

External id of the review

externalResponseStatus

string

length ≤ 128

External response status of the review

globalValoration

number

required

0 to 10

Average score of the review

id

string

required

Id of the review

isEligibleForResponse

boolean

Whether a response can be written for the review or not

language

string

enum

Language iso code in which the review was written

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

likes

number

≥ 0

How many likes the review has

negativeComment

string

length ≤ 4000

Content of the negative review

neutralComment

string

length ≤ 4000

deprecated

Content of the neutral review

positiveComment

string

length ≤ 4000

Content of the positive review

recommendGuest

boolean

Whether the guest recommended the accommodation or not

response

string

length ≤ 4000

Content of the response

responseDate

date

Date when the response was written

salesChannelCode

string

length ≤ 128

Sales channel code of the review

title

string

length ≤ 2000

Title of the review

validated

boolean

Whether the review was validated or not

400


=======

[](#reviewcontroller-get-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

List Reviews

](/reference/reviewcontroller_find)[

Create Review

](/reference/reviewcontroller_create)

Did this page help you?

Yes

No# Update Review

URL: https://pms-api-docs.avantio.pro/reference/reviewcontroller_update

Update Review
=============

put

https://api.avantio.pro/pms/v2/reviews/{id}

This call allows users to update the details of an existing review. Users can make changes to review details. External reviews cannot be updated.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#body-params)Body Params

accommodationId

string

required

Id of the accommodation associated to the review

arrivalDate

date

Date when the customer arrived

bookingId

string

Id of the booking associated to the review

comment

string

length ≤ 4000

Content of the review

createdAt

date-time

required

Date when the review was created

customerCountry

string

enum

Country iso code of the customer who created the review

ADAEAFAGAIALAMAOAQARASATAUAWAXAZBABBBDBEBFBGBHBIBJBLBMBNBOBQBRBSBTBVBWBYBZCACCCDCFCGCHCICKCLCMCNCOCRCUCVCWCXCYCZDEDJDKDMDODZECEEEGEHERESETFIFJFKFMFOFRGAGBGDGEGFGGGHGIGLGMGNGPGQGRGSGTGUGWGYHKHMHNHRHTHUIDIEILIMINIOIQIRISITJEJMJOJPKEKGKHKIKMKNKPKRKWKYKZLALBLCLILKLRLSLTLULVLYMAMCMDMEMFMGMHMKMLMMMNMOMPMQMRMSMTMUMVMWMXMYMZNANCNENFNGNINLNONPNRNUNZOMPAPEPFPGPHPKPLPMPNPRPSPTPWPYQARERORSRURWSASBSCSDSESGSHSISJSKSLSMSNSOSRSSSTSVSXSYSZTCTDTFTGTHTJTKTLTMTNTOTRTTTVTWTZUAUGUMUSUYUZVAVCVEVGVIVNVUWFWSYEYTZAZMZW

Show 249 enum values

customerName

string

required

length ≤ 100

Name of the customer who created the review

departureDate

date

Date when the customer left

evaluationAspects

array of objects

Breakdown of aspects of the review

evaluationAspects

ADD object

externalId

string

length ≤ 128

External id of the review

externalResponseStatus

string

length ≤ 128

External response status of the review

globalValoration

number

required

0 to 10

Average score of the review

isEligibleForResponse

boolean

Whether a response can be written for the review or not

truefalse

language

string

enum

Language iso code in which the review was written

es\_ESen\_GBnl\_NLit\_ITfr\_FRde\_DEca\_ESpl\_PLru\_RUpt\_PTno\_NOsv\_SEsv\_SVtr\_TRen\_USda\_DKpt\_BRja\_JPhu\_HUzh\_ZHko\_KRcs\_CZes\_MX

Show 23 enum values

likes

number

≥ 0

How many likes the review has

negativeComment

string

length ≤ 4000

Content of the negative review

positiveComment

string

length ≤ 4000

Content of the positive review

recommendGuest

boolean

Whether the guest recommended the accommodation or not

truefalse

response

string

length ≤ 4000

Content of the response

responseDate

date

Date when the response was written

salesChannelCode

string

length ≤ 128

Sales channel code of the review

title

string

length ≤ 2000

Title of the review

validated

boolean

Whether the review was validated or not

truefalse

Show Deprecated

[](#response-schemas)Responses

200


=======

[](#reviewcontroller-update-object-response-body)Response body

object

data

object

required

accommodationId

string

required

Id of the accommodation associated to the review

arrivalDate

date

Date when the customer arrived

bookingId

string

Id of the booking associated to the review

comment

string

length ≤ 4000

Content of the review

createdAt

date-time

required

Date when the review was created

customerCountry

string

enum

Country iso code of the customer who created the review

`AD` `AE` `AF` `AG` `AI` `AL` `AM` `AO` `AQ` `AR` `AS` `AT` `AU` `AW` `AX` `AZ` `BA` `BB` `BD` `BE` `BF` `BG` `BH` `BI` `BJ` `BL` `BM` `BN` `BO` `BQ` `BR` `BS` `BT` `BV` `BW` `BY` `BZ` `CA` `CC` `CD` `CF` `CG` `CH` `CI` `CK` `CL` `CM` `CN` `CO` `CR` `CU` `CV` `CW` `CX` `CY` `CZ` `DE` `DJ` `DK` `DM` `DO` `DZ` `EC` `EE` `EG` `EH` `ER` `ES` `ET` `FI` `FJ` `FK` `FM` `FO` `FR` `GA` `GB` `GD` `GE` `GF` `GG` `GH` `GI` `GL` `GM` `GN` `GP` `GQ` `GR` `GS` `GT` `GU` `GW` `GY` `HK` `HM` `HN` `HR` `HT` `HU` `ID` `IE` `IL` `IM` `IN` `IO` `IQ` `IR` `IS` `IT` `JE` `JM` `JO` `JP` `KE` `KG` `KH` `KI` `KM` `KN` `KP` `KR` `KW` `KY` `KZ` `LA` `LB` `LC` `LI` `LK` `LR` `LS` `LT` `LU` `LV` `LY` `MA` `MC` `MD` `ME` `MF` `MG` `MH` `MK` `ML` `MM` `MN` `MO` `MP` `MQ` `MR` `MS` `MT` `MU` `MV` `MW` `MX` `MY` `MZ` `NA` `NC` `NE` `NF` `NG` `NI` `NL` `NO` `NP` `NR` `NU` `NZ` `OM` `PA` `PE` `PF` `PG` `PH` `PK` `PL` `PM` `PN` `PR` `PS` `PT` `PW` `PY` `QA` `RE` `RO` `RS` `RU` `RW` `SA` `SB` `SC` `SD` `SE` `SG` `SH` `SI` `SJ` `SK` `SL` `SM` `SN` `SO` `SR` `SS` `ST` `SV` `SX` `SY` `SZ` `TC` `TD` `TF` `TG` `TH` `TJ` `TK` `TL` `TM` `TN` `TO` `TR` `TT` `TV` `TW` `TZ` `UA` `UG` `UM` `US` `UY` `UZ` `VA` `VC` `VE` `VG` `VI` `VN` `VU` `WF` `WS` `YE` `YT` `ZA` `ZM` `ZW`

customerName

string

required

length ≤ 100

Name of the customer who created the review

departureDate

date

Date when the customer left

evaluationAspects

array of objects

Breakdown of aspects of the review

evaluationAspects

object

evaluationAspect

object

required

Evaluation aspect details

evaluationAspect object

valoration

number

required

0 to 10

Valoration given by the customer to this evaluation aspect

externalId

string

length ≤ 128

External id of the review

externalResponseStatus

string

length ≤ 128

External response status of the review

globalValoration

number

required

0 to 10

Average score of the review

id

string

required

Id of the review

isEligibleForResponse

boolean

Whether a response can be written for the review or not

language

string

enum

Language iso code in which the review was written

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

likes

number

≥ 0

How many likes the review has

negativeComment

string

length ≤ 4000

Content of the negative review

neutralComment

string

length ≤ 4000

deprecated

Content of the neutral review

positiveComment

string

length ≤ 4000

Content of the positive review

recommendGuest

boolean

Whether the guest recommended the accommodation or not

response

string

length ≤ 4000

Content of the response

responseDate

date

Date when the response was written

salesChannelCode

string

length ≤ 128

Sales channel code of the review

title

string

length ≤ 2000

Title of the review

validated

boolean

Whether the review was validated or not

400


=======

[](#reviewcontroller-update-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Create Review

](/reference/reviewcontroller_create)[

Delete Review

](/reference/reviewcontroller_delete)

Did this page help you?

Yes

No# List Reviews

URL: https://pms-api-docs.avantio.pro/reference/reviewcontroller_find

List Reviews
============

get

https://api.avantio.pro/pms/v2/reviews

This call retrieves a complete list of all reviews in the system. It allows users to view various details about each review. This endpoint is useful to allow you to browse and select reviews based on your preferences.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#query-params)Query Params

sort

string

Sort the results by the given fields. Use a comma to separate multiple fields. Use a hyphen (-) to sort in descending order.

pagination\_size

number

10 to 100

Defaults to 20

Number of items to return per page.

pagination\_cursor

string

Pagination reference provided in the response body to get the results of the next or previous page. The filters and sorting parameters are included in the cursor, so it's not necessary to include them in the query string.

accommodationId

string

Filter by accommodation id

bookingId

string

Filter by booking id

creationDate\_from

date-time

Filter reviews before creation date.

creationDate\_to

date-time

Filter reviews after creation date.

salesChannels

array of strings

Filter reviews by booking salesChannel. eg: bk\_airbnb

salesChannels

ADD string

[](#response-schemas)Responses

200


=======

[](#reviewcontroller-find-object-response-body)Response body

object

\_links

object

required

Links to the previous and next pages of results.

next

string

required

The URL to the next page of results.

prev

string

required

The URL to the previous page of results.

data

array of objects

required

data\*

object

accommodationId

string

required

Id of the accommodation associated to the review

arrivalDate

date

Date when the customer arrived

bookingId

string

Id of the booking associated to the review

comment

string

length ≤ 4000

Content of the review

createdAt

date-time

required

Date when the review was created

customerCountry

string

enum

Country iso code of the customer who created the review

`AD` `AE` `AF` `AG` `AI` `AL` `AM` `AO` `AQ` `AR` `AS` `AT` `AU` `AW` `AX` `AZ` `BA` `BB` `BD` `BE` `BF` `BG` `BH` `BI` `BJ` `BL` `BM` `BN` `BO` `BQ` `BR` `BS` `BT` `BV` `BW` `BY` `BZ` `CA` `CC` `CD` `CF` `CG` `CH` `CI` `CK` `CL` `CM` `CN` `CO` `CR` `CU` `CV` `CW` `CX` `CY` `CZ` `DE` `DJ` `DK` `DM` `DO` `DZ` `EC` `EE` `EG` `EH` `ER` `ES` `ET` `FI` `FJ` `FK` `FM` `FO` `FR` `GA` `GB` `GD` `GE` `GF` `GG` `GH` `GI` `GL` `GM` `GN` `GP` `GQ` `GR` `GS` `GT` `GU` `GW` `GY` `HK` `HM` `HN` `HR` `HT` `HU` `ID` `IE` `IL` `IM` `IN` `IO` `IQ` `IR` `IS` `IT` `JE` `JM` `JO` `JP` `KE` `KG` `KH` `KI` `KM` `KN` `KP` `KR` `KW` `KY` `KZ` `LA` `LB` `LC` `LI` `LK` `LR` `LS` `LT` `LU` `LV` `LY` `MA` `MC` `MD` `ME` `MF` `MG` `MH` `MK` `ML` `MM` `MN` `MO` `MP` `MQ` `MR` `MS` `MT` `MU` `MV` `MW` `MX` `MY` `MZ` `NA` `NC` `NE` `NF` `NG` `NI` `NL` `NO` `NP` `NR` `NU` `NZ` `OM` `PA` `PE` `PF` `PG` `PH` `PK` `PL` `PM` `PN` `PR` `PS` `PT` `PW` `PY` `QA` `RE` `RO` `RS` `RU` `RW` `SA` `SB` `SC` `SD` `SE` `SG` `SH` `SI` `SJ` `SK` `SL` `SM` `SN` `SO` `SR` `SS` `ST` `SV` `SX` `SY` `SZ` `TC` `TD` `TF` `TG` `TH` `TJ` `TK` `TL` `TM` `TN` `TO` `TR` `TT` `TV` `TW` `TZ` `UA` `UG` `UM` `US` `UY` `UZ` `VA` `VC` `VE` `VG` `VI` `VN` `VU` `WF` `WS` `YE` `YT` `ZA` `ZM` `ZW`

customerName

string

required

length ≤ 100

Name of the customer who created the review

departureDate

date

Date when the customer left

evaluationAspects

array of objects

Breakdown of aspects of the review

evaluationAspects

object

evaluationAspect

object

required

Evaluation aspect details

evaluationAspect object

valoration

number

required

0 to 10

Valoration given by the customer to this evaluation aspect

externalId

string

length ≤ 128

External id of the review

externalResponseStatus

string

length ≤ 128

External response status of the review

globalValoration

number

required

0 to 10

Average score of the review

id

string

required

Id of the review

isEligibleForResponse

boolean

Whether a response can be written for the review or not

language

string

enum

Language iso code in which the review was written

`es_ES` `en_GB` `nl_NL` `it_IT` `fr_FR` `de_DE` `ca_ES` `pl_PL` `ru_RU` `pt_PT` `no_NO` `sv_SE` `sv_SV` `tr_TR` `en_US` `da_DK` `pt_BR` `ja_JP` `hu_HU` `zh_ZH` `ko_KR` `cs_CZ` `es_MX`

likes

number

≥ 0

How many likes the review has

negativeComment

string

length ≤ 4000

Content of the negative review

neutralComment

string

length ≤ 4000

deprecated

Content of the neutral review

positiveComment

string

length ≤ 4000

Content of the positive review

recommendGuest

boolean

Whether the guest recommended the accommodation or not

response

string

length ≤ 4000

Content of the response

responseDate

date

Date when the response was written

salesChannelCode

string

length ≤ 128

Sales channel code of the review

title

string

length ≤ 2000

Title of the review

validated

boolean

Whether the review was validated or not

400


=======

[](#reviewcontroller-find-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

404

500

Updated 10 days ago

* * *

[

Delete Owner

](/reference/ownercontroller_delete)[

Get Review

](/reference/reviewcontroller_get)

Did this page help you?

Yes

No# Delete Review

URL: https://pms-api-docs.avantio.pro/reference/reviewcontroller_delete

Delete Review
=============

delete

https://api.avantio.pro/pms/v2/reviews/{id}

This call allows users to delete a specific review by providing the review ID. It allows users to remove a review from the system. This endpoint is useful for property managers who want to remove a review from the system.

Recent Requests

Log in to see full request history

Time

Status

User Agent

Make a request to see history.

0 Requests This Month

#### URL Expired

The URL for this request expired after 30 days.

Close

[](#path-params)Path Params

id

string

required

[](#response-schemas)Responses

204

400


=======

[](#reviewcontroller-delete-object-response-body)Response body

object

details

object

required

Validation constraints

after

string

after date

conflict

object

field contains an invalid value

Has additional fields

excluded

string

excluded by other field

exists

boolean

exists (in database)

format

string

field format (regex)

in

array of strings

one of values

in

max

number

max value or min array size

min

number

min value or min array size

overlap

boolean

field is allowed to contain overlapping values. Useful for arrays of ranges from-to, min-max, etc.

past

boolean

date is in the past

range

boolean

valid range

required

boolean

field is required

text

string

custom message

type

string

enum

field type

`number` `string` `date` `array` `boolean` `object` `email`

unique

boolean

is unique

error

string

required

message

string

required

statusCode

number

required

401

500

Updated 10 days ago

* * *

[

Update Review

](/reference/reviewcontroller_update)[

Create Review Response

](/reference/reviewcontroller_createresponse)

Did this page help you?

Yes

No