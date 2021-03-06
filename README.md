[![Build Status](https://travis-ci.org/surreydigitalservices/locate-api.svg?branch=master)](https://travis-ci.org/surreydigitalservices/locate-api)

Locate API
==========

The Locate API is a simple API to enable access to a MongoDB database containing UK address information.

This service is built on the top of AddressBase Premium, an Ordinance Survey data product, available to the public sector under the terms of the PSMA.

The importer project, https://github.com/alphagov/location-data-importer , transforms this data into a mongo database, which underpins the services described below.

Full details of the source data are contained in the importer project, in the docs folder.

## Usage

### Swagger API documentation

See `docs/swagger.yml` for Swagger documentation of the API. This can be imported into http://editor.swagger.io/#/.

### Authorization

The API uses Bearer token Authorization headers for access control.

    curl -H"Authorization: Bearer my_token" https://url-to-api/locate/addresses?postcode=sw11er

These tokens must relate to an entry in a collection entitled authorizationToken. The details of this collection are:

    {
    	"_id" : ObjectId("object_id"),
    	"name" : "username",
    	"identifier" : "username@email.gov.uk",
    	"organisation" : "test org",
    	"token" : "this is my credentials",
    	"queryType" : "residential",
    	"dataType" : "all"
    }

The frontend project to this api: https://github.com/alphagov/locate-api-frontend is a web app that populates this collection.

All fields are required.

    * name: meta data on user.
    * identifier: unique identifier, used as FK for rate limiting. Frontend populates this with email addresses.
    * organisation: meta data on users parent org.
    * token: actual bearer token.
    * queryType: see below for outline.
    * dataType: see below for outline.

### Address lookups

The first use case is address lookups. The basic call (curl example):

    curl -H"Authorization: Bearer credentials" https://host/locate/addresses?postcode=kt70tj

Query parameters:

    postcode=a11aa
    format=vcard [optional|spike] vcard is the only option here and overrides the data type described below. Spike in lieu of addressing standards.

### Queries

The following fields in the authorization collection determine the query associated with this token:

    * queryType: this restricts the results.

    * dataType: this restricts the JSON fields in the response.

### Query type

These are the predetermined queries the API will support. These are defined in the authorization collection.

    * residential: Returns only residential properties.

    * commercial: Returns only commercial properties.

    * residentialAndCommercial: Returns the combination of residential and commercial queries.

    * electoral: Returns properties that are deemed residential for the purposes of registering to vote, residential above plus some educational, hospital etc addresses in which people may reside.

    * all: Returns an unfiltered view of the address database.

The data to enable this is derived from classification codes that each record has, these can be found in the documentation section of the importer project. https://github.com/alphagov/location-data-importer/blob/master/docs/address-base/addressbase-products-classification-codes.pdf

    * residential: are all addresses with codes beginning
        - R (generic residential)
        - RH (multiple occupancy)
        - RD (residential dwelling)
        - RI (institute - nursing homes etc)
        - X (dual use - pubs and so on)
    * commercial: codes beginning
        - C (generic commercial)
        - NOT CE (education)
    * electoral: codes beginning
        - with residential codes above OR
        - CE01 (college)
        - CE05 (univeristy)
    * all: no filtering

### Data type

This controls the amount of data returned for each address.

#### Presentation

This returns the minimum data set for an address. Suitable for most web based applications.

        {
            "property": "Flat A",
            "street": "93 Latchmere Road",
            "locality": "Battersea",
            "town": "London",
            "area": "Wandsworth",
            "postcode": "SW11 2DR",
            "uprn": "10090499727",
            "gssCode": "E09000032"
        }

        - property: Contains lowest granularity, flat numbers, house names and so on
        - street: Street number plus street name
        - locality: Area within a post town
        - town: Town name
        - area: Administrative area
        - postcode: Postcode, formatted for display
        - uprn: Unique Property Reference Number
        - gssCode: Government Statistical Service code for the Local Authority this address resides in.

#### All

The returns the full data set for an address. In most use cases the presentation object will be sufficient.

        {
            "gssCode": "E09000032",
            "country": "England",
            "postcode": "sw112dr",
            "uprn": "100023586417",
            "createdAt": "2014-07-03",
            "presentation": {
                "property": "Arches 11 And 12",
                "street": "Latchmere Road",
                "town": "London",
                "area": "Wandsworth",
                "postcode": "SW11 2DR"
            },
            "details": {
                "usrn": "22902824",
                "isResidential": false,
                "isCommercial": true,
                "isElectoral": false,
                "isPostalAddress": true,
                "classification": "CI03",
                "state": "approved",
                "organisation": "Mwr Motors",
                "primaryClassification": "Commercial",
                "secondaryClassification": "Industrial Application",
                "file": "TQ2575.csv",
                "blpuUpdatedAt": "2004-12-21",
                "blpuCreatedAt": "2001-03-19"
            },
            "location": {
                "lat": 51.46865944238342,
                "long": -0.16305944948944998
            },
            "ordering": {
                "paoText": "ARCHES 11 AND 12",
                "street": "LATCHMERE ROAD"
            }
        }

#### Vcard

Using the query parameter format, and the value vcard will return the following structure - overriding the above.

        {
            "extended-address":"1 Sovereign Place",
            "street-address":"Queens Drive",
            "locality":"Thames Ditton",
            "region":"Surrey",
            "postal-code":"KT7 0TJ"
            "country":"England"
            "x-uprn":"10033321838",
            "vcard":"ADR;:;;1 Sovereign Place;Queens Drive;Thames Ditton;Surrey;KT7 0TJ;England",
        }

    The fields here confirm to the vCard adr field.

    * extended-address is the property field from the presentation block above
    * street-address is the street field from the presentation block above
    * locality is the town from the presentation block above
    * region is the area from the presentation block above
    * postal-code is postcode
    * x-uprn as above, extension to vcard to allow for URPN
    * vcard is a convience that formats the rest of the fields as a vcard compatible string.

### Authority lookups

This API call returnes the basic statistical geography for a postcode.

curl -H"Authorization: Bearer credentials" https://host/locate/authority?postcode=kt70tj

        {
            "postcode": "sw112dr",
            "country": "England",
            "gssCode": "E09000032",
            "name": "Wandsworth",
            "easting" : 394251,
            "northing" : 806376,
            "lat" : 57.14823168960546,
            "long" : -2.0966478399737416,
            "nhsRegionalHealthAuthority" : "S08000005",
            "nhsHealthAuthority" : "S08000006",
            "county" : "S08000004"
            "ward" : "S13002483"
        }

*   `country`: Derived from ONS codes:
    England     Scotland    Wales       N Ireland
    E92000001   S92000003   W92000004   N92000002

*   `gssCode`: Unitary Authority, Metropolitan and Non- Metropolitan District, London Borough or Scottish Council Area in which postcode falls.

*   `easting`/`northing`/`lat`/`long`: location of CPLC. CPLC is the location indicator for this code point. This is a point within the postcode area that is nearest the mean position of
 postal addresses. Not geographical central point.

*   `nhsRegionalHealthAuthority`: English Pan Strategic Health Authority in which CPLC falls. [optional]

*   `nhsHealthAuthority`: English Strategic Health Authority or Scottish Health Board in which CPLC falls. [optional]

*   `county`: County in which CPLC falls. [optional]

*   `ward`: Electoral Ward or Division in which CPLC falls. [optional]

### Granularity

Properties have a 1 to 1 mapping to statistical geographies. However the same does not hold true for postcodes. The address API call maps the properties to the
`gssCode` at a property level. This ensures that when a postcode crosses a boundary the properties are correctly associated with either side of the boundary.

As the authority lookup is only on a per postcode basis this level of accuracy is not available.

Details of the authority data and it's accuracy are available in the OS documentation - https://github.com/alphagov/location-data-importer/blob/master/docs/code-point-user-guide.pdf.

## Indexing

Run the dropwizard mongo-index task to index the database:

    curl -X POST http://host/tasks/mongo-index

This indexes the auth collections. The address indexes are applied during import.

## Rate limiting

This API has very simple rate limiting. It utilises mongo TTL indexes and a collection entitled usage,

Every successful auth increments a usage count document for that identifier, and these are removed by `mongod` at midnight every night.

The limit is configured in the yaml file, default 1000.

## Setup

### Prerequisites

* MongoDB: The locate API utilises mongo as it's datastore.

* Data: The datastore must contain an addresses database. This can be built from: https://github.com/alphagov/location-data-importer

### Running

Run `make run`.

* There are scripts in the root of the project:

       * `./run-api.sh` - will start the API.

       * `./run-debug-api.sh` - will start the API in debug mode.

#### Heroku

The following environment properties must be set for the application to work in Heroku. The Procfile will override the default settings in the application yaml file.

        heroku config:set ENCRYPTED=
        heroku config:set KEY=
        heroku config:set MONGO_PORT=
        heroku config:set MONGO_HOST=
        heroku config:set MONGO_DATABASE=
        heroku config:set MONGO_USER=
        heroku config:set MONGO_PASSWORD=
        heroku config:set ALLOWED_ORIGINS=


## Testing

Run:

`make test`


### License
Issued under MIT (see LICENSE)

### Copyright
Copyright (c) 2014 HM Government
