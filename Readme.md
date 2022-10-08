# Geocoding API for LJS ['solid] map

This is a simple geocoding API for the Linksjugend ['solid] local entities map. The API receices a city name and returns the retrieved coordinates (center and map bounding box) as well as the respective Bundesland. The API is using https://locationiq.com/ for the geocoding task. You need API keys for that service, the free tiers should be sufficient for the application (https://my.locationiq.com/register).

## For local testing
- clone repository
- install dependencies by running `npm install`
- create a `.env` file in the root directory analogous to `.env.sample`
- run the app executing `node index.js`
- app receives `GET` requests on endpoint `/getLocation`

## For deployment using Docker
- clone repository
- create a `.env` file in the root directory analogous to `.env.sample`
- build and run the docker set up `docker-compose up`
- app receives `GET` requests on endpoint `/getLocation`

# query parameters
- `q`: query string (address)