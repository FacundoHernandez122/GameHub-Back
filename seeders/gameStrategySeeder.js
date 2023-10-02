const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameStrategySeeder() {
  const category = await Category.findOne({ name: "Strategy" });
  const categoryId = category._id;
  const games = [
    {
      name: "Skyrim",
      description:
        "Skyrim Special Edition, ganador de más de 200 premios al 'Juego del año', da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y los complementos, así como nuevas características: gráficos y efectos renovados, rayos crepusculares volumétricos, reflejos en tiempo real, profundidad de campo dinámica y muchas más. Además, Skyrim Special Edition lleva todo el poder de los mods a PC y Xbox One: nuevas misiones, entornos, personajes, diálogos, armaduras y armas, entre otras muchas cosas. ¡Con los mods, la experiencia no tiene límites!",
      price: 0.0,
      offer: 0.0,
      img: "elder.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "elder2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/81281/movie_max.webm?t=1466707024",
      metacritic: 94,
      age: 17,
    },
    {
      name: "Anno 1800",
      description:
        "Lead the Industrial Revolution!Welcome to the dawn of the Industrial Age. The path you choose will define your world. Are you an innovator or an exploiter? A conqueror or a liberator? How the world remembers your name is up to you.In Anno 1800, players will take charge of their own fortune as they navigate the rapidly evolving technological landscape and malicious political arena of the 19th century in their quest to build an empire that will reach from the smog-filled cities of Europe to the teeming jungles of South America. Combining beloved features with innovative gameplay, Anno 1800 is the beginning of a new era for the Anno franchise as players leave their mark on a crucial moment in human history.Welcome to the 19th century, a time of industrialization, diplomacy, and discovery. Rich with technological innovations, conspiracies, and changing allegiances, this era presents the perfect setting for classic Anno gameplay. Anno 1800 provides players ample opportunity to prove their skills as a ruler as they create huge metropolises, plan efficient logistic networks, settle an exotic new continent, send out expeditions around the globe, and dominate their opponents by diplomacy, trade, or warfare.Anno 1800 combines beloved features from 20 years of Anno history. .",
      price: 0.0,
      offer: 0.0,
      img: "anno1800.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "anno18002.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256918685/movie_max_vp9.webm?t=1670594582",
      metacritic: 81,
      age: 0,
    },
    {
      name: "Age of Empires II Definitive Edition",
      description:
        "Age of Empires II: Definitive Edition conmemora el 20.º aniversario de uno de los juegos de estrategia más aclamados de la historia, que ahora hace gala de impresionantes gráficos en resolución 4K Ultra HD y una banda sonora totalmente remasterizada. Además, Age of Empires II: DE incluye 'Los últimos khanes', que incorpora 3 campañas y 4 civilizaciones nuevas. Las frecuentes actualizaciones contienen eventos, contenido adicional, nuevos modos de juego (¡como el reciente modo cooperativo!) y funciones mejoradas. Disfruta como nunca de todas las campañas originales y las expansiones más vendidas. ¡Te aguarda una experiencia de juego de más de 200 horas que abarca todo un milenio de la historia humana! Juega en línea para desafiar a otros jugadores en tu empresa por dominar el mundo con 35 civilizaciones diferentes. Asimismo, ¡puedes experimentar nuevas civilizaciones y campañas con el DLC 'Señores de Occidente'! Las actualizaciones más recientes abarcan el modo Batalla campal, soporte continuo para el Editor de escenarios, la función Partida rápida para librar partidas sociales con mayor facilidad, mejoras en la IU del juego ¡y mucho más!",
      price: 0.0,
      offer: 0.0,
      img: "age2.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "age22.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256810032/movie_max_vp9.webm?t=1605737896",
      metacritic: 86,
      age: 0,
    },
    {
      name: "Age of Empires III Definitive Edition",
      description:
        "Hearts of Iron III allows the player to take control of any nation in the world and guide that nation through World War II. The player controls virtually every aspect of their country, including production, research, diplomacy, warfare, politics. and espionage. The game centers around three factions: the Axis (led by Germany), the Allies (led by the United Kingdom), and the Comintern (led by the Soviet Union). All other nations can slowly align with one of the factions. Nations are more likely to side with factions that they are ideologically and diplomatically aligned with. The player can use a multitude of different divisions, fleets, and warplanes to engage in combat with enemy forces",
      price: 35.0,
      offer: 0.0,
      img: "age III.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "ageiii2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256798809/movie_max_vp9.webm?t=1598557667",
      metacritic: 75,
      age: 0,
    },
    {
      name: "Aliens Dark Descent",
      description:
        "The Dark Descent story is set in the year 2198, 19 years after the events of the original trilogy films. It is a real-time tactics video game played from a top-down perspective. Players need to issue commands to a squad of four colonial marines, who must battle the Xenomorphs and rogue agents from the Weyland-Yutani Corporation. The game features five starting character classes, each with their own unique weapons and abilities. While combat happens in real time, players can briefly slow time to a crawl in order to issue commands or set up an ambush. Players are encouraged to explore the moon station, discovering short cuts and deploying motion trackers which allows players to track alien movements. They can also use a welder to open locked doors, and can weld doors shut as they retreat from one room to another. The changes to level layout are permanent. Welding a door may stop the Xenomorphs from advancing, but it may also block the player's route in subsequent visits.",
      price: 24.0,
      offer: 0.0,
      img: "aliensdark.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "aliensdark2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256953835/movie_max_vp9.webm?t=1687267994",
      metacritic: 75,
      age: 0,
    },

    {
      name: "Civilization VI",
      description:
        "The Flagship Turn-Based Strategy Game ReturnsBecome Ruler of the World by establishing and leading a civilization from the dawn of man into the space age: Wage war, conduct diplomacy, discover new technologies, go head-to-head with some of history’s greatest leaders and build the most powerful empire the world has ever known.Jump right in and play at your own pace with an intuitive interface that eases new players into the game. Veterans will appreciate the depth, detail and control that are highlights of the series.BELIEVABLE WORLD:Ultra realistic graphics showcase lush landscapes for you to explore, battle over and claim as your own. COMMUNITY &amp; MULTIPLAYER:Compete with players all over the world or locally in LAN matches, mod* the game in unprecedented ways, and install mods directly from an in-game community hub without ever leaving the game. WIDE SYSTEM COMPATIBILITY:Civilization V operates on many different systems, from high end desktops to many laptops. ALL NEW FEATURES:A new hex-based gameplay grid opens up exciting new combat and build strategies. City States become a new resource in your diplomatic battleground. An improved diplomacy system allows you to negotiate with fully interactive leaders.  Sid Meier's Civilization V are available in English, French, Italian, German and Spanish only.",
      price: 0.0,
      offer: 0.0,
      img: "civV.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "civV2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/80682/movie_max.webm?t=1447354028",
      metacritic: 90,
      age: 0,
    },

    {
      name: "Commandos 3",
      description:
        "¡A formar, soldado! Commandos 3 - HD Remaster te transporta a los crueles y despiadados campos de batalla de Europa. Atraviesa las letales trincheras de Stalingrado, derrota al enemigo alemán en el caótico corazón del Tercer Reich de Berlín y usa tus conocimientos tácticos para sobrevivir al desembarco de Normandía en el Día D.En esta mejorada versión del aclamado título táctico en tiempo real, liderarás a una unidad de fuerzas especiales tras las líneas enemigas durante la Segunda Guerra Mundial. Ayuda a los Aliados en alta definición, con controles e interfaz de usuario mejorados.",
      price: 0.0,
      offer: 0.0,
      img: "commandos3.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "commandos3.2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256732928/movie_max.webm?t=1540198414",
      metacritic: 72,
      age: 0,
    },

    {
      name: "Commandos 2",
      description:
        "Commandos 2: Men of Courage is a tactical action/strategy game set against the backdrop of World War II. Take control of an elite group of commandos who must venture deep into enemy territory and utilize their combined expertise to complete a series of mission-based objectives. Go covert into new environments based on authentic WWII locations: the heart of the third Reich, a northern European submarine installation, the headquarters of the Japanese army and more.Interact like never before: with the environment: steal enemy uniforms and weapons, climb poles, swing from cables, swim, utilize vehicles, and climb in/out of buildings, ships, planes.	Control nine commandos:  including a green beret, sniper, demolitions expert, seductress, thief, and even a dog. 	All new 3D engine:  rotate the environment 360 degrees, move seamlessly in/out of buildings, submarines, planes and under water, and zoom in/out on the environment.  	Innovative camera control:  simultaneous control of multiple gameplay windows in real time.	Authentic WWII scenarios:  10 missions spanning 9 different environments in night and day with realistic weather effects. 	Multiplayer:  Go to war with others in a cooperative multiplayer mode (Multiplayer available in PC version only!!!). 	New WWII vehicles and weapons:",
      price: 0.0,
      offer: 0.0,
      img: "commandos2.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "commandos2.2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256732927/movie_max.webm?t=1540198234",
      metacritic: 72,
      age: 0,
    },

    {
      name: "Crusader Kings III",
      description:
        "Main Features. Take command of your house and expand your dynasty through a meticulously researched Middle Ages. Begin in 867 or 1066 and claim lands, titles, and vassals to secure a realm worthy of your royal blood. Your death is only a footnote as your lineage continues with new playable heirs, either planned… or not ...",
      price: 15.0,
      offer: 0.0,
      img: "crusaderKings.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "crusaderKings2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256785236/movie_max.mp4?t=1683100356",
      metacritic: 91,
      age: 0,
    },
    {
      name: "Frostpunk 2",
      description:
        "Frostpunk 2 is the sequel to the highly acclaimed, BAFTA-nominated society survival game that blended city building, strategy and management gameplay, creating a brand new genre. Its successor takes place 30 years after the apocalyptic blizzard storm, and Earth is still overwhelmed by the icy climate of neverending frost and harsh weather.You play as the leader of a resource-hungry metropolis where the expansion and search for new sources of power is an unavoidable reality. After the age of coal, conquering Frostland for the oil extraction industry is expected to be the new salvation of what’s left of humanity. However, change does not come easily, and not everyone in this new multi-layered society will welcome this new direction.",
      price: 15.0,
      offer: 0.0,
      img: "frostpunk.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "frostpunk2.2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256846348/movie_max_vp9.webm?t=1685019416",
      metacritic: 82,
      age: 0,
    },
    {
      name: "Frozenheim",
      description:
        "Become famous as the legendary hero of your Viking clan and notorious as the scourge of other jarls. Your exploits and deeds will be legendary. However, every legend has a beginning and yours begins on the shores of Frozenheim.For your village to prosper, you will have to make the most of the seasons by hunting, fishing, farming land, and gathering resources before the winter. Exploration will be key as the lands are as bountiful as they are dangerous. Once you have the lay of the land and a steady supply, you can start planning out and managing your city. ",
      price: 17.0,
      offer: 0.0,
      img: "frozenheim.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "frozenheim2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256846348/movie_max_vp9.webm?t=1685019416",
      metacritic: 67,
      age: 0,
    },
    {
      name: "Farthest Frontier",
      description:
        "¡Protect and guide your small band of settlers to forge a town from untamed wilderness at the edge of the known world. Harvest raw materials, hunt, fish and farm to sustain your advancing town. Produce crafted items for villagers to trade, consume, equip and fight with as you battle for your survival against the elements and outside threats (pacifist mode available for players who do not want to engage in combat).Harvest, Grow, Craft - Harvest 14 different raw materials from wood, stone and clay, to metal ores, wild herbs, and honey. Grow 17 types of food, including forage items, fish and game, plus 10 food crops, each with different characteristics. Produce 32 crafted items and materials in a multi—tiered economy.Build and Advance Construct 50 different types of buildings as you grow your town from a fledgling settlement to a bustling city. Your town center and housing will advance through multiple building tiers as the prosperity and desirability of your town increases. Upgrade production buildings to increase efficiency and enable production of more advanced items.Most Detailed Farming System Ever Strategically select from 10 crops with unique growing characteristics and configure crop rotations to maintain soil fertility, avoid heat and frost damage, and prevent the accumulation of diseases. Cultivate your fields over time, removing weeds and rocks, raising fertility and adjusting soil mixture to achieve maximum crop production to keep your growing population fed.Advanced Town Simulation Villagers actively live their lives and perform their jobs in real time. Watch as villagers carry goods across town from remote work-sites to be processed into materials and crafted into items. ",
      price: 20.0,
      offer: 0.0,
      img: "farfro.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "farfro2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256891638/movie_max_vp9.webm?t=1655145988",
      metacritic: 75,
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

  console.log("[Database] gameStrategy Seeder");
}

module.exports = gameStrategySeeder;
