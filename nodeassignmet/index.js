const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.get("/:city", (req, res) => {
  if (req.url === "/favicon.ico") return res.end();// when send request browser send default favicon for ignore that this line helps
  if (req.url === "/widget") {
    fs.readFile("./dataFiles/mealtype.json", "utf-8", (err, data) => {
      if (err) {
        return res.status(500).send({ error: "Could not fetch data" });
      }

      const mealTypes = JSON.parse(data);

      console.log(mealTypes);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      return res.end(JSON.stringify(mealTypes, null, 3));
    });
  } else {
    fs.readFile("./dataFiles/restaurantData.json", "utf-8", (err, data) => {
      if (err) {
        return res.status(500).send({ error: "Could not fetch data" });
      }

      const restaurants = JSON.parse(data);
      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant.city_name === req.params.city
      );

      console.log(filteredRestaurants);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      return res.end(JSON.stringify(filteredRestaurants, null, 3));
    });
  }
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
