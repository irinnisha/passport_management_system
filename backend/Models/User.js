import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nid_bc_no: String,
  email: String,
  phone_no: String,
  password: String,
    createdAt:{
        type:Date,
    },
});

export const User=mongoose.model("Authenticate",userSchema);