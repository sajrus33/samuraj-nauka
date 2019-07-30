const path = require("path");

exports.home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));

  // res.send(req.flash("form"));
};
