const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameShooterSeeder() {
  const category = await Category.findOne({ name: "Shooter" });
  const categoryId = category._id;
  const games = [
    {
      name: "Metro Exodus",
      description:
        "Metro Exodus is a first-person shooter video game that was developed by 4A Games and published by Deep Silver. It is the third installment in the Metro video game series, which is based on Dmitry Glukhovsky's novels. The game is a sequel to Metro: Last Light and the book Metro 2035, and follows protagonist Arytom and his crew as they flee the Moscow Metro and set off with their allies on an intercontinental journey to the Far East on a locomotive called Aurora.",
      price: 35.0,
      offer: 0.0,
      img: "metroExodus.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "metroExodus2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256719529/movie_max.webm?t=1528812175",
      metacritic: 85,
      age: 18,
    },

    {
      name: "Tiny Tinays Wonderlands",
      description:
        "Similar to its predecessors, the game is a first-person shooter with elements of an action role-playing game. The game can be played solo or with up to three other players in online or local split-screen multiplayer. The game is set within the world of a fantasy-themed tabletop role-playing game. The game features an overworld, which is used by the playable characters to traverse the various locations in the game. There are random combat encounters and quests that can only be completed in the overworld",
      price: 75.0,
      offer: 0.0,
      img: "tinyTina.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "tinyTina2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256852560/movie_max_vp9.webm?t=1632286996",
      metacritic: 89,
      age: 17,
    },

    {
      name: "Deceit 2",
      description:
        "El estudio independiente World Makers ha anunciado Deceit 2, la continuación de su muy bien valorado multijugador asimétrico. Este proyecto está en desarrollo de cara a estrenarse en algún momento de 2023, y por primera vez no será exclusivo de PC, sino que también llegará a PS5, Xbox Series X/S, PS4 y Xbox One. Deceit 2 es un juego social de terror y deducción para entre 6 y 9 jugadores, entre los que hay dos personajes infectados. Los infectados deben obedecer las órdenes del Director del juego y los inocentes tienen que colaborar para escapar del Ritual y descubrir quiénes están en su contra.",
      price: 26.0,
      offer: 0.0,
      img: "deceit.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "deceit2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256969490/movie_max_vp9.webm?t=1694653315",
      metacritic: 81,
      age: 17,
    },

    {
      name: "Sniper Elite 5",
      description:
        "Similar to its predecessors, Sniper Elite 5 is a third-person shooter. Similar to Sniper Elite 4, the game features several large levels, which provide players with various opportunities to infiltrate and extract. When the player kills an enemy using a sniper rifle from a long distance, the X-Ray kill cam system will activate, in which the game's camera follows the bullet from the sniper rifle to the target, and shows body parts, bones or internal body organs being broken or ruptured by the bullet",
      price: 28.0,
      offer: 0.0,
      img: "sniperElite.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "sniperElite2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256888480/movie_max_vp9.webm?t=1653551948",
      metacritic: 79,
      age: 17,
    },

    {
      name: "Tom Clancys Ghost Recon Wildlands",
      description:
        "Like its predecessor Wildlands, Breakpoint is a tactical shooter game set in an open world environment. It is played from a third-person perspective and uses an optional first-person view for aiming weapons. Players take on the role of Lieutenant Colonel Anthony Nomad Perryman, a member of the Delta Company, First Battalion, 5th Special Forces Group, also known as Ghosts, a fictional elite special operations unit of the United States Army under the Joint Special Operations Command.",
      price: 57.0,
      offer: 0.0,
      img: "ghostRecon.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "ghostRecon2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256680693/movie_max.webm?t=1488553367",
      metacritic: 89,
      age: 18,
    },

    {
      name: "Crysis 3 Remastered",
      description:
        "Returning to the fight as super-soldier Prophet, the search for the alien Alpha Ceph continues, but now you must also expose the truth behind the C.E.L.L. corporation, which has turned New York City into a sprawling urban rainforest sheltered by a giant nanodome. Fight through 7 distinct districts and decimate your opponents in a blaze of brute force using the Nanosuit’s superior technology, or use stealth to achieve your goals and become humanity’s silent savior. Equipped with your powerful and deadly new Predator Bow, there’s no wrong way to save the world.",
      price: 21.0,
      offer: 0.0,
      img: "crysisRemastered.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "crysisRemastered2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256909631/movie_max_vp9.webm?t=1666100058",
      metacritic: 81,
      age: 17,
    },

    {
      name: "Halo Wars Definitive Edition",
      description:
        "Halo Wars is a real-time strategy (RTS) video game developed by Ensemble Studios and published by Microsoft Game Studios for the Xbox 360 video game console. It was released in Australia on February 26, 2009; in Europe on February 27; and in North America on March 3. The game is set in the science fiction universe of the Halo series in the year 2531, 21 years before the events of Halo: Combat Evolved. The player leads human soldiers aboard the warship Spirit of Fire in an effort to stop an ancient fleet of ships from falling into the hands of the genocidal alien Covenant.",
      price: 12.0,
      offer: 0.0,
      img: "haloWars.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "haloWars2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256683283/movie_max.webm?t=1492444645",
      metacritic: 80,
      age: 0,
    },

    {
      name: "Left 4 Dead 2",
      description:
        "Left 4 Dead 2 builds upon cooperatively focused gameplay and Valve's proprietary Source engine, the same game engine used in the original Left 4 Dead. Set during the aftermath of an apocalyptic pandemic, the game focuses on four new Survivors, fighting against hordes of zombies known as the Infected, who develop severe psychosis and act extremely aggressive. The Survivors must fight their way through five campaigns, interspersed with safe houses that act as checkpoints, with the goal of escape at each campaign's finale.",
      price: 9.0,
      offer: 0.0,
      img: "left4Dead.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "left4Dead2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/5952/movie_max.webm?t=1682697457",
      metacritic: 89,
      age: 0,
    },

    {
      name: "Medal of Honor Above and Beyond",
      description:
        "The game takes place in North Africa, Free France, Norway and Nazi Germany during World War II, taking the franchise back to its roots. Protagonists in the game include an OSS officers, US Army Air Force pilots, US Navy sailors, US Marines, US Army soldiers and French Resistance fighters - who all fight against Military of Nazi Germany, Nazi Germany's paramilitary groups, and Police forces of Nazi Germany. The game also features multiplayer modes.",
      price: 48.5,
      offer: 0.0,
      img: "medalAbove.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "medalAbove2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256813237/movie_max_vp9.webm?t=1607707643",
      metacritic: 89,
      age: 17,
    },

    {
      name: "PAYDAY 3",
      description:
        "The game will take place after the ending of Payday 2 where the heisters went separate ways and left their lives of crime, but something re-motivates the Payday Gang to continue the life of crime. The original crew of characters originating from Payday: The Heist  and 2 other heisters, one returning from Payday 2, and one new, will appear as additional characters. The game will take place mainly in New York.] From teaser images, one of the missions will take place at the Gold & Sharke Incorporated bank.",
      price: 39.9,
      offer: 0.0,
      img: "payday3.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "payday32.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256923475/movie_max_vp9.webm?t=1686555578",
      metacritic: 83,
      age: 15,
    },

    {
      name: "Tom Clancys Rainbow Six Siege",
      description:
        "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for PlayStation 4, Windows, and Xbox One on December 1, 2015; the game was also released for PlayStation 5 and Xbox Series X/S exactly five years later on December 1, 2020. The title received a port for Google Stadia on June 30, 2021, and one for Amazon Luna in January 2022. The game puts heavy emphasis on environmental destruction and cooperation between players.",
      price: 19.0,
      offer: 0.0,
      img: "rainbowSix.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "rainbowSix2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256854729/movie_max_vp9.webm?t=1633534183",
      metacritic: 89,
      age: 18,
    },

    {
      name: "Titanfall 2",
      description:
        "Titanfall 2 is a first-person shooter video game, developed by Respawn Entertainment and published by Electronic Arts. A sequel to 2014's Titanfall, the game was released worldwide on October 28, 2016, for PlayStation 4, Windows, and Xbox One. In Titanfall 2, players control Titans, mecha-style exoskeletons and their pilots, who are agile and equipped with a variety of skills ranging from wall-running to cloaking. Set in a science fiction universe, the single-player campaign follows the story of Jack Cooper, a rifleman from the Frontier Militia, who bonds with his mentor's Titan BT-7274 after his mentor is killed in action.",
      price: 37.14,
      offer: 0.0,
      img: "titanfall.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "titanfall2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256787686/movie_max_vp9.webm?t=1592506523",
      metacritic: 89,
      age: 12,
    },

    {
      name: "Wolfenstein II The New Colossus",
      description:
        "Wolfenstein II: The New Colossus is a 2017 action-adventure and first-person shooter game developed by MachineGames and published by Bethesda Softworks. The eighth main entry in the Wolfenstein series and the sequel to 2014's Wolfenstein: The New Order, the game is set in an alternate history which takes place in 1961 following the Nazi victory in the Second World War. The story follows war veteran William B.J. Blazkowicz and his efforts to fight against the Nazi regime in the United States.",
      price: 32.82,
      offer: 0.0,
      img: "wolfensteinii.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "wolfensteinii2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256698438/movie_max.webm?t=1508353410",
      metacritic: 86,
      age: 18,
    },

    {
      name: "DOOM Eternal",
      description:
        "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. The sequel to Doom (2016), and the seventh game in the Doom series, it was released on March 20, 2020, for PlayStation 4, Stadia, Windows, and Xbox One, with a version for Nintendo Switch released on December 8, 2020, and versions for PlayStation 5 and Xbox Series X and Series S released on June 29, 2021.",
      price: 16.25,
      offer: 0.0,
      img: "doomEternal.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "doomEternal2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256778598/movie_max_vp9.webm?t=1586386363",
      metacritic: 88,
      age: 17,
    },

    {
      name: "Borderlands 3",
      description:
        "Borderlands 3 is a 2019 action role-playing first-person shooter video game developed by Gearbox Software and published by 2K. It is a sequel to 2012's Borderlands 2, and the fourth entry in the main Borderlands series. Borderlands 3 was released on 13 September 2019 for PlayStation 4, Windows, and Xbox One, and released for macOS on 30 October 2019. A Stadia port was released on 17 December 2019. Versions for the Xbox Series X and Series S and PlayStation 5 including free upgrades for users on the prior console versions were released on 10 and 12 November 2020, respectively.",
      price: 42.82,
      offer: 0.0,
      img: "boderlands3.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "boderlands32.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256875693/movie_max_vp9.webm?t=1646090218",
      metacritic: 81,
      age: 17,
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

  console.log("[Database] gameShooter Seeder");
}

module.exports = gameShooterSeeder;
