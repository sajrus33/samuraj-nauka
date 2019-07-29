const path = require("path");

exports.home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
  // res.sendFile(app.get("views"));

  // res.send(req.flash("form"));
};
