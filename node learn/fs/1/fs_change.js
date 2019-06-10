const fs = require("fs");
const path = require("path");

// read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), {}, (err, data) => {
  if (err) throw err;
  console.log("file readed with buffer", { data });
});

fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("file readed with utf8 encoding", { data });
});

fs.exists(path.join(__dirname, "test", "hello.txt"), (exists) => {
 if(!exists){
   fs.rename(path.join(__dirname, "test", "2.txt"),path.join(__dirname, "test", "hello.txt"),  (err) => {
  if (err) throw err;
  console.log("file readed with utf8 encoding");
});
 }
});



