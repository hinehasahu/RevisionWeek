import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/authMiddleware.js";
import dotenv from "dotenv";
dotenv.config();

export const UserRouter = express.Router();
const JWT_SECRET = process.env.SECRETKEY;

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email });

  if (!user)
    return res.status(404).json({ message: "User not found. Please sign up." });

  let hash = user.password;
  try {
    bcrypt.compare(password, hash, function (err, result) {
      if (err)
        return res
          .status(500)
          .json({ message: "Something went wrong. Please login again later." });
      if (result) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
          expiresIn: "1d",
        });
        res.status(200).json({ message: "Login success", token });
      } else {
        res.status(403).json({ message: "Wrong password." });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong while logging." });
    console.log(error);
  }
});

UserRouter.post("/signup", async (req, res) => {
  const { password } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong. Please try signing up again later.",
        });
      }
      await UserModel.create({ ...req.body, password: hash });

      res.status(201).json({ message: "Sign up success.", password: hash });
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong while signing." });
    console.log(error);
  }
});

UserRouter.get("/get", authMiddleware, async(req,res)=>{
    try {
        const user = await UserModel.find()
        res.status(200).json({message: "Users", user})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong while signing." });
    console.log(error);
    }
})