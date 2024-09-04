const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const aboutSchema = new Schema(
  {
    name: String,
    profession: String,
    about: String,
    img: String,
    Date: { type: Date, default: Date.now() },
  },
  { collection: "about" }
);

const aboutModel = model("aboutModel", aboutSchema);

module.exports = aboutModel;
