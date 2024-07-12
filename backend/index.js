import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as crypto from 'crypto';

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/passport")
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error("Connection error:", err));


const userSchema = new mongoose.Schema({
  nid_bc_no: String,
  email: String,
  phone_no: String,
  password: {
    type: String,
    required: true,
  },
});


userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const salt = await crypto.randomBytes(16).toString("hex"); // Generate random salt
    const hash = crypto.createHmac("sha256", salt).update(this.password).digest("hex");
    this.password = `${salt}:${hash}`; // Store salt and hash together
  }
  next();
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/Login", async (req, res) => {
  const { nid_bc_no, password } = req.body;

  try {
    const user = await User.findOne({ nid_bc_no });
    if (user) {
      const [salt, hash] = user.password.split(":"); // Split stored salt and hash
      const generatedHash = crypto.createHmac("sha256", salt).update(password).digest("hex");
      if (generatedHash === hash) {
        res.send({ message: "Login Successful", user });
      } else {
        res.status(401).send({ message: "Invalid credentials" });
      }
    } else {
      res.status(404).send({ message: "User not registered" }); // Use 404 for not found
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error during login" }); // Or handle error more gracefully
  }
});

app.post("/Signup", async (req, res) => {
  const { nid_bc_no, email, phone_no, password } = req.body;

  try {
    const existingUser = await User.findOne({ nid_bc_no });
    if (existingUser) {
      return res.status(400).send({ message: "User already registered" });
    }

    const newUser = new User({
      nid_bc_no,
      email,
      phone_no,
      password,
    });

    await newUser.save();

    res.send({ message: "Successfully Registered, Please login now." });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error during registration" });
  }
});

// Define routes
app.post("/Apply_page_1", async (req, res) => {
    try {
      // Extract data from request body
      const { full_name, given_name, surname, date_of_birth, country_of_birth, district_of_birth, place_of_birth, gender, religion } = req.body;
  
      // Create a new document in the database
      const newData = new User({
        full_name,
        given_name,
        surname,
        date_of_birth,
        country_of_birth,
        district_of_birth,
        place_of_birth,
        gender,
        religion
      });
  
      // Save the new document
      await newData.save();
  
      // Send response
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
