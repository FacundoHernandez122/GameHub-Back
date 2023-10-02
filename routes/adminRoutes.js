const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/:id", adminController.show);
router.post("/login", adminController.index);
router.patch("/:id", adminController.update);
router.post("/:newGame", adminController.store);

router.delete("/:id", adminController.destroy);

module.exports = router;
