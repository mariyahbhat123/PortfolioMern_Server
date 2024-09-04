const mongoose = require("mongoose");
const uri = `mongodb://0.0.0.0:27017/`;

const connectionString = () => {
  try {
    mongoose.connect(uri, { dbName: "Portfolio" });
    console.log("CONNECTED to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectionString;
