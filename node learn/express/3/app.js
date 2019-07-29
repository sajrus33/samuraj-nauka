const express = require("express");
// PATH
const path = require("path");
// BODY PARSER
const bodyParser = require("body-parser");
// COOKIE PARSER
const cookieParser = require("cookie-parser");
// FLASH for response to client
const flash = require("connect-flash");
// ROUTES
const routes = require("./routes/routes");
// APP, server side
const app = express();
console.log({ __dirname });

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
console.log(app.get("views"));
// app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(flash());

app.use("/", routes);

module.exports = app;
