import mongoose from "mongoose";

const warmySchema = new mongoose.Schema({
  faction: {
    type: String,
    required: true
  },
  pointlevel: {
    type: String,
    required: true
  }
});

const warmy = mongoose.model("warmy", warmySchema);

export default warmy;
