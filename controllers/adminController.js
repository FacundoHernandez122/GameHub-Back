const Admin = require("../models/Admin");
const Game = require("../models/Game");
const Category = require("../models/Category");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const slugify = require("slugify");

async function index(req, res) {
  const admin = await Admin.findOne({ username: req.body.username });

  if (!admin) return res.json({ error: "Credenciales incorrectas" });

  if (!req.body.password) return res.json({ error: "Credenciales incorrectas" });

  const passwordMatch = await bcryptjs.compare(req.body.password, admin.password);
  const token = jwt.sign({ sub: admin._id, username: admin.username }, process.env.JWT_SIGN_SECRET);

  return res.json({ token, username: admin.username, id: admin.id, img: admin.img });
}

async function update(req, res) {
  try {
    const { id } = req.params;

    const { name, price, stock } = req.body;

    const updatedGame = await Game.findByIdAndUpdate(id, { name, price, stock }, { new: true });

    if (!updatedGame) {
      return res.status(404).json({ error: "Game not found" });
    }

    return res.status(200).json(updatedGame);
  } catch (error) {
    console.error("Error editing game:", error);

    return res.status(500).json({ error: "Failed to edit the game" });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    console.error("Error fetching game by ID:", error);
    res.status(500).json({ error: "Failed to fetch the game" });
  }
}

async function store(req, res) {
  try {
    const { name, description, price, offer, stock, trending, category, metacritic, age } =
      req.body;

    let slug = slugify(name, { replacement: "_", lower: true, strict: true });
    let game;
    let attempts = 0;

    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      game = await Game.create({
        name,
        description,
        price,
        offer,
        stock,
        trending,
        category,
        metacritic,
        age,
        slug,
      });

      if (!game) {
        return res.status(500).json({ error: "Failed to create the game" });
      }

      const existingCategory = await Category.findById(category);

      if (!existingCategory) {
        return res.status(404).json({ error: "Category not found" });
      }

      existingCategory.games.push(game._id);
      await existingCategory.save();
      break;
    }

    return res.status(201).json(game);
  } catch (error) {
    console.error("Error creating game:", error);

    return res.status(500).json({ error: "Failed to create the game" });
  }
}
async function store(req, res) {
  try {
    const { name, description, price, offer, stock, trending, category, metacritic, age } =
      req.body;

    let slug = slugify(name, { replacement: "_", lower: true, strict: true });
    let game;
    let attempts = 0;

    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      game = await Game.create({
        name,
        description,
        price,
        offer,
        stock,
        trending,
        category,
        metacritic,
        age,
        slug,
      });

      if (!game) {
        return res.status(500).json({ error: "Failed to create the game" });
      }

      const existingCategory = await Category.findById(category);

      if (!existingCategory) {
        return res.status(404).json({ error: "Category not found" });
      }

      existingCategory.games.push(game._id);
      await existingCategory.save();
      break;
    }

    return res.status(201).json(game);
  } catch (error) {
    console.error("Error creating game:", error);

    return res.status(500).json({ error: "Failed to create the game" });
  }
}

async function destroy(req, res) {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).send("Game not found");
    }

    await Game.findByIdAndRemove(req.params.id);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting game:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { index, update, show, destroy, store };
