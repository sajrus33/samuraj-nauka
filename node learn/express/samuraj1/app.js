const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.listen((port), () => {
    console.log(port);
});

// app.get("/", (req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.end("<main>main lorem</main>");
// });

app.get("/h1", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write("<h1>h jedynka</h1>");
    res.end();

    // u need to do it in client side scripts
    // setTimeout(() => {
    //     window.location("/");

    // }, 1000)
});

app.all("/", (req, res) => {
    if (!req.secure) {
        res.write("not secure mate");
    }
    // res.write();
    res.end(req.path + " " + req.originalUrl + " " + req.method + " " + req.protocol + " " + req.secure);
});

