const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/", authController.login);
router.post("/signup", authController.signUp);

module.exports = router;
