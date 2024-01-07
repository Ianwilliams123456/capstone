import mongoose from "mongoose";

const armySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const warmy = mongoose.model("warmy", armySchema);

export default warmy;
