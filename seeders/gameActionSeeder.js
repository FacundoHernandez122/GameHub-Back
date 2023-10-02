const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameActionSeeder() {
  const category = await Category.findOne({ name: "Action" });
  const categoryId = category._id;
  const games = [
    {
      name: "Fallout 4",
      description:
        "Get the complete post-nuclear adventure from Bethesda Game Studios and winner of more than 200 ‘Best Of’ awards, including the DICE and BAFTA Game of the Year. Fallout 4 G.O.T.Y. includes the critically acclaimed core game and all six official add-ons including Automatron, Wasteland Workshop, Far Harbor, Contraptions Workshop, Vault-Tec Workshop, and Nuka-World. Please note that Fallout 4 add-ons are not pre loaded on the Fallout 4 disc. You must download all add-ons via the code provided in the box. Additional content is approx. 10-15GB depending on platform.",
      price: 26.0,
      offer: 0.0,
      img: "Fallout4.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "Fallout42.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256658080/movie_max.webm?t=1447378809",
      metacritic: 91,
      age: 17,
    },

    {
      name: "Hand of Fate",
      description:
        "Add Hand of Fate 2 to your wishlist in order to keep up to date on announcements and release details!</a><br><br>&quot;Words fail me at describing just how seamlessly Defiant Development managed to blend the tailored experience aspect of deck building games with the hack-and-slash excitement of action. The Escapist, if you are a fan of either old school adventure books, Gauntlet from its glory days, collectible card games, Rogue or just general fantasy, this game is for you. Deckbuilding comes to life in Hand of Fate! An infinitely replayable series of quests - earn new cards, build your deck, then try to defeat it! In a cabin at the end of the world, the game of life and death is played. Draw your cards, play your hand, and discover your fate.",
      price: 20.0,
      offer: 0.0,
      img: "left_4.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "left_42.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/5952/movie_max.webm?t=1682697457",
      metacritic: 89,
      age: 17,
    },

    {
      name: "Final Fantasy XIV",
      description:
        "Set in the fantastical realm of Eorzea, Final Fantasy XIV is a sprawling online adventure where thousands of players set out to conquer a vast world teeming with fierce monsters, powerful magic, and alluring myths. In this massively multiplayer online RPG, you’ll share your experience with countless other players who populate the world, either passing them a wave as you scoot by on your own errands, or teaming up to conquer dungeons or fell powerful enemies together.",
      price: 59.0,
      offer: 0.0,
      img: "finalFantasy.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "finalFantasy2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/2029865/movie_max.webm?t=1447359267",
      metacritic: 83,
      age: 0,
    },

    {
      name: "Monster Hunter Rise",
      description:
        "Rise follows many of the new conventions established in Monster Hunter: World while also introducing new features and mechanics, including a new animal companion called a Palamute that can be used to ride across the map or into battle, and the use of Wirebugs to traverse the world and mount and ride certain monsters. The game received generally positive reviews upon release with critics praising the gameplay and its expansion of the mechanics introduced in World. It has sold more than 13 million copies worldwide since launch, making it the second best-selling game in the series. The DLC Sunbreak has sold more than 6 million copies since launch.",
      price: 29,
      offer: 0.0,
      img: "monsterHunter.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "monsterHunter2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256850907/movie_max_vp9.webm?t=1633009848",
      metacritic: 86,
      age: 0,
    },

    {
      name: "Red Dead Redemption II",
      description:
        "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
      price: 99.0,
      offer: 0,
      img: "redDeadRedemption.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "redDeadRedemption2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256768248/movie_max.webm?t=1574881585",
      metacritic: 93,
      age: 17,
    },

    {
      name: "Call of Duty Vanguard",
      description:
        "Vanguard's campaign features similar gameplay mechanics previously introduced in Modern Warfare, such as the player being able to mount wielded weapons to flat surfaces, interact with doors and execute takedowns. New gameplay features allow the player the ability to use a more advanced tactical approach in combat such as blind firing from behind cover, breaking through destructible environmental elements or creating new paths to complete objectives by climbing walls.",
      price: 27.99,
      offer: 0,
      img: "callOfDutyVanguard.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "callOfDutyVanguard2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256932367/movie_max_vp9.webm?t=1678294758",
      metacritic: 85,
      age: 18,
    },

    {
      name: "Grand Theft Auto V",
      description:
        "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.",
      price: 99.0,
      offer: 0,
      img: "gtaV.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "gtaV2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/2032899/movie_max.webm?t=1447362323",
      metacritic: 96,
      age: 17,
    },

    {
      name: "Assassins Creed Odyssey",
      description:
        "Write your own epic odyssey and become a legendary Spartan hero in Assassin’s Creed® Odyssey, an inspiring adventure where you must forge your destiny and define your own path in a world on the brink of tearing itself apart. Influence how history unfolds as you experience a rich and ever-changing world shaped by your decisions.",
      price: 14.9,
      offer: 0,
      img: "assassinsOdysey.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "assassinsOdysey2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256730993/movie_max.webm?t=1538496209",
      metacritic: 87,
      age: 0,
    },

    {
      name: "Street Fighter 6",
      description:
        "Street Fighter 6 features three overarching game modes: Fighting Ground, World Tour, and Battle Hub. Fighting Ground contains local and online versus battles as well as training and arcade modes, all featuring similar 2D fighting gameplay to the previous games in the series, in which two fighters use a variety of attacks and special abilities to knock out their opponent. World Tour is a single-player story mode featuring a customizable player avatar exploring 3D environments, such as Final Fight's Metro City and the small, fictional South Asian nation of Nayshall, with action-adventure gameplay",
      price: 59.99,
      offer: 0,
      img: "streetFighter.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "streetFighter2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256920209/movie_max_vp9.webm?t=1670565034",
      metacritic: 92,
      age: 0,
    },

    {
      name: "Dead by Daylight",
      description:
        "Dead by Daylight is an asymmetrical horror game where one player is the Killer and the other four are Survivors. Matches are referred to as trials. The Survivors' objective is to escape the trial by repairing five of seven generators scattered throughout it to power the two exit gates. The Killer must impale all Survivors on hooks before they escape, which will cause them to be sacrificed to a malevolent force known as the Entity. If only one Survivor remains, an open escape hatch appears at a random location on the map.",
      price: 29.9,
      offer: 0,
      img: "deadByDaylight.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "deadByDaylight2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256686761/movie_max.webm?t=1683120259",
      metacritic: 91,
      age: 17,
    },

    {
      name: "Rust",
      description:
        "The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying. Despite the presence of hostile animals such as bears and wolves, the primary threat to the player is other players due to the game being solely multiplayer. Combat is accomplished through firearms and various weapons, such as bows. In addition, vehicles controlled by non-player characters will occasionally roam, attacking armed players.",
      price: 27.0,
      offer: 0,
      img: "rust.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "rust2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256684736/movie_max_vp9.webm?t=1624520315",
      metacritic: 69,
      age: 17,
    },

    {
      name: "Black Desert",
      description:
        "An active combat system requires precise manual aiming, dodging and using combos, unlike the tab-targeting system seen in most MMORPGs. Skills can be activated through use of combos for attacking, dodging or blocking. Players are also able to engage in mounted combat. Mounts are acquired by taming in the wild, and players are able to breed special mounts by mating certain types. Mounts require feeding and care, cannot be stored in the inventory, and may be killed.",
      price: 8.0,
      offer: 0,
      img: "blackDesert.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "blackDesert2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256952912/movie_max_vp9.webm?t=1686779963",
      metacritic: 80,
      age: 12,
    },

    {
      name: "Sea of Thieves 2023 Edition",
      description:
        "Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose. Whether you’re voyaging as a group or sailing solo, you’re bound to encounter other crews in this shared world adventure",
      price: 39.9,
      offer: 0,
      img: "seaOfThieves.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "seaOfThieves2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256786233/movie_max_vp9.webm?t=1590081027",
      metacritic: 82,
      age: 12,
    },

    {
      name: "WatchDogs 2",
      description:
        "Tres años después de los eventos de Chicago, San Francisco se ha convertido en la próxima ciudad en instalar ctOS (Sistema operativo central), que conecta a todos con todo. El pirata informático Marcus Holloway (Ruffin Prentiss) es castigado por un crimen que no cometió por el ctOS actualizado - ctOS 2.0 - que lo clasifica como el sospechoso. Al darse cuenta de que el sistema provoca daños encubiertos a los ciudadanos inocentes de San Francisco, decide trabajar con el grupo de hacker DedSec para eliminar el ctOS 2.0 y Blume, la compañía neomercantilista que lo respalda.",
      price: 14.9,
      offer: 0,
      img: "watchDogs.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "watchDogs2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256674619/movie_max.webm?t=1479218791",
      metacritic: 90,
      age: 17,
    },

    {
      name: "HITMAN 3",
      description:
        "El juego trata de un asesino profesional que tiene que eliminar una serie de objetivos en diferentes lugares del mundo. Para ello el jugador cuenta con total libertad de acción para planear y eliminar a los objetivos principales sin que los guardias, civiles o incluso policías se den cuenta. El juego presenta seis ubicaciones diferentes, Dubái, Dartmoor, Berlín, Chongqing, Mendoza y región rumana de los Montes Cárpatos.",
      price: 80.0,
      offer: 0,
      img: "hitman.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "hitman2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256865936/movie_max_vp9.webm?t=1642702193",
      metacritic: 87,
      age: 17,
    },

    {
      name: "Rise of the Tomb Raider",
      description:
        "Development of Rise of the Tomb Raider closely followed the conclusion of development of the 2013 reboot. Player feedback was considered during development, with the team reducing the number of quick time events and introducing more puzzles and challenge tombs. The team traveled to several locations in Turkey, including Cappadocia, Istanbul and Ephesus, to design Kitezh. Rhianna Pratchett returned as the game's writer while Bobby Tahouri replaced Jason Graves as the game's composer",
      price: 21.9,
      offer: 0,
      img: "riseOfTomb.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "riseOfTomb2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256659136/movie_max.webm?t=1452106927",
      metacritic: 86,
      age: 18,
    },

    {
      name: "Black Mesa",
      description:
        "Black Mesa was developed in response to Half-Life: Source (2004), Valve's port of Half-Life to the Source engine, which lacked new features or improvements. Two teams wanted to improve on the Source remake and eventually merged to become Crowbar Collective. While they had originally targeted a release by 2009, the team realized they had rushed to this point and reevaluated their efforts to improve the quality of the remake.",
      price: 13.0,
      offer: 0,
      img: "blackMesa.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "blackMesa2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/256777178/movie_max.webm?t=1583517821",
      metacritic: 84,
      age: 0,
    },

    {
      name: "Marvels SpiderMan Miles Morales",
      description:
        "Gameplay is presented from the third-person perspective with a primary focus on Miles' traversal and combat abilities. Miles can freely move around New York City, interacting with characters, undertaking missions, and unlocking new gadgets and suits by progressing through the main story or completing tasks. Outside the story, the player is able to complete side missions to unlock additional content and collectible items. Combat focuses on chaining attacks together and using the environment, webs, and Venom attacks to incapacitate numerous foes while avoiding damage.",
      price: 45.0,
      offer: 0,
      img: "spiderMan.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "spiderMan2.jpg",
      video:
        "https://cdn.akamai.steamstatic.com/steam/apps/256915117/movie_max_vp9.webm?t=1672784168",
      metacritic: 93,
      age: 12,
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

  console.log("[Database] gameAction Seeder");
}

module.exports = gameActionSeeder;
