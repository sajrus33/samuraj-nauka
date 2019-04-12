const express = require("express");
const app = express();
app.get("/", function (req, res, next) {
    res.json({
        "status": "sukces!"
    });
});

app.listen(8080, function () {
    console.log("listening!");
});