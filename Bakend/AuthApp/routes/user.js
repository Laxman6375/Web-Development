const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");
const User = require("../model/User");

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

// router.get("/getEmail", auth, async (req, res) => {
//   try {
//     const id = req.user.id;
//     console.log("id: ", id);
//     const user = await User.findById(id);

//     res.status(200).json({
//       success: true,
//       user: user,
//       message: "welcome to email route",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//       message: "fat gya code",
//     });
//   }
// });

module.exports = router;
