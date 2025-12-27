const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

const { isLoggedIn } = require("../middleware");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/logout", isLoggedIn, authController.logout);

router.get("/check-auth", authController.checkAuth);

module.exports = router;

