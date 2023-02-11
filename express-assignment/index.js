const express = require("express");
const app = express();

const restaurants = [
  {
    id: 1,
    name: "The Spotted Pig",
    cuisine: "Gastropub",
    location: "New York",
  },
  {
    id: 2,
    name: "Momofuku Noodle Bar",
    cuisine: "Japanese",
    location: "New York",
  },
  { id: 3, name: "Per Se", cuisine: "French", location: "New York" },
  { id: 4, name: "Benu", cuisine: "Contemporary", location: "San Francisco" },
  { id: 5, name: "Alinea", cuisine: "Contemporary", location: "Chicago" },
  {
    id: 6,
    name: "The Spotted Pig",
    cuisine: "Gastropub",
    location: "New York",
  },
  {
    id: 7,
    name: "Momofuku Noodle Bar",
    cuisine: "Japanese",
    location: "New York",
  },
  { id: 8, name: "Per Se", cuisine: "French", location: "New York" },
  { id: 9, name: "Benu", cuisine: "Contemporary", location: "San Francisco" },
  { id: 10, name: "Alinea", cuisine: "Contemporary", location: "Chicago" },
  {
    id: 11,
    name: "The Spotted Pig",
    cuisine: "Gastropub",
    location: "New York",
  },
  {
    id: 12,
    name: "Momofuku Noodle Bar",
    cuisine: "Japanese",
    location: "New York",
  },
  { id: 13, name: "Per Se", cuisine: "French", location: "New York" },
  { id: 14, name: "Benu", cuisine: "Contemporary", location: "San Francisco" },
  { id: 15, name: "Alinea", cuisine: "Contemporary", location: "Chicago" },
  {
    id: 16,
    name: "The Spotted Pig",
    cuisine: "Gastropub",
    location: "New York",
  },
  {
    id: 17,
    name: "Momofuku Noodle Bar",
    cuisine: "Japanese",
    location: "New York",
  },
  { id: 18, name: "Per Se", cuisine: "French", location: "New York" },
  { id: 19, name: "Benu", cuisine: "Contemporary", location: "San Francisco" },
  { id: 20, name: "Alinea", cuisine: "Contemporary", location: "Chicago" },
  {
    id: 21,
    name: "The Spotted Pig",
    cuisine: "Gastropub",
    location: "New York",
  },
  {
    id: 22,
    name: "Momofuku Noodle Bar",
    cuisine: "Japanese",
    location: "New York",
  },
  { id: 23, name: "Per Se", cuisine: "French", location: "New York" },
  { id: 24, name: "Benu", cuisine: "Contemporary", location: "San Francisco" },
  { id: 25, name: "Alinea", cuisine: "Contemporary", location: "Chicago" },
  {
    id: 26,
    name: "The Spotted Pig",
    cuisine: "Gastropub",
    location: "New York",
  },
  {
    id: 27,
    name: "Momofuku Noodle Bar",
    cuisine: "Japanese",
    location: "New York",
  },
  { id: 28, name: "Per Se", cuisine: "French", location: "New York" },
  { id: 29, name: "Benu", cuisine: "Contemporary", location: "San Francisco" },
  { id: 30, name: "Alinea", cuisine: "Contemporary", location: "Chicago" },
];

app.get("/restaurants", (req, res) => {
  let filteredRestaurants = restaurants;

  // Apply filters using cuisine use this path http://localhost:5000/restaurants/?cuisine=New%20York 
  // or if the data is too more than 10 use this for pagination
  // http://localhost:5000/restaurants/?cuisine=New%20York&page=2
  if (req.query.cuisine) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.cuisine === req.query.cuisine
    );
  }

  //Apply filters using location use this path http://localhost:5000/restaurants/?location=New%20York 
  // or if the data is too more than 10 use this for pagination
  // http://localhost:5000/restaurants/?location=New%20York&page=2
  if (req.query.location) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.location === req.query.location
    );
  }

  // Sort restaurants use this path http://localhost:5000/restaurants?sort=name for sorting as per name in ascending order 
  // If you want to sort the restaurants in reverse order, 
  // you can add an additional query parameter to the request:
  // http://localhost:5000/restaurants?sort=name&order=desc
  if (req.query.sort) {
    filteredRestaurants.sort((a, b) => {
    //   console.log(b);
      if (a[req.query.sort] < b[req.query.sort]) {
        return -1;
      }
      if (a[req.query.sort] > b[req.query.sort]) {
        return 1;
      }
      return 0;
    });
  }

  // Apply pagination it shows only 10 entries per page and if you want to 
  // see other entries user this 
  // http://localhost:5000/restaurants?page=2
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  res.json({
    restaurants: paginatedRestaurants,
    total: filteredRestaurants.length,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
