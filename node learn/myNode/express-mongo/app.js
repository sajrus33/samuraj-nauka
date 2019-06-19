// modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Set up
const port = process.env.PORT || 3000;

// mongoose.connect("mongodb://localhost/bookstore", { useNewUrlParser: true });
// const db = mongoose.connection;

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello use /api/genre or use /api/books!");
});

app.listen(port, () => {
  console.log("server is running on: " + port);
});
