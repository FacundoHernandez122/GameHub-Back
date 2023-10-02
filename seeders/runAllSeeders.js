require("dotenv").config();

async function runAllSeeders() {
  /*   const { mongoose } = require("../db");
  await mongoose.connection.dropDatabase(); */

  await require("./categorySeeder")();
  await require("./gameTerrorSeeder")();
  await require("./gameStrategySeeder")();
  await require("./gameRolSeeder")();
  await require("./gameAdventureSeeder")();
  await require("./gameActionSeeder")();
  await require("./gameShooterSeeder")();
  await require("./gameSportSeeder")();
  await require("./userSeeder")();
  await require("./adminSeeders")();

  console.log("[Database] ¡Test data was inserted!");
  process.exit();
}

runAllSeeders();
