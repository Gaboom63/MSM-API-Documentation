let documents = [
    {
        ID: 0,
        NAME: "Getting Started",
        DESCRIPTION: `Welcome to the MSM API Docs! :) <br> Here you will find documentation on how to <br> load all information about ANY monster. <br> Explore the documents on the left side panel for futher details and information! <br> <br> Also I like bb$enior, so it's here for the ride :)`,
        CAN_TRY: false
    },
    {
        ID: 1,
        NAME: "MSM.help()",
        DESCRIPTION: `The method <code>MSM.help()</code> is a simple and quick way to retrieve quick commands for your projects. For example, this method will give you commands to display monster images in your project. It also gives you the git repository link, the mode your browser is running the API, and gives you the API's current version number.`,
        CAN_TRY: false
    },
    {
        ID: 2,
        NAME: "MSM.name",
        DESCRIPTION: `The method <code>MSM.name</code> or <code>MSM["name"]</code> is a <b>essential </b> method that allow you to call any monster and return all of it's information at once. <br> The purpose of using <code>MSM["Name"]</code> vs just .name is so you can call monsters with more than one word or symbols in their name, <br> i.e Epic Mammott`,
        CAN_TRY: false
    },
    {
        ID: 3,
        NAME: "MSM.name.loadImage()",
        DESCRIPTION: `The method <code>MSM.name.loadImage("containerID")</code> allows you to load any monster's image onto a specified image container via it's ID. <br><br> Click the "Try Command" button below to load Epic Astopod, or a monster of your choosing! Type in a name! <input id="loadInput" style="text-align: center; background-color: black; color: white;">`,
        CAN_TRY: true,
        COMMAND: "MSM['Epic Astropod'].loadImage('drawImg')"
    },
    {
        ID: 4,
        NAME: "MSM.name.rarity",
        DESCRIPTION: `The method <code>MSM.name.rarity</code> allows you to retireve a specific monster's rarity, <br> i.e Common, Rare, Epic, Legendary, etc. <br><br> One use for this is sorting and categorizing all monsters by rarity all at once if you wanted to!`,
        CAN_TRY: false
    },
    {
        ID: 5,
        NAME: "MSM.name.description()",
        DESCRIPTION: `The function <code>MSM.name.description()</code> is used to retrieve the description of the specified monster! <br> <br> Press the button below to get the description of Epic Brump!`,
        CAN_TRY: true,
        COMMAND: "MSM['Epic Brump'].description()"
    },
    {
        ID: 6,
        NAME: "MSM.name.costs",
        DESCRIPTION: `The method <code>MSM.name.costs</code> is used to retrieve all costs of a monsters across all the islands its available on.`,
        CAN_TRY: false
    },
    {
        ID: 7,
        NAME: "MSM.name.cost",
        DESCRIPTION: `The method <code>MSM.name.cost</code> returns the main cost of a monster that spans across multiple islands. For example, if you want the cost of Mammott, it would return 300 Coins since that is the most common price across all islands for it.`,
        CAN_TRY: false
    },
    {
        ID: 8,
        NAME: "MSM.name.imageUrl",
        DESCRIPTION: `The method <code>MSM.name.imageUrl</code> allows you to get the image path of any monster. <br> <br> For example, MSM.Mammott.imageUrl would return the CDN link for its image.<br> <br> Try Below!`,
        CAN_TRY: true,
        COMMAND: "MSM.Mammott.imageUrl"
    },
    {
        ID: 9,
        NAME: "MSM.name.eggUrl",
        DESCRIPTION: `The method <code>MSM.name.eggUrl</code> allows you to retrieve the specified monsters egg image!`,
        CAN_TRY: false
    },
    {
        ID: 10,
        NAME: "MSM.name.elements",
        DESCRIPTION: `The method <code>MSM.name.elements</code> returns an array of that monsters elements! <br> <br> For example: MSM.Spunge.elements would return ["Air","Plant","Water"] <br> <br> Try Below!`,
        CAN_TRY: true,
        COMMAND: "MSM.Spunge.elements"
    },
    {
        ID: 11,
        NAME: "MSM.name.elementsResolved",
        DESCRIPTION: `The method <code>MSM.name.elementsResolved</code> is a similar method to <code>MSM.name.elements</code>. <br><br> The Difference between the two is this method returns both the name of the element(s) as well as giving you the image for each!`,
        CAN_TRY: false
    },
    {
        ID: 12,
        NAME: "MSM.name.islands",
        DESCRIPTION: `The method <code>MSM.name.islands</code> allows you to retrieve the island(s) that a monster is on. <br><br> Try Below!`,
        CAN_TRY: true,
        COMMAND: "MSM[`Rare X'rt`].islands"
    },
    {
        ID: 13,
        NAME: "MSM.name.inventory",
        DESCRIPTION: `The method <code>MSM.name.inventory</code> is for monsters with inventories like Wublins and Celstials! <br><br> This method will return the cost of the / upgrade cost, its power up time limit, as well as its entire inventory!`,
        CAN_TRY: false
    },
    {
        ID: 14,
        NAME: "MSM.name.likes",
        DESCRIPTION: `The method <code>MSM.name.likes</code> allows you to retrieve all of the likes of the specified monster across all islands! <br><br> (Including the secret like! :) )`,
        CAN_TRY: false
    },
    {
        ID: 15,
        NAME: "MSM.name.costumes",
        DESCRIPTION: `The method <code>MSM.name.costumes</code> returns all the costume image URL's for the specified monster! This gets updated pretty regularly, but may be inconsistant at times due to images not being high enough quality for me to want to add it yet.`,
        CAN_TRY: false
    },
    {
        ID: 16,
        NAME: "MSM.name._costumeIndex",
        DESCRIPTION: `The method <code>MSM.name._costumeIndex</code> is a very simple method. All it does is return the amount of costumes a specific monster has!`,
        CAN_TRY: false
    },
    {
        ID: 17,
        NAME: "MSM.name.sounds",
        DESCRIPTION: `The method <code>MSM.name.sounds</code> returns all of the sounds for a specific monster. Similarly to the costumes, if there is not a high quality sound avaliable for the monster at the time of release, the API may not contain it due to me wanting the best quality things possible for this API!`,
        CAN_TRY: false
    },
    {
        ID: 18,
        NAME: "MSM.name.breedingTimes",
        DESCRIPTION: `The method <code>MSM.name.breedingTimes</code> is my personal favorite method! This method allows you to retrieve the breedingTimes of a specific monster! The times include: Standard, Enhanced, Skin Standard, Skin Enhanced. If a monster does not have one of these attributes, it will just not be in the array!`,
        CAN_TRY: false
    },
    {
        ID: 19,
        NAME: "MSM.name.getCostume()",
        DESCRIPTION: `The function <code>MSM.name.getCostume()</code> allows you to parse in what costume index you want to retrieve. For example, if you want the first costume of Mammott, you would parse 1 in getCostume(1)`,
        CAN_TRY: false
    },
    {
        ID: 20,
        NAME: "MSM.name.nextCostume()",
        DESCRIPTION: `The function <code>MSM.name.nextCostume()</code> starts your costume index at 0, and every time you run it, it will increase by 1 until you've reached the last of the costumes, which then it will loop back to 0!`,
        CAN_TRY: false
    },
    {
        ID: 21,
        NAME: "MSM.name.resetCostumes()",
        DESCRIPTION: `The function <code>MSM.name.resetCostumes()</code> retreives the base monster image of a monster. This is useful if you are going from a random index of costume indexs, and you want to reset the index to 0 and reset the monster back to its base image!`,
        CAN_TRY: false
    },
    {
        ID: 22,
        NAME: "MSM.name.isOnIsland()",
        DESCRIPTION: `The function <code>MSM.name.isOnIsland()</code> returns either "name is on this island!" or "name is not on this island!". To get this function to work, you must parse in the name of the island into the function. <br><br> For example: MSM.Mammott.isOnIsland("plant") would return: "Mammott is on this island!"`,
        CAN_TRY: false
    },
    {
        ID: 23,
        NAME: "MSM.name.getBreedingCombos()",
        DESCRIPTION: `The function <code>MSM.name.getBreedingCombos()</code> allows you to retrieve all the breeding combinations that is used in breeding that monster!`,
        CAN_TRY: false
    },
    {
        ID: 24,
        NAME: "MSM.name.getStatistics()",
        DESCRIPTION: `The function <code>MSM.name.getStatistics()</code> allows you to get the following information about a monster: It's Name, All of it's costs across all islands, Its rarity, and its description!`,
        CAN_TRY: false
    },
    {
        ID: 25,
        NAME: "MSM.name.playSound()",
        DESCRIPTION: `The function <code>MSM.name.playSound()</code> allows you to play any of the audios that belong to the specified monster. Mammott has two sounds, so you can run both playSound(0), and playSound(1) to get two different sounds!`,
        CAN_TRY: false
    },
    {
        ID: 26,
        NAME: "MSM.getDofMonster()",
        DESCRIPTION: `The function <code>MSM.getDofMonster()</code> takes in the names of any monster (Case sensitive) from MSM Dawn Of Fire! This function returns the name of the monster, all prismatic images associated with that monster, and its breeding time!`,
        CAN_TRY: false
    },
    {
        ID: 27,
        NAME: "MSM.fetchIslands()",
        DESCRIPTION: `The function <code>MSM.fetchIslands()</code> is a simple function that just returns all the names of each island!`,
        CAN_TRY: false
    },
    {
        ID: 27,
        NAME: "MSM.fetchIsland()",
        DESCRIPTION: `The function <code>MSM.fetchIsland()</code> takes in the name of any island. This will return the amount of monsters on that island, the image for the island and it's skins, as well as having an array of all the monsters on it!`,
        CAN_TRY: false
    },
]
/*

{
    ID: #,
    NAME: "",
    DESCRIPTION: `The function <code>MSM.name.</code>`,
    CAN_TRY: false
},

*/
