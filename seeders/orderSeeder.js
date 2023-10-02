const Order = require("../models/Order");

async function orderSeeder() {
  const adminData = {
    user: "Admin",
    game: "4321",
    status: "Admin@gmail.com",
  };

  const newAdmin = new Admin(adminData);
  await newAdmin.save();
  console.log("[Database] Admin order");
}

module.exports = orderSeeder;
