const Order = require("../models/Order");
const OrderStatus = require("../models/OrderStatus");
const User = require("../models/User");
const Game = require("../models/Game");

async function index(req, res) {
  try {
    const orders = await Order.find().populate("user").populate("games").populate("status");

    return res.json(orders);
  } catch (error) {
    console.log("No se pudieron cargar los orders");
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;

    const orderList = await Order.findById(id)
      .populate("user")
      .populate("games")
      .populate("status");

    return res.json(orderList);
  } catch (error) {
    console.log("No se pudo cargar la orden");
  }
}

async function store(req, res) {

  try {
    const gamesData = req.body.games.map((game) => ({
      name: game.name,
      price: game.price,
      img: game.img,
    }));

    const order = await Order.create({
      user: req.auth.sub,
      games: gamesData,
      status: "pending",
      subtotal: req.body.subtotal,
    });
   
    const user = await User.findById(req.auth.sub);
    user.orders.push(order._id);
    await user.save();
    return res.json(order);
  } catch (error) {
    console.log("No se pudo cargar la orden");
  }
}

async function destroy(req, res) {}
async function update(req, res) {}

module.exports = { index, show, store, destroy, update };
