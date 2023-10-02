const express = require("express");
const adminUserController = require("../controllers/adminUserController");
const router = express.Router();

router.get("/", adminUserController.index);
router.get("/:id", adminUserController.show);
router.patch("/:id", adminUserController.update);

router.delete("/:id", adminUserController.destroy);

module.exports = router;
