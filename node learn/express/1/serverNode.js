const http = require("http");
const port = 3000;

const requestHandler = (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            "status": "Sukcesik!"
        }));
    }
    if (req.url === "/api") {
        res.write(JSON.stringify({
            "status": "moje api!"
        }));
        res.end();
    }
}

const server = http.createServer(requestHandler);

server.on("connection", socket => {
    console.log("new connection");
});

server.listen(port, (err) => {
    if (err) {
        return console.log({ err })
    }
    console.log("Listening on " + port)
})

//ctrl + c == refresh terminal