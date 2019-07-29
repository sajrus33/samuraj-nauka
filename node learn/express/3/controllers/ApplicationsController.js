const path = require("path");
// const flash = require("connect-flash");

exports.store = (req, res) => {
  // const sock = req.socket;
  // console.log({ sock });
  req.flash("form", req.body.name.split(" ")[0] + "You are true hero!");
  // redirect to "/" query string
  res.redirect("/");
  // res.json({
  //   name: req.body.name,
  //   phone: req.body.phone,
  //   message: req.body.message
  // });
};
