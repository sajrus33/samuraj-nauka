var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": contentType });
  res.sendFile(__dirname + "/public/index.html");
});
// app.get("/", function(req, res) {
//   res.writeHead(200, { "Content-Type": contentType });
//   res.end(content, "utf8");
// });
io.on("connection", function(socket) {
  console.log("a user connected");
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
