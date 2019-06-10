const EventEmitter = require("events");
//create class, why ? -> doc !!!!!!!!!!!!!!!!!!!!
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => console.log("Event Fired!"));

myEmitter.emit("event");

// Logger ! :D
const uuid = require("uuid");
console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}
module.exports = Logger;
