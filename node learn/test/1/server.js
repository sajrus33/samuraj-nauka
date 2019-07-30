const express = require("express");
const app = express();

const port = 8080;

//first parametr requier,second result, thirst next->later..
app.get("/", (req, res, next) => {
  res.json({
    status: "Sukces! przez express"
  });
});

//launch server listening on first parametr port: 8080 localhost ofc,
// second parametr run at the start
app.listen(port, () => {
  console.log("Listening! on " + port);
});
