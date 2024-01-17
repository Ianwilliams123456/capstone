import mongoose from "mongoose";

const charSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  class: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  pointlevel: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const char = mongoose.model("char", charSchema);

export default char;
