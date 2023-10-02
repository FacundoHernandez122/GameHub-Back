const Admin = require("../models/Admin");
const Game = require("../models/Game");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function index(req, res) {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {


    return res.status(500).json({ error: "Failed to fetch users" });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by id:", error);

    return res.status(500).json({ error: "Failed to fetch user" });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { username, firstname, lastname, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, firstname, lastname, email },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error editing user:", error);

    return res.status(500).json({ error: "Failed to edit the user" });
  }
}

async function destroy(req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    await User.findByIdAndRemove(req.params.id);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);

    res.status(500).send("Internal Server Error");
  }
}

module.exports = { index, update, show, destroy };
