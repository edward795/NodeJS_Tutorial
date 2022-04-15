const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("listener called:", data));
logger.log("Hello");
