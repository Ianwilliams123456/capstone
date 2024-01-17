import mongoose from "mongoose";

const warmySchema = new mongoose.Schema({
  faction: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  },
  pointlevel: {
    type: String,

    validate: /^[A-Za-z0-9 ]*$/
  }
});

const warmy = mongoose.model("warmy", warmySchema);

export default warmy;
