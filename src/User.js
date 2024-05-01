const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nid_bc_no: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_no: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
