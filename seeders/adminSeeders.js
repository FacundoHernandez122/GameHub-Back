const Admin = require("../models/Admin");

async function adminSeeder() {
  const adminData = {
    username: "Admin",
    password: "4321",
    email: "Admin@gmail.com",
  };

  const newAdmin = new Admin(adminData);
  await newAdmin.save();
  console.log("[Database] Admin Seeder");
}

module.exports = adminSeeder;
