import express from "express";
import weatherApi from "weather_api";

const app = express();
const defaultClient = weatherApi.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['key'] = "Token"

var api = new weatherApi.APIsApi();

var q = "q_example"; // {String} Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit [request parameter section](https://www.weatherapi.com/docs/#intro-request) to learn more.

var dt = new Date("2013-10-20"); // {Date} Date on or after 1st Jan, 2015 in yyyy-MM-dd format

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
api.astronomy(q, dt, callback);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(8080);