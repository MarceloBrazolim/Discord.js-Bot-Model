const mongoose = require("mongoose");
const { mongoPath } = require("./config.json");

mongoose.set("useFindAndModify", false);

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};
