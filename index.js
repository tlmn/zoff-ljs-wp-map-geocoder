require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors");

app.use(
  cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN : "*" })
);

app.get("/getLocation", (req, res) => {
  const queryString = req.query.q
    ? req.query.q
    : res.send({ status: "error", message: "No query string" });

  axios
    .get("https://eu1.locationiq.com/v1/search", {
      params: {
        key: process.env.API_KEY,
        q: queryString,
        format: "json",
      },
    })
    .then((response) => {
      if (typeof response.data[0] !== "undefined") {
        let data = response.data[0];
        res.status(200);
        res.send({
          status: "ok",
          data: {
            center: [data.lat, data.lon],
            boundingBox: [
              [data.boundingbox[0], data.boundingbox[1]],
              [data.boundingbox[2], data.boundingbox[3]],
            ],
          },
        });
      } else {
        res.status(500);
        res.send({ status: "error", message: "no entity found" });
      }
    })
    .catch((error) => {
      res.status(500);
      res.send({ status: "error", message: "error in API request" });
    });
});

app.listen(port, () => {
  console.log(`LJS Geocoding API listening on port ${port}`);
});
