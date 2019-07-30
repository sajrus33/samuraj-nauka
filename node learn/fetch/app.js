const fetch = require("node-fetch");
console.log(fetch);
// getting arg from terminal (node)
const year = process.argv[2] || Math.floor(Math.random() * 2020);
const type = process.argv[3] || "year";
fetch("http://numbersapi.com/" + year + "/" + type + "?json")
  .then(res => {
    console.log(res.status);
    console.log(res.ok);
    // need to be prefixed by return to pass it into another resolver
    return res.json();
  })
  .then(data => console.log(data, data.text))
  .catch(err => console.log({ err }));
