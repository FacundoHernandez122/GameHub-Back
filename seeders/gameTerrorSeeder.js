const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameTerrorSeeder() {
  const category = await Category.findOne({ name: "Terror" });
  const categoryId = category._id;
  const games = [
    {
      name: "Resident Evil 7",
      description:
        "What is Resident Evil? If you’ve ever heard a game described as a “survival horror”, you have Resident Evil to thank. Way back in 1996, Capcom introduced PlayStation players to a maze-like mansion populated by flesh-munching zombies, window-shattering zombie dogs and a menagerie of killer Bio Organic Weapons, or B.O.W.s. Resident Evil smartly blended action, exploration and resource management while taking every opportunity to terrify the player and birthed an entirely new genre in the process.It was an instant phenomenon, and has since spawned numerous sequels and spin-offs, including successful forays into cinema, comics and animation.",
      price: 20.65,
      offer: 0.0,
      img: "residentevil.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "residentevil2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256665613/movie_max.webm?t=1485771799",
      metacritic: 83,
      age: 17,
    },

    {
      name: "The Last Of Us Part II",
      description:
        "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay.Development of The Last of Us began in 2009, soon after the release of Naughty Dog's previous game, Uncharted 2: Among Thieves. For the first time in the company's history, Naughty Dog split into two teams; while one team developed Uncharted 3: Drake's Deception, the other half developed The Last of Us. The relationship between Joel and Ellie became the focus, with all other elements developed around it. Actors Troy Baker and Ashley Johnson portrayed Joel and Ellie, respectively, through voice and motion capture, and assisted creative director Neil Druckmann with the development of the characters and story. The original score was composed and performed by Gustavo Santaolalla.",
      price: 39.99,
      offer: 0,
      img: "lastofus.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "lastofus2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256936978/movie_max_vp9.webm?t=1680015361",
      metacritic: 88,
      age: 0,
    },
    {
      name: "The Texas Chain Saw Massacre",
      description:
        "In this horror video game, unlike Gun Medias previous Slasher video game project, The Slaughter Family can not be killed, and that combat is not the most logical method for players, but that stealth is the best strategy.The game has been confirmed to be a 3 Vs 4 asymmetrical horror survival, with three killers vs four survivors.Gun Media made confirmation there will be no hero character for Texas Chain Saw Massacre the Game.",
      price: 10.0,
      offer: 0,
      img: "chainsaw.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "chainsaw2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256964277/movie_max_vp9.webm?t=1692365443",
      metacritic: 72,
      age: 17,
    },

    {
      name: "Phasmophobia",
      description:
        "Phasmophobia is a paranormal horror game developed and published by British indie game studio Kinetic Games. It is based primarily on the popular hobby of ghost hunting. The game became available in early access through Steam for Microsoft Windows with virtual reality support in September 2020. The game received a large influx of popularity the following month due to many well-known Twitch streamers and YouTubers playing it, mainly for the Halloween season. On October 15 of the same year, the game was the sixth-most popular game on Twitch. It was the best selling game on Steam globally for several weeks in October to November 2020",
      price: 10.0,
      offer: 0,
      img: "phasmo.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "phasmo2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256906135/movie_max_vp9.webm?t=1663254571",
      metacritic: 82,
      age: 17,
    },

    {
      name: "The Evil Within",
      description:
        "Starting October 30th, you’ll be able to enjoy the first three chapters for free. If you choose to purchase the game after the first three chapters, you’ll be able to continue your save progress<h1>Acerca del juego</h1>Developed by Shinji Mikami -- creator of the seminal Resident Evil series -- and the talented team at Tango Gameworks, <u>The Evil Within</u> embodies the meaning of pure survival horror.  Highly-crafted environments, horrifying anxiety, and an intricate story are combined to create an immersive world that will bring you to the height of tension. With limited resources at your disposal, you’ll fight for survival and experience profound fear in this perfect blend of horror and action.STORY: While investigating the scene of a gruesome mass murder, Detective Sebastian Castellanos and his partners encounter a mysterious and powerful force. After seeing the slaughter of fellow officers, Sebastian is ambushed and knocked unconscious. When he awakens, he finds himself in a deranged world where hideous creatures wander among the dead. Facing unimaginable terror, and fighting for survival, Sebastian embarks on a frightening journey to unravel what’s behind this evil force.Pure Survival Horror ReturnsShinji Mikami, the father of survival horror, is back to direct a chilling new game wrapped in haunting narrative. Tension and anxiety heighten dramatically as you explore the game’s tortured world. ",
      price: 6.99,
      offer: 0,
      img: "evilwithin.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "evilwithin2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2034935/movie_max.webm?t=1447364179",
      metacritic: 68,
      age: 17,
    },

    {
      name: "Demonologist",
      description:
        "Demonologist is a Co-Op horror game that can be played with at least 1 and up to 4 players. Your goal is to identify the type of evil spirit in cursed places and exorcise it using your equipment, either alone or with your team.The best graphics in the co-op horror genre you'll ever play. Developed with Unreal Engine 5.You will encounter random events and ghosts in every game.Besides talking to ghosts, be careful what you speak, cursed places will react accordingly(One word you say can open a secret door).You will be able to invite other people to your safe house and you will be able to select paranormal places to play. You will have a showcase where you can show your achievements.With the money you earn, you can improve your safe house or buy a new safe house. You can buy a pet that will stand with you in the safe house.",
      price: 4.99,
      offer: 0,
      img: "demonologist.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "demonologist2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256934289/movie_max_vp9.webm?t=1678316556",
      metacritic: 70,
      age: 17,
    },

    {
      name: "The Outlast Trials",
      description:
        "Set in the era of the Cold War, human guinea pigs are involuntarily recruited by the good folks at the Murkoff Corporation to test advanced methods of brainwashing and mind control. In a world of distrust, fear, and violence, your morals will be challenged, your endurance tested, and your sanity crushed. All in the name of progress, science, and profit.SURVIVE: SOLO OR COOPYou’re all prisoners of Murkoff trapped inside their facility. You can choose to complete the trials by yourself or you can tackle them in a team of 2, 3, or 4 players.Coop is never forced when it comes to mandatory objectives but working together can be highly beneficial.Whatever the number of players in your party, it’s about surviving and getting out.Ultimately, your goal is to complete Murkoff's therapy and earn the right to be released back into society.  In order to do so, you must complete the Trials and the MK-Challenges.  Trials are immersive story driven therapies that take a certain time to complete.  Mk-Challenges are shorter therapies occurring in modified or redesigned section of an existing map.HIDE OR FLIGHTIn pure Outlast fashion, the core gameplay involves avoiding enemies, hiding from them, and trying to run away. Murkoff will provide tools you can use to increase your stealth capabilities. ",
      price: 20.0,
      offer: 0,
      img: "outlast.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "outlast2.jpg",
      video: "https://cdn.akamai.steamstatic.com/steam/apps/1304930/header.jpg?t=1684452998",
      metacritic: 82,
      age: 0,
    },

    {
      name: "Sons of the Forest",

      description:
        "An entirely new experience from the makers of the ‘The Forest’Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.A Survival Horror SimulatorExperience complete freedom to tackle the world how you want. You decide what you do, where to go and how best to survive. There are no NPC's barking orders at you or giving you missions you don't want to do. You give the orders, you choose what happens next.Fight DemonsEnter a world where nowhere is safe and fight against a range of mutated creatures, some who are almost human like, and others who are like nothing you have ever seen before. Armed with pistols, axes, stun batons and more, protect yourself and those you care for.Build and CraftFeel every interaction; Break sticks to make fires. Use an axe to cut out windows and floors. Build a small cabin, or a sea-side compound, the choice is yours.Changing SeasonsPluck fresh salmon directly from streams in spring and summer. Collect and store meat for the cold winter months. You're not alone on this island, so as winter rolls in and food and resources become scarce you won't be the only one looking for a meal.Co-op GameplaySurvive alone, or with friends. Share items and work together to build defenses. Bring back-up to explore above and below ground.",
      price: 19.99,
      offer: 0,
      img: "sonsoftheforest.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "sonsoftheforest2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256932123/movie_max_vp9.webm?t=1677175226",
      metacritic: 82,
      age: 17,
    },
    {
      name: "Dead Space",
      description:
        "Dead Space is a 2008 survival horror game developed by EA Redwood Shores and published by Electronic Arts. It was released for PlayStation 3, Xbox 360, and Microsoft Windows as the debut entry in the Dead Space series. Set on a mining spaceship overrun by deadly monsters called Necromorphs following the discovery of an artifact called the Marker, the player controls engineer Isaac Clarke as he navigates the spaceship and fights the Necromorphs while struggling with growing psychosis. Gameplay has Isaac exploring different areas through its narrative, solving environmental puzzles and finding ammunition and equipment to survive.",
      price: 10.0,
      offer: 0,
      img: "deadspace.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "deadspace2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256927035/movie_max_vp9.webm?t=1674835402",
      metacritic: 87,
      age: 17,
    },

    {
      name: "Resident Evil 4",
      description:
        "Resident Evil 4[b] is a survival horror game by Capcom, originally released for the GameCube in 2005. Players control the special agent Leon S. Kennedy on a mission to rescue the US president's daughter, Ashley Graham, who has been kidnapped by a religious cult in rural Spain. Leon fights hordes of enemies infected by a mind-controlling parasite and reunites with the spy Ada Wong. In a departure from the fixed camera angles and slower gameplay of previous Resident Evil games, Resident Evil 4 features a dynamic camera system and action-oriented gameplay.Development on Resident Evil 4 began for the PlayStation 2 in 1999. Four proposed versions were discarded; the first was directed by Hideki Kamiya, but series creator Shinji Mikami felt it was too great a departure from the previous games, so it was spun off as Devil May Cry (2001). Other versions were scrapped until Mikami took directorial duties for what became the final version. The game was announced as part of the Capcom Five, a collaboration between Capcom and Nintendo to create five exclusives for the GameCube.",
      price: 55.0,
      offer: 0,
      img: "residentev4.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "residentev42.jpg",
      video: "https://www.youtube.com/watch?v=O75Ip4o1bs8",
      metacritic: 90,
      age: 0,
    },

    {
      name: "The Devils Face",
      description:
        "The Devil's Face is based on the beliefs of an existing pagan sect and the The Book of Demons accounts of the afterlife. It is aimed at players who want to experience a horror game with a deeper meaning. This game may trigger seizures in individuals with photosensitive epilepsy. Before midnight, lock yourself in the bathroom and turn off the lights. Next, stand in front of the mirror and light the twelve black candles. Finally, close your eyes and keep them close until the clock strikes midnight. Open your eyes and you will see the face of the devil in the mirror.",
      price: 3.5,
      offer: 0,
      img: "devilface.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "devilface2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256969687/movie_max_vp9.webm?t=1694729617",
      metacritic: 54,
      age: 0,
    },

    {
      name: "Project Nightmares",
      description:
        "Get thrown into a living nightmare and explore the past of Henrietta Kedward in this terrifying and ever-changing survival horror filled with bone-chilling visuals.Project Nightmares is a group of scientists who dedicated themselves to studying the paranormal. As the regular means of analysis proved too limited to properly investigate the nature of these extra-natural phenomena, they devised a new means of examination. Using a device of their design, they are able to induce telepathically-gifted patients into a dream state, and connect their minds to a cursed or malignant object, allowing them to investigate their history and put a stop to the evil they embody. You are one of those patients.In the first installment of the game, you will play through the case of Henrietta Kedward. You’ll be able to connect with this malicious old woman through a malignant toy with a dark past and soon you’ll find yourself in a nightmare set during her lifetime, surrounded by terror and mystery.",

      price: 15.0,
      offer: 0,
      img: "nightmares.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "nightmares2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256853365/movie_max_vp9.webm?t=1632794276",
      metacritic: 57,
      age: 0,
    },

    {
      name: "Ebola III",

      description:
        "The further you dive into this mysterious adventure, the more you learn about the shocking events, that happened in David's life, and the clinic on Brut Street.The plot develops rapidly and merges you into a mystical and dangerous story written in all the best traditions of the Survival Horror genre.Throughout the game, you'll visit many dark and atmospheric locations, solve various puzzles, fight various enemies and make different decisions along the way.",
      price: 12.0,
      offer: 0,
      img: "ebola.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "ebola2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256874038/movie_max_vp9.webm?t=1673038983",
      metacritic: 81,
      age: 0,
    },

    {
      name: "Song of Horror",
      description:
        "The story begins with the vanishing of acclaimed writer, Sebastian P. Husher, along with his family. Worried, his editor sends an assistant to investigate, only for said assistant to also vanish. What follows is a chain of events that lead to the discovery of a horrible, incomprehensible being simply known as The Presence that seems to be behind it all. The key hook is that The Presence is also an A.I. that creates dynamic events as your progress throughout the episodes, changing your playthrough depending on how well or poorly you are doing, along with a variety of other factors. Along with this, the game features permadeath where, if one of your characters die, you can continue with another playable character. Currently, the game features eleven different characters playable throughout four episodes, with more coming on the way.",

      price: 25.0,
      offer: 0,
      img: "songofhorror.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "songofhorror2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256824578/movie_max_vp9.webm?t=1614883020",
      metacritic: 90,
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

  console.log("[Database] gameTerror Seeder");
}

module.exports = gameTerrorSeeder;
