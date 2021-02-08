const ping = require("../commands/ping");

// Method to handle multiple commands
module.exports = async (message, command, args) => {
  switch (command) {
    case "ping":
      await ping(message);
      break;
    // case "example":
    //   console.log("example");
    //   break;
  }
};
