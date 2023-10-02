const Admin = require("../models/Admin");
const Game = require("../models/Game");
const Order = require("../models/Order");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function index(req, res) {
  try {
    const order = await Order.find();

    return res.json(order);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
}

async function update(req, res) {}

async function show(req, res) {}

async function destroy(req, res) {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).send("Order not found");
    }

    await Order.findByIdAndRemove(req.params.id);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting order:", error);

    res.status(500).send("Internal Server Error");
  }
}

module.exports = { index, update, show, destroy };
