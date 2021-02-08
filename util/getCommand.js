const runCommand = require("./runCommand");

// method that defines how the commands interacts
module.exports = async (message, command, args) => {
  try {
    await runCommand(message, command, args);
  } catch {
    console.error();
  }
};
