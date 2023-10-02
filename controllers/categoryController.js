const Category = require("../models/Category");
const Game = require("../models/Game");

async function index(req, res) {
  try {
    const categories = await Category.find().populate("games");

    return res.json(categories);
  } catch (error) {
    console.log("No se pudo cargar las categorias");
  }
}

async function show(req, res) {
  try {
    const category = await Category.findOne({ name: req.params.name }).populate("games");

    return res.json(category);
  } catch (error) {
    console.log("No se pudo cargar las categorias");
  }
}

module.exports = { index, show };
