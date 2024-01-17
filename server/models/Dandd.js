import mongoose from "mongoose";

const charSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  pointlevel: {
    type: String,
    required: true
  }
});

const char = mongoose.model("char", charSchema);

export default char;
