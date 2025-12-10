import jwt from "jsonwebtoken";
const JWT_SECRET = "supersecret"; // use env variable in production

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // decoded token contains email or _id
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
