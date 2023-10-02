const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", userController.index);
router.get(
  "/:username",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  userController.show,
);
router.get("/:id", userController.getUserById);
router.patch("/:username/edit", userController.editOneUser);

module.exports = router;
