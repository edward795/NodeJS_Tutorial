const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));

//Event Fired
myEmitter.emit("event");
