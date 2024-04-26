const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controllers/userController");
const { isLoggedIn, customRole } = require("../middlewares/user");

// all user routes
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/signup").post(signup);

module.exports = router;
