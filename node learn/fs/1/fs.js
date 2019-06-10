const fs = require("fs");
const path = require("path");

// create file
// fs.mkdir(path.join(__dirname, "test"), {}, err => {
//   if (err) throw err;
//   console.log("folder created");
// });
// we already created directory soo: we adding append below
// create file and write smothing inside

// wrtiefile will just set all text new so we want append xdd
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "new text in tha file, whatever i want",
  err => {
    if (err) throw err;
    console.log("...setting new text");

    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      " space over there ofc, and some special text i am",
      err => {
        if (err) throw err;
        console.log("extra text adding");
      }
    );
  }
);
