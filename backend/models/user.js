import mongoose from "mongoose";

const appUserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  goal:     { type: String },
  years:    { type: [String] }, // array of selected years
}, { timestamps: true });

// Note: model name is different from existing User schema
export default mongoose.model("AppUser", appUserSchema);
