import mongoose from "mongoose";

const xarmySchema = new mongoose.Schema({
  faction: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  },
  pointlevel: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  }
});

const xarmy = mongoose.model("xarmy", xarmySchema);

export default xarmy;
