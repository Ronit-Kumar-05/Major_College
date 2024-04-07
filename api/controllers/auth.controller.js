import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { usernmae, email, password } = req.body;

  if (
    !usernmae ||
    !email ||
    !password ||
    usernmae === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "ALL FIELDS ARE REQUIRED"));
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
    next(error);
  }
};
