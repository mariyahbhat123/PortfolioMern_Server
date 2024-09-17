const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: File },
    goTo: { type: String },
  },
  { collection: "project" }
);

const projectModel = model("projectSchema", projectSchema);
