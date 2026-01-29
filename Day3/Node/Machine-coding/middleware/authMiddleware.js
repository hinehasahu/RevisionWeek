import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
  const authHeaader = req.header("Authorization");

  if (!authHeaader || !authHeaader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Access denied. Token required" });
  }
  const token = authHeaader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};
