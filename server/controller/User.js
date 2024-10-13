import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { compare } from "bcrypt";
import { renameSync, unlinkSync } from "fs";

const expire = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, UserId) => {
  return jwt.sign({ email, UserId }, process.env.JWT_KEY, {
    expiresIn: expire,
  });
};

const SignUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Email and Password is Required");
    }

    const user = await User.create({ email, password ,contactNo,contactNo2,institute,level });
    if(user){

      res.status(201).json({success:true,user});
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("User Already Exists");
  }
};


 const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Email and Password is Required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(204).json("No user exist with this Email");
    }
    const auth = await compare(password, user.password);
    if (!auth) {
      return res.status(204).json("Incorrect Password");
    }
    
    const authtoken = createToken(user.email,user.id);
    const success = true;
    res.json({
      success,
      authtoken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        profileSetup: user.profileSetup,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        color: user.color,
      },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error");
  }
};


export const logOut = async (req, res, next) => {
  try {
    res.header("jwt", "", { maxAge: 1, secure: true, sameSite: "None" });
    return res.status(200).send("Logout Successfull.");
  } catch (error) {
    res.json(error).status(500);
  }
};
