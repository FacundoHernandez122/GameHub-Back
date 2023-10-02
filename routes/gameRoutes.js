const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", gameController.index);
router.get("/:slug", gameController.show);

router.get("/:id", gameController.getGameById);

module.exports = router;
