import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = "supersecret"; // use env variable in production


// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, goal, years } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      goal,
      years,   // store years directly
    });

    await newUser.save();

    res.json({ msg: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

    res.json({
      msg: "Login successful",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        goal: user.goal,
        years: user.years,
      },
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


// ❌ REMOVE THIS — not needed anymore
// router.get("/videos/:userId", ... )

export default router;
