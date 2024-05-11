const express = require("express");
const router = express.Router();
const User = require("./User"); // Import the User model from the root directory

router.post("/", async (req, res) => {
  const { nid_bc_no, email, phone_no, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({ nid_bc_no, email, phone_no, password });
    await newUser.save();

    return res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
