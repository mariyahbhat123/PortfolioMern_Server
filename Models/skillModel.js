const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const skillSchema = new Schema(
  {
    technologyName: { type: String },
    Description: { type: String },
    image: { type: File },
    date: { type: Date, default: Date.now() },
  },
  { collection: "skill" }
);

const skillModel = model("skillModel", skillSchema);
module.exports = skillModel;
