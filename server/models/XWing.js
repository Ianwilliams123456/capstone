import mongoose from "mongoose";

const xarmySchema = new mongoose.Schema({
  faction: {
    type: String,
    required: true
  },
  pointlevel: {
    type: String,
    required: true
  }
});

const xarmy = mongoose.model("xarmy", xarmySchema);

export default xarmy;
