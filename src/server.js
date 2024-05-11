const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection URI
const MONGODB_URI =
  "mongodb+srv://yasin:12345@passport.ahri6i9.mongodb.net/?retryWrites=true&w=majority&appName=passport";

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Serve static files from the "public" directory
app.use(express.static("public"));

// Route handler for all requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Signup.jsx"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
