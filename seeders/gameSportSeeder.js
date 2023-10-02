const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameSportSeeder() {
  const category = await Category.findOne({ name: "Sport" });
  const categoryId = category._id;
  const games = [
    {
      name: "NBA 2K24",
      description:
        "Experience state-of-the-art gameplay as you live out your NBA dreams in NBA 2K24’s immersive game modes, including MyCAREER, MyTEAM, MyNBA, and more. Grab your friends and play as your favorite NBA and WNBA teams today—we’ll see you on the court.        ",
      price: 42.82,
      offer: 0.0,
      img: "nba24.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "nba242.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256968106/movie_max_vp9.webm?t=1694019888",
      metacritic: 79,
      age: 17,
    },

    {
      name: "Madden NFL 24",
      description:
        "Madden NFL 24 introduces exclusive next gen features, including SAPIEN technology, which allows for more realistic movement and more lifelike player models.[1] Gameplay includes the return of refs to the field, improved blocking and Fieldsense. It also improves the hitting and tackling system with more than 1,000 new animations.",
      price: 25.2,
      offer: 0.0,
      img: "maddenNFL.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "maddenNFL2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256963155/movie_max_vp9.webm?t=1692714633",
      metacritic: 80,
      age: 0,
    },

    {
      name: "WWE 2K23",
      description:
        "Like the previous game, WWE 2K23 features of and simulation gameplay. WarGames is featured for the first time in a WWE 2K game, and the Royal Rumble match now supports online multiplayer with up to eight players. Referee voiceovers have been revamped with different voices and unique lines when the pinfall is successfully occurred.",
      price: 30.82,
      offer: 0.0,
      img: "ww2k23.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "ww2k232.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256938239/movie_max_vp9.webm?t=1680028225",
      metacritic: 85,
      age: 12,
    },

    {
      name: "eFootball 2024",
      description:
        "As a part of our resolute effort to recreate the enthusiasm of real-life football, we release an update at the start of every new football season to brush up the emblems, strips and players of each Authentic Team in the game according to our licence agreements. In line with the update, we will also be conducting the in-game asset and other data carryover process.",
      price: 53.82,
      offer: 0.0,
      img: "efootball.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "efootball2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256968443/movie_max_vp9.webm?t=1694144442",
      metacritic: 90,
      age: 0,
    },

    {
      name: "PGA TOUR 2K23",
      description:
        "PGA Tour 2K23 is a sports video game developed by HB Studios and published by 2K for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S. It is the fifth installment of the PGA Tour 2K series and first game in the series to feature the Top of the Rock golf course as bonus content.",
      price: 39.82,
      offer: 0.0,
      img: "pgaTour.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "pgaTour2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256917346/movie_max_vp9.webm?t=1669077231",
      metacritic: 81,
      age: 12,
    },

    {
      name: "EA SPORTS FIFA 23",
      description:
        "FIFA 23 is a football video game published by EA Sports. It is the 30th installment in the FIFA series that is developed by EA Sports, the final installment under the FIFA banner, and released worldwide on 30 September 2022 for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S.",
      price: 42.82,
      offer: 0.0,
      img: "fifa23.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "fifa232.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256942523/movie_max_vp9.webm?t=1682117044",
      metacritic: 89,
      age: 0,
    },

    {
      name: "Riders Republic",
      description:
        "The four main activities available in the game include mountain biking, skiing, snowboading, and wingsuit flying. Ubisoft described the game as a massively multiplayer sports game, as up to 64 players can compete against each other in Mass Races competitions. The PS4 and Xbox One versions only support about 20 players. In addition, players can also play a 6v6 competitive multiplayer mode named Tricks Battle Arena",
      price: 71.4,
      offer: 0.0,
      img: "ridersRepublic.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "ridersRepublic2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256956003/movie_max_vp9.webm?t=1688149149",
      metacritic: 85,
      age: 0,
    },

    {
      name: "Football Manager 2023",
      description:
        "Football Manager 2023 is the most played version of Football Manager, as of June 2023, with more than double the users than average. Football Manager games usually have around two million players per year, however FM23 more than doubled this and had five million players.",
      price: 47.11,
      offer: 0.0,
      img: "footballManager.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "footballManager2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256911882/movie_max_vp9.webm?t=1666285245",
      metacritic: 81,
      age: 12,
    },

    {
      name: "CarX Drift Racing Online",
      description:
        "CarX Drift Racing gives you a unique experience in the handling of sport cars by the simple and the intuitive way. If you like to drift, get ready to spend many hours playing this game. Use handbrake to start drifting. Paint donuts burning tires. Make smoke while drifting. Support of controllers, steering wheels with force feedback",
      price: 9.4,
      offer: 0.0,
      img: "carDrift.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "carDrift2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256826468/movie_max_vp9.webm?t=1651145874",
      metacritic: 81,
      age: 17,
    },

    {
      name: "Golf With Your Friends",
      description:
        "Golf with Your Friends is a golf video game by Australian developer Blacklight Interactive and published by Team17. The game started in early access on Steam on 30 January 2016 and fully released on 19 May 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One, and on Google Stadia on 14 April 2022.",
      price: 12.8,
      offer: 0.0,
      img: "golfFriends.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "golfFriends2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256761089/movie_max.webm?t=1589898309",
      metacritic: 79,
      age: 0,
    },

    {
      name: "Forza Motorsport",
      description:
        "Forza is a series of simulation racing games for Xbox consoles and Microsoft Windows published by Xbox Game Studios. The series seeks to emulate the performance and handling characteristics of many real-life production, modified, and racing cars",
      price: 85.6,
      offer: 0.0,
      img: "forzaMotor.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "forzaMotor2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256951961/movie_max_vp9.webm?t=1694794215",
      metacritic: 88,
      age: 12,
    },

    {
      name: "Undisputed",
      description:
        "Become Undisputed in the most authentic boxing game to date! Featuring true to life visuals, bone-jarring action, and more licensed boxers than ever before, Undisputed gives you unprecedented control to master every inch of the ring.",
      price: 36.4,
      offer: 0.0,
      img: "undisputed.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "undisputed2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256924940/movie_max_vp9.webm?t=1683102809",
      metacritic: 90,
      age: 17,
    },

    {
      name: "Forza Horizon 5",
      description:
        "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico. It was released on 9 November 2021 for Windows, Xbox One, and Xbox Series X/S.",
      price: 57.11,
      offer: 0.0,
      img: "forzaHorizon.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "forzaHorizon2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256859757/movie_max_vp9.webm?t=1636489104",
      metacritic: 95,
      age: 0,
    },

    {
      name: "EA SPORTS PGA TOUR™",
      description:
        "As your golf game improves, so does your path to becoming a Major champion. Create and customize a golfer, develop your skill set with new Shot Types, gain deeper course knowledge as you play, and learn to attack every hole like a pro.",
      price: 85.71,
      offer: 0.0,
      img: "sportsPGA.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "sportsPGA2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256929758/movie_max_vp9.webm?t=1675965105",
      metacritic: 81,
      age: 0,
    },

    {
      name: "Skater XL  The Ultimate Skateboarding Game",
      description:
        "Experience control and a unique reaction rate whilst you skate in emblematic places from the real world. Enjoy the control you always dreamed of thanks to the independant foot control and a unique playability based on physics.",
      price: 22.82,
      offer: 0.0,
      img: "skaterXl.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "skaterXl2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256794052/movie_max_vp9.webm?t=1595948742",
      metacritic: 81,
      age: 0,
    },
  ];

  for (const game of games) {
    const newGame = new Game({
      name: game.name,
      description: game.description,
      price: game.price,
      offer: game.offer,
      img: game.img,
      img2: game.img2,
      video: game.video,
      metacritic: game.metacritic,
      category: game.category,
      stock: game.stock,
      age: game.age,
      trending: game.trending,
      slug: slugify(game.name, { remove: /[:`']/g, replacement: "_", lower: true, strict: true }),
    });
    await newGame.save();

    category.games.push(newGame._id);
    await category.save();
  }

  console.log("[Database] gameSport Seeder");
}

module.exports = gameSportSeeder;
