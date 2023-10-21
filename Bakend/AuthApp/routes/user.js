const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

//protected route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to student area",
  });
});

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to test area",
  });
}); 

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin area",
  });
});

module.exports = router;
