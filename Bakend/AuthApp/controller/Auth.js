const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { use, options } = require("../routes/user");
require("dotenv").config();

//sign route handler
exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;
    //check if user already exist
    let existing_user = await User.findOne({ email });
    if (existing_user) {
      return res.status(409).json({
        success: false,
        message: "Email is already in use",
      });
    }

    //secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "error in hashing password",
      });
    }

    //create entry for user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User can't be reistered, please try again later",
    });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and a password",
      });
    }

    //check for registered user
    let user = await User.findOne({ email });
    //if not a registered user
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const payload = {
      id: user._id,
      role: user.role,
      email: user.email,
    };
    //verify password and generate a jwt token
    if (await bcrypt.compare(password, user.password)) {
      //password matched
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
      // res.status(200).json({
      //   success: true,
      //   token,
      //   user,
      //   message: "User logged in successfully",
      // });
    } else {
      //password do not matched
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "login failure",
    });
  }
};
