import mongoose from "mongoose";

const charSchema = new mongoose.Schema({
  species: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  },
  class: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  },
  pointlevel: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  }
});

const char = mongoose.model("char", charSchema);

export default char;
