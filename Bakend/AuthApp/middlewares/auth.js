//auth,isStudent,isAdmin
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    //extract jwt token
    //pending:othe ways to fetch token
    console.log("cookie", req.cookies.token);
    console.log("body", req.body.token);
    console.log('header', req.header("Authorization"));
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");
    if (!token || token === undefined) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided." });
    }

    //verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);

      req.user = payload;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Token is not valid.",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "something went wrong , while verifying the token",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(403).json({
        success: false,
        message: "this is a protected route for students.",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "User role is not matching",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "this is a protected route for admin.",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "User role is not matching",
    });
  }
};
