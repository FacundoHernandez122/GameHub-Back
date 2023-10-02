const Category = require("../models/Category");
const User = require("../models/User");
const slugify = require("slugify");

async function userSeeder() {
  const users = [
    {
      firstname: "User",
      lastname: "Example",
      username: "UserExample",
      password: "1234",
      address: "Justicia 3000",
      phone: "099911911",
      email: "userExample@gmail.com",
    
    },
    {
      firstname: "Admin",
      lastname: "Example",
      username: "Admin",
      password: "1234",
      address: "Bv. España 1515",
      phone: "098054249",
      email: "adminExample@gmail.com",
    
    },
  ];

  await User.insertMany(users);
  console.log("[Database] User Seeder");
}

module.exports = userSeeder;
