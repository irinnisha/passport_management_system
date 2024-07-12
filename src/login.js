const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("./User");

router.post("/", async (req, res) => {
  const { nid_bc_no, password } = req.body;

  if (!nid_bc_no || !password) {
    return res.status(400).json({
      error: "NID/Birth Certificate Number and Password are required",
    });
  }

  try {
    const user = await User.findOne({ nid_bc_no });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
