const express = require("express");
const app = express();


// natywny modul node js
const path = require("path");

// dodatkowe moduły
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const routes = require("./routes/index");


// szablony podstron
app.set("views", path.join(__dirname, "views"));
// silnik apki
app.set("view engine", "pug");

// .use()

// obrazki fonty css pliki, statyczne !
app.use(express.static(path.join(__dirname, "public")));
// dodatki, ułatwiający wysyłanie danych np. formularzy. ++ obsluga ciasteczek
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// eazy config
app.use(cookieParser());
app.use(flash());

// nasz plik routes/index.js = routes 
// obsługuj routerze wszystkie zapytania zaczynające się od slasha
app.use("/", routes);




module.exports = app;