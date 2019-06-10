const http = require("http");
const port = 5001;

http
  .createServer((req, res) => {
    res.write("Hello World!");
    res.end();
  })
  .listen(port, () => console.log("Server run on " + port));
