const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  nid_bc_no: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: String, required: true },
  password: { type: String, required: true },
});

// Define user model
const User = mongoose.model("User", userSchema);

module.exports = User;
