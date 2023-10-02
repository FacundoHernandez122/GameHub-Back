const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameAdventureSeeder() {
  const category = await Category.findOne({ name: "Adventure" });
  const categoryId = category._id;
  const games = [
    {
      name: "Far Cry Primal",
      description:
        "Drink from the shaman's cup to play as the largest animal in Oros, the almighty mammoth. Feel your power as you stomp your enemies and defend your herd from other beasts and humans. NEW WEAPON, THE BLOOD SHASTI CLUB: A bloodstained cudgel of bone and teeth wielded by Ull, the vicious leader of the Udam. ENHANCEMENT PACKS that offers early access to rare resources and unique customization options. THE SABRETOOTH PACK: early access to animal hides for crafting + change a selection of the sabretooth tigers in Oros to the ferocious Flame Fang Sabretooths. THE OWL PACK: early access to resources for crafting + decorate your arms with unique Wenja tribal paint + change the appearance of your owl companion, give him the dark feathers of a raging storm cloud.",
      price: 50.0,
      offer: 0.0,
      img: "far_cry_p.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "far_cry_p2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256660809/movie_max.mp4?t=1456871116",
      metacritic: 74,
      age: 17,
    },
    {
      name: "Deus Ex",
      description:
        "Deus Ex: Mankind Divided is a better shooter than most actual shooters. The year is 2029, and mechanically augmented humans have now been deemed outcasts, living a life of complete and total segregation from the rest of society. <br><br>Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy. Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy.",
      price: 30.0,
      offer: 0.0,
      img: "deus_ex.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "deus_ex2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256669389/movie_max.webm?t=1471969549",
      metacritic: 83,
      age: 17,
    },

    {
      name: "Sheltered",
      description:
        "Hammerting is a vertical dwarven mining colony sim with RPG elements. Manage a clan of colourful Dwarves, establish an epic mining operation, craft legendary swords and delve deep for greater glory, riches... and danger. Panting, scared, the shelter airlock smashes down behind you. You wish you did not have to go outside, but you do. It would be easier to give up.  But you don’t.  The hardship, the hunger, the thirst. The  fear. You keep reminding yourself why you stay alive. Why you do this. Then you hear it.  “Daddy you’re back.”  You wife’s face lights up and you open a bag full of medical supplies. You need not tell her how you got them. You simply enjoy your small victory in this, the harshest of times. In the post-apocalyptic world, you must keep your family alive in your underground bunker in this deep strategy game from Unicube...",
      price: 35.0,
      offer: 0.0,
      img: "sheltered.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "sheltered2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256661795/movie_max.mp4?t=1458120546",
      metacritic: 62,
      age: 0,
    },
    {
      name: "Assassin's Creed Unity",
      description:
        "Assassin’s Creed® Unity is an action/adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customising Arno's equipement to make the experience unique to you, both visually and mechanically. In addition to an epic single-player experience, Assassin’s Creed Unity delivers the excitement of playing with up to three friends through online cooperative gameplay in specific missions. Throughout the game, take part in one of the most pivotal moments of French history in a compelling storyline and a breath-taking playground that brought you the city of lights of today. Assassin’s Creed® Unity tells the story of Arno, a young man who embarks upon an extraordinary journey to expose the true powers behind the French Revolution. In the brand new co-op mode, you and your friends will also be thrown in the middle of a ruthless struggle for the fate of a nation.",
      price: 50.0,
      offer: 0.0,
      img: "assassin_u.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "assassin_u2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2034862/movie_max.mp4?t=1447364084",
      metacritic: 80,
      age: 17,
    },

    {
      name: "Watch Dogs",
      description:
        "Experience Watch_Dogs - the phenomenon of 2014 - with the biggest edition ever!<br>As Aiden Pearce, a brilliant hacker, turn Chicago into the ultimate weapon in your quest for revenge. In this Complete Edition, including the game + Season Pass, access a new game mode, weapons, outfits and missions and plays as T-Bone, the legendary hacker in a brand new campaign! All it takes is the swipe of a finger. We connect with friends. We buy the latest gadgets and gear. We find out what’s happening in the world. But with that same simple swipe, we cast an increasingly expansive shadow. With each connection, we leave a digital trail that tracks our every move and milestone, our every like and dislike. And it’s not just people. Today, all major cities are networked. Urban infrastructures are monitored and controlled by complex operating systems. ",
      price: 25.0,
      offer: 0.0,
      img: "watch_dogs.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "watch_dogs2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2032605/movie_max.mp4?t=1447362106",
      metacritic: 77,
      age: 17,
    },

    {
      name: "The Fall",
      description:
        "Experience the first story in a mind bending trilogy! The Fall was recently awarded Game of the Year for Best Story from Giant Bomb.<br><br>Take on the role of ARID, the artificial intelligence onboard a high-tech combat suit. ARID's program activates after crashing on an unknown planet. The human pilot within the combat suit is unconscious, and it is ARID's duty to protect him at all costs! As she progresses into her twisted and hostile surroundings, driven to find medical aid before it is too late, the realities of what transpired on this planet force ARID to reflect upon her own protocols. ARID's journey to save her pilot ultimately challenges the very rules that are driving her. The Fall is a unique combination of adventure-game puzzle solving, and side-scroller action, all set within a dark and atmospheric story. Exploration will be paramount to surviving your adventure. Utilize ARID's flashlight to uncover a myriad of interactive objects. If what you uncover is hostile, switch on your laser sight and kick some metal! Get ready for a disturbing journey as you fight, explore, and think your way forward, expanding ARID's world, in spite of her protocols.",
      price: 40.0,
      offer: 0.0,
      img: "the_fall.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "the_fall2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2040207/movie_max.mp4?t=1447376723",
      metacritic: 76,
      age: 0,
    },
    {
      name: "Red Dead Redemption 2",
      description:
        "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. The Red Dead Redemption 2:  Ultimate Edition delivers all of the Story Mode content from the Special Edition plus additional content for online including Bonus Outfits for your online Character, Rank Bonuses, Black Chestnut Thoroughbred and free access to the Survivor Camp Theme. Plus get free access to Additional Weapons in online.",
      price: 50.0,
      offer: 0.0,
      img: "red_dead.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "red_dead2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256768248/movie_max.mp4?t=1574881585",
      metacritic: 93,
      age: 17,
    },
    {
      name: "The Witcher 3 Wild Hunt",
      description:
        "is a 2015 action role-playing game developed and published by CD Projekt. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective. The games follow the Witcher series of fantasy novels written by Andrzej Sapkowski. The game takes place in a fictional fantasy world based on Slavic mythology. Players control Geralt of Rivia, a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. The game's story has three possible endings, determined by the player's choices at key points in the narrative.",
      price: 45.0,
      offer: 0.0,
      img: "the_witcher.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "the_witcher2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256927226/movie_max_vp9.webm?t=1674829926",
      metacritic: 93,
      age: 0,
    },
    {
      name: "Sekiro Shadows Die Twice",
      description:
        "Winner of Best of gamescom and Best Action Game at gamescom 2018, Sekiro: Shadows Die Twice is the next adventure from the software developer, creators of Bloodborne and the Dark Souls series. Create your own clever path to revenge in this new action-adventure title. In Sekiro: Shadows Die Twice you are the one-armed wolf, a disgraced and disfigured warrior rescued from the brink of death. Forced to protect a young lord who is a descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a dangerous quest to regain your honor, not even death itself.",
      price: 60.0,
      offer: 0.0,
      img: "sekiro.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "sekiro2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256806899/movie_max_vp9.webm?t=1603837979",
      metacritic: 88,
      age: 17,
    },
    {
      name: "The Outer Worlds",
      description:
        "The Outer Worlds is an award-winning single-player first-person sci-fi RPG from Obsidian Entertainment and Private Division. Lost in transit while on a colonist ship bound for the furthest edge of the galaxy, you awake decades later only to find yourself in the midst of a deep conspiracy threatening to destroy the Halcyon colony. As you explore the furthest reaches of space and encounter various factions, all vying for power, the character you decide to become will determine how this player-driven story unfolds. In the corporate equation for the colony, you are the unplanned variable. In keeping with the Obsidian tradition, how you approach The Outer Worlds is up to you. Your choices affect not only the way the story develops; but your character build, companion stories, and end game scenarios. You can be flawed, in a good way</h2>New to The Outer Worlds is the idea of flaws. A compelling hero is made by the flaws they carry with them. While playing The Outer Worlds, the game tracks your experience to find what you aren't particularly good at.",
      price: 30.0,
      offer: 0.0,
      img: "the_outher.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "the_other2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256806027/movie_max.mp4?t=1603463762",
      metacritic: 82,
      age: 17,
    },
    {
      name: "The Walking Dead A New Frontier",
      description:
        "When family is all you have left…how far will you go to protect it? After society was ripped apart by undead hands, pockets of civilization emerge from the chaos. But at what cost? Can the living be trusted on this new frontier?. As Javier, a young man determined to find the family taken from him, you meet a young girl who has experienced her own unimaginable loss. Her name is Clementine, and your fates are bound together in a story where every choice you make could be your last. After society was ripped apart by undead hands, pockets of civilization emerge from the chaos. But at what cost? Can the living be trusted on this new frontier",
      price: 40.0,
      offer: 0.0,
      img: "twd.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "twd2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256676797/movie_max.mp4?t=1482256829",
      metacritic: 81,
      age: 17,
    },
    {
      name: "Elden Ring",
      description:
        "A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment. Create your Own Character</h2>In addition to customizing the appearance of your character, you can freely combine the weapons, armor, and magic that you equip. You can develop your character according to your play style, such as increasing your muscle strength to become a strong warrior, or mastering magic. An Epic Drama Born from a Myth A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between. Unique Online Play that Loosely Connects You to Others</h2>In addition to multiplayer, where you can directly connect with other players and travel together, the game supports a unique asynchronous online element that allows you to feel the presence of others.",
      price: 46.0,
      offer: 0.0,
      img: "elden_ring.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "elden_ring2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256889456/movie_max.mp4?t=1654109241",
      metacritic: 94,
      age: 0,
    },
    {
      name: "Stray Gods The Roleplaying Musical",
      description:
        "Stray takes you on one pawsome adventure as a little cat who, after getting lost, must find their way through a neon-tinted cybercity inhabited by robots. Along the way, you'll meet a little robot called B12 who accompanies you as you run along the streets, climb up buildings, and paw at paint cans to find your way through. With plenty of mysteries wrapped up in its world, you'll puzzle your way through the city and experience everything from the perspective a fluffy. From pawing at paint cans to known them over, to curling up for a snooze, and scratching at rugs, you'll get to do all the things a cat would do as you explore. Oh, and there's a dedicated meow-button, of course.",
      price: 25.0,
      offer: 0.0,
      img: "stray_gods.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "stray_gods2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256962741/movie_max_vp9.webm?t=1691650711",
      metacritic: 78,
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

  console.log("[Database] gameAdventure Seeder");
}

module.exports = gameAdventureSeeder;
