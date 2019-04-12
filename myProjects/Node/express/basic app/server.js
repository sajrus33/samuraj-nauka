// konfiguracja samego serwera
const app = require("./app");

// nasłuchiwanie na porcie 
app.set("port", process.env.PORT || 6080);

const server = app.listen(app.get("port"), () => {
    // on start process
    console.log("Listening on" + server.address().port);
});