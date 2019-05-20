const express = require("express");
const app = express();

//first parametr requier,second result, thirst next->later..
app.get("/", (req, res, next) => {
    res.json({
        "status": "Sukces!"
    });
});

//launch server listening on first parametr port: 8080 localhost ofc,
// second parametr run at the start
app.listen(8080, () => {
    console.log("Listening!");
});