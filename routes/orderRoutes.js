const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SIGN_SECRET, algorithms: ["HS256"] }),
  orderController.store,
);
router.delete("/:id", orderController.destroy);
router.patch("/:id", orderController.update);

module.exports = router;
