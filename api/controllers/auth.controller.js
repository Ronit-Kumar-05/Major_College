import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { usernmae, email, password } = req.body;

  if (
    !usernmae ||
    !email ||
    !password ||
    usernmae === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    usernmae,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("SIGNUP SUCCESS");
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
  }
};
