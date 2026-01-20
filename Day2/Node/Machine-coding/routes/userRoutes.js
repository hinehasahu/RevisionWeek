import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

export const UserRouter = express.Router();
const User = {
  username: "Client side",
  password: 12345,
};

UserRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === User.username && password === User.password) {
      res.cookie("auth", "true", {
        httpOnly: true,
      });

      return res.json({ message: "Login successful" });
    }

    res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

UserRouter.get("/dashboard", authMiddleware, async (req, res) => {
  try {
    res.json({ message: "Welcome to Dashboard" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

UserRouter.post("/logout", async (req, res) => {
  try {
    res.clearCookie("auth")
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});
