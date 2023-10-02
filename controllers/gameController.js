const User = require("../models/User");
const Game = require("../models/Game");
const Category = require("../models/Category");
const slugify = require("slugify");

async function index(req, res) {
  try {
    const games = await Game.find().populate("category");

    return res.json(games);
  } catch (error) {
    console.log("No se pudieron cargar los juegos");
  }
}

async function show(req, res) {
  try {
    const game = await Game.findOne({ slug: req.params.slug }).populate("category");
    return res.json(game);
  } catch (error) {
    console.log("No se pudo cargar el juego");
  }
}

async function getGameById(req, res) {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the game" });
  }
}

module.exports = { index, show, getGameById };
