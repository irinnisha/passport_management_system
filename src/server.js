const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 5173;

app.use(bodyParser.json());

app.post("/", (req, res) => {
  try {
    const userData = req.body;
    res.json({ success: true });
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to sign up. Please try again.",
      });
  }
});

const mongoURI =
  "mongodb+srv://yasin:12345@passport.ahri6i9.mongodb.net/?retryWrites=true&w=majority&appName=passport";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
