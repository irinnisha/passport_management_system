// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nid_bc_no: String,
  email: String,
  phone_no: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
