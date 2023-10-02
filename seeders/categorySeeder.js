const Category = require("../models/Category");

async function categorySeeder() {
  const category = [
    { name: "Action" },
    { name: "Terror" },
    { name: "Adventure" },
    { name: "Rol" },
    { name: "Sport" },
    { name: "Shooter" },
    { name: "Strategy" },
  ];
  await Category.insertMany(category);
  console.log("[Database] Category Seeder");
}

module.exports = categorySeeder;
