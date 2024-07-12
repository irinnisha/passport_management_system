const express = require("express");
const User = require("./User"); 
const bcrypt = require("bcryptjs"); 

const router = express.Router();


router.post("/", async (req, res) => {
  const { nid_bc_no, email, phone_no, password, confirmPassword } = req.body;

  if (!nid_bc_no || !email || !phone_no || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ nid_bc_no }, { email }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password

    const newUser = new User({ nid_bc_no, email, phone_no, password: hashedPassword });
    await newUser.save();
    
    res.json({ message: "Signup successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
