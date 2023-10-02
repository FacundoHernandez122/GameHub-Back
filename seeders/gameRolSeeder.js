const Category = require("../models/Category");
const Game = require("../models/Game");
const slugify = require("slugify");

async function gameRolSeeder() {
  const category = await Category.findOne({ name: "Rol" });
  const categoryId = category._id;
  const games = [
    {
      name: "Starfield",
      description:
        "Starfield is an action role-playing video game. The player can switch between a first-person and third-person perspective any time. Starfield features an open world in the form of an area within the Milky Way galaxy, containing both fictional and non-fictional planetary systems. The player is able to land on more than 1,000 planets and an unspecified number of moons and space stations. The majority of the landscapes within the game were procedurally generated; they were subsequently modified and handcrafted content was developed around them. The game generates the terrain and the alien flora and fauna of a planet depending on the star of its system and its atmosphere, as well as locations of interest as the player approaches a planet.[6] The largest city in the game, New Atlantis, is the largest fictional city Bethesda has developed.[7] As the player explores the game world, they encounter various non-playable characters (NPCs), some of whom may join the player's crew. Such NPCs may aid the player in combat, carry items, or during confrontations, speak to other NPCs on the player's behalf. ",
      price: 56.0,
      offer: 0.0,
      img: "starfield.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "starfield2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256954143/movie_max_vp9.webm?t=1687290088",
      metacritic: 90,
      age: 17,
    },

    {
      name: "Guild Wars 2",
      description:
        "Guild Wars 2 is a free-to-play, massively multiplayer online role-playing game developed by ArenaNet and published by NCSoft. Set in the fantasy world of Tyria, the core game follows the re-emergence of Destiny's Edge, a disbanded guild dedicated to fighting Elder Dragons, colossal Lovecraftian-esque entities that have seized control of Tyria in the time since the original Guild Wars (2005), a plot line that was concluded in the latest expansion Guild Wars 2: Secrets of the obscure'' (2023). The game takes place in a persistent world with a story that progresses in instanced environments",
      price: 10.0,
      offer: 0.0,
      img: "guildwars.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "guildwars2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256902263/movie_max_vp9.webm?t=1661279391",
      metacritic: 90,
      age: 0,
    },
    {
      name: "Horizon Zero Dawn",
      description:
        "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The game was released for PlayStation 4 in 2017 and Windows in 2020. Horizon Zero Dawn is the first game of the Horizon video game series. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past. The player uses ranged weapons, a spear, and stealth to combat mechanical creatures and other enemy forces. A skill tree provides the player with new abilities and bonuses. The player can explore the open world to discover locations and take on side quests.",

      price: 77.0,
      offer: 0.0,
      img: "horizon.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "horizon2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256899640/movie_max_vp9.webm?t=1659711061",
      metacritic: 88,
      age: 0,
    },

    {
      name: "Lost Ark",
      description:
        "Lost Ark is primarily focused on player versus environment (PvE) and exploration (questing, achievement/collectible hunting, crafting, etc.). It features player versus player (PvP) elements as well. Players start by customizing their character which they can then level up by completing the storyline. Reaching level 50 unlocks access to tiered endgame dungeons and raids, at which point most further progress is tied to the character's gear score.",
      price: 50.0,
      offer: 0.0,
      img: "lostark.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "lostark2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256873070/movie_max_vp9.webm?t=1678209495",
      metacritic: 90,
      age: 0,
    },

    {
      name: "Hogwarts Legacy",
      description:
        "Hogwarts Legacy is a 2023 action role-playing game developed by Avalanche Software and published by Warner Bros. Games under its Portkey Games label. The game, part of the Wizarding World franchise, takes place in the late 1800s, a century prior to the events chronicled in the Harry Potter novels. The player controls a student enrolled in the Hogwarts School of Witchcraft and Wizardry who learns to wield an array of magical abilities and objects. With the assistance of fellow students and professors, the protagonist embarks on a journey to unearth an ancient secret concealed within the wizarding world.Following their acquisition by Warner Bros. in 2017, Hogwarts Legacy marks the first release from Avalanche unrelated to Disney Interactive Studios and its products. The game's development commenced in 2018, while pre-release gameplay footage was leaked onto the internet in the same year. The storyline was crafted to unfold in a period untouched by established Wizarding World characters, offering players the opportunity to immerse themselves in their own distinct universe. Avalanche Software emphasised that while their rendition of Hogwarts is their own interpretation, it had been carefully designed to maintain a sense of familiarity and recognition.",
      price: 80.0,
      offer: 0.0,
      img: "hog.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "hog2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256930504/movie_max_vp9.webm?t=1676412591",
      metacritic: 90,
      age: 0,
    },
    {
      name: "Destiny 2",
      description:
        "Destiny 2 is a online first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for PlayStation 4, Xbox One, and Windows. It became free-to-play, utilizing the games as a service model, under the New Light title on October 1, 2019, followed by the game's release on Stadia the following month, and then PlayStation 5 and Xbox Series X/S platforms in December 2020. The game was published by Activision until December 31, 2018, when Bungie acquired the publishing rights to the franchise. It is the sequel to 2014's Destiny and its subsequent expansions.Set in a world, the game features a multiplayer environment with elements of role-playing games. Like the original, activities in Destiny 2 are divided among player versus environment (PvE) and player versus player (PvP) game types. In addition to normal story missions, PvE features three-player and dungeons and six-player raids. ",
      price: 70.0,
      offer: 0.0,
      img: "destiny2.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "destiny2.2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256965313/movie_max_vp9.webm?t=1692740707",
      metacritic: 83,
      age: 0,
    },
    {
      name: "Divinity Original Sin",
      description:
        "Divinity: Original Sin is a role-playing video game developed and published by Larian Studios. The fourth main entry in the Divinity game series, it is a prequel to the original game Divine Divinity, and to the other main games in the series. It was first released on Microsoft Windows on 30 June 2014. Partially funded through Kickstarter, the game ships with the editor that created it, allowing players to create their own single player and multiplayer adventures and publish them online.[4] A re-release titled Divinity: Original Sin - Enhanced Edition, featuring an expanded storyline and new gameplay options, was released on Microsoft Windows, PlayStation 4, Xbox One, Linux, and OS X in 2015. The game received acclaim from critics, with many praising its ability to modernize the RPG genre. A sequel, Divinity: Original Sin II, was released in 2017.",
      price: 48.0,
      offer: 0.0,
      img: "divinityOriginal.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "divinityOriginal2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2033534/movie_max.webm?t=1447362778",
      metacritic: 87,
      age: 0,
    },

    {
      name: "Remnant From the Ashes",
      description:
        "Remnant: From the Ashes borrows its mechanics from franchises such as the Dark Souls series, but rather than simply being melee combat, it incorporates a third-person shooter element where the player can wield up to two gun weapons, one main weapon and one side arm, alongside their melee weapon. These weapons can vary between machine guns, shotguns, hunting rifles, sniper rifles and the like, and can also attach mods to them which give players extra abilities, such as teleportation. Players can create their own custom character, and are required to defeat challenging enemies and bosses found throughout a randomly generated world, though the player still follows a set story. Players are able to upgrade their weapons and armor using materials they find throughout the world. They can also unlock trait points, which can be used to increase the stats of their playable character.",
      price: 45.0,
      offer: 0.0,
      img: "remnant.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "remnant2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256747605/movie_max.webm?t=1554857990",
      metacritic: 78,
      age: 18,
    },

    {
      name: "Baldurs Gate 3",
      description:
        "Baldur's Gate 3 is a role-playing video game developed and published by Larian Studios. It is the third main game in the Baldur's Gate series, which is based on the Dungeons & Dragons tabletop role-playing system. A partial version of the game was released in early access format for macOS, Windows, and the Stadia streaming service, on 6 October 2020. The game remained in early access until its full release on Windows on 3 August 2023. The PlayStation 5 version was released on 6 September 2023,[a] macOS version is scheduled for release on 21 September 2023,[b] and the Xbox Series X/S version is planned for 2023.Baldur's Gate 3 was acclaimed by critics, who praised the gameplay, narrative, amount of content, and player choice..",
      price: 55.0,
      offer: 0.0,
      img: "Baldur.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "baldur2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256961600/movie_max_vp9.webm?t=1692294103",
      metacritic: 96,
      age: 17,
    },
    {
      name: "Wartales",
      description:
        "A century has passed since the fall of the Edoran Empire at the hands of an unprecedented plague that swept the nation. Now, the land is rife with mercenary work, banditry and thievery, with honor having become an almost entirely forgotten virtue.Now, prepare to lead a group of unscrupulous characters in a massive open world where combat, death and a thirst for riches will dictate your day to day life. You are not the hero of this story, destined to usher in a new era of peace. Your goal is solely to survive and thrive in this harsh and hostile world, by any means necessary.Only the bravest and most ambitious can hope to see their story written in the Wartales!",
      price: 55.0,
      offer: 0.0,
      img: "wartales.jpg",
      stock: 2,
      trending: false,
      category: categoryId,
      img2: "wartales2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256940103/movie_max_vp9.webm?t=1686821004",
      metacritic: 80,
      age: 17,
    },

    {
      name: "Pillars of Eternity II Deadfire",
      description:
        "Pillars of Eternity II: Deadfire is a role-playing video game that is played from an isometric perspective.Both returning and new companions are available, depending upon the choices made by the player, which play an optional story role within the game. Deadfire focuses on seafaring and island exploration via a ship. Crews can also be hired to look over them and assist in ship combat. Class based gameplay returns, with each class having at least four optional sub-classes with unique skills. A new feature in Deadfire compared to the original are sub-classes.",
      price: 40.0,
      offer: 0.0,
      img: "deadfire.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "pillarsOfEt2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2039878/movie_max.mp4?t=1447375841",
      metacritic: 89,
      age: 17,
    },

    {
      name: "Wasteland Remastered",
      description:
        "For the first time in over 20 years, we are heralding the return of a much loved piece of gaming history with the classic RPG, Wasteland!Mutants. Again. Even more than there were last time: they seem to materialize out of the very grains of the radioactive desert sand. Venomous yellow eyes. The black gunmetal glint of Uzis as they close in for the kill. There's nowhere to run, and nothing to rely on but your MAC 17 machine gun. What a way to save the human race.The year is 2087, eighty-nine years after an all out nuclear war between the United States and the Soviet Union turned vast swaths of the Earth into a hellish wasteland where survival is a daily struggle against thirst, hunger, radiation sickness, ravaging raiders, and mutants - always mutants. You are a Desert Ranger, one of a band of stalwart lawmen born from the remnants of a U.S. Army detachment who survived the nuclear holocaust by holing up in a maximum security prison. You may wear ragtag uniforms and carry make-shift weapons, but the Desert Rangers are the only law left in what was once the American southwest. Now something more secretive and sinister than the usual roving bands of mutants and raiders is menacing humanity, and it's your job to investigate. Recruit the help you need, follow any leads you find, but beware. ",
      price: 50.0,
      offer: 0.0,
      img: "wastelandRemastered.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "wastelandRemastered2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/2031044/movie_max.webm?t=1447360519",
      metacritic: 89,
      age: 0,
    },

    {
      name: "Wasteland II",
      description:
        "From the Producer of the original Fallout comes Wasteland 2, the sequel to the first-ever post-apocalyptic computer RPG.<br><br>The Wasteland's hellish landscape is waiting for you to make your mark... or die trying. With over 80 hours of gameplay, you will deck out your Desert Ranger squad with the most devastating weaponry this side of the fallout zone, test the limits of your strategy skills, and bring justice to the wasteland. One Size Does Not Fit All: Don't feel like finding the key for a door? Pick the lock, bash it down with your boot, or just blow it open!Decision Making... with Consequences With both short and long term reactivity, your choices ripple outwards, changing the game's events and forever altering the lives of those in the wasteland.<strong>Huge &amp; Customizable: Hundreds of characters. Thousands of variations on your Rangers' appearance. Over 150 weapons. No two players will have the same experience.Steam Features: Wasteland 2 supports Cloud Saving so you can sync your saves across multiple computers! Complete Graphics Overhaul: Rebuilt in Unity 5, Wasteland 2's environments and characters have been updated to take advantage of the latest graphics technologies.<br></li><li><strong>Perks &amp;: Quirks: Customize your squad even more! Perks &amp; Quirks are special personality traits you can use to give your characters even more life, with their own unique bonuses... and drawbacks.Precision Strikes: Fire on your enemies and debilitate them with tactical attacks! Cripple a leg to slow an enemy down, fire on their gun to blast it to bits, or aim for the head to knock them senseless – or blow it clean off.",
      price: 50.0,
      offer: 0.0,
      img: "wasteland2.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "wasteland2.2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256951533/movie_max_vp9.webm?t=1686191388",
      metacritic: 89,
      age: 0,
    },

    {
      name: "STAR WARS The Old Republic",
      description:
        "Star Wars: The Old Republic is a massively multiplayer online role-playing game (MMORPG) based in the Star Wars universe.[3][4] Developed by BioWare Austin and a supplemental team at BioWare Edmonton, the game was announced on October 21, 2008.[5] The video game was released for the Microsoft Windows platform on December 20, 2011 in North America and part of Europe.[6][7][8][9] It was released in Oceania and Asia on March 1, 2012.This story takes place in the Star Wars universe shortly after the establishment of a tenuous peace between the re-emergent Sith Empire and the Galactic Republic. The game features eight different classes. Each of the eight classes has a three act storyline that progresses as the character levels up. Players join either the Republic or the Sith, but players may possess a morality at any point along the light/dark spectrum. Different classes favor different styles of gameplay, ",
      price: 41.0,
      offer: 0.0,
      img: "starwars.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "starwars2.jpg",
      video:
        "http://cdn.akamai.steamstatic.com/steam/apps/256792746/movie_max_vp9.webm?t=1644940963",
      metacritic: 85,
      age: 0,
    },

    {
      name: "STAR WARS Jedi Fallen Order",
      description:
        "Star Wars Jedi: Fallen Order is a 2019 action-adventure game developed by Respawn Entertainment and published by Electronic Arts. The story is set in the Star Wars universe, five years after Star Wars: Episode III – Revenge of the Sith. It follows Jedi Padawan Cal Kestis, who becomes a target of the Galactic Empire and is hunted throughout the galaxy by the Imperial Inquisitors while attempting to complete his training, reconcile with his troubled past, and rebuild the fallen Jedi Order. The player can use Kestis' lightsaber and Force powers to defeat enemies, including stormtroopers, wild beasts and bounty hunters. The game adopts a Metroidvania style of level design where new areas are accessed as Cal unlocks skills and abilities.",
      price: 41.0,
      offer: 0.0,
      img: "jedi.jpg",
      stock: 100,
      trending: false,
      category: categoryId,
      img2: "jedi2.jpg",
      video: "http://cdn.akamai.steamstatic.com/steam/apps/256765709/movie_max.webm?t=1572357561",
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

  console.log("[Database] gameRol Seeder");
}

module.exports = gameRolSeeder;
