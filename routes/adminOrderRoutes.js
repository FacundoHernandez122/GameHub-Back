const express = require("express");
const adminOrderController = require("../controllers/adminOrderController");
const router = express.Router();

router.get("/", adminOrderController.index);
router.get("/:id", adminOrderController.show);
router.patch("/:id", adminOrderController.update);
router.delete("/:id", adminOrderController.destroy);

module.exports = router;
