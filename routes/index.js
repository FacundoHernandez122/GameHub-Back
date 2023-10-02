const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const gameRoutes = require("./gameRoutes");
const categoryRoutes = require("./categoryRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");
const adminUserRoutes= require("./adminUserRoutes")
const adminOrderRoutes= require("./adminOrderRoutes")

module.exports = (app) => {
  app.use("/", authRoutes);
  app.use("/games", gameRoutes);
  app.use("/user", userRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/admin", adminRoutes);
  app.use("/adminUser", adminUserRoutes);
  app.use("/adminOrder", adminOrderRoutes);
  app.use("/orders", orderRoutes);

};
