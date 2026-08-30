let documents = [
    {
        ID: 0,
        NAME: "Getting Started",
        DESCRIPTION: `Welcome to the MSM API Docs! :) <br> Here you will find documentation on how to <br> load all information about ANY monster. <br> Explore the documents on the left side panel for futher details and information! <br> <br> Also I like Epic Spunge, so it's here for the ride :)`,
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
]

/*

{
    ID: #,
    NAME: "",
    DESCRIPTION: `The method <code>MSM.name.</code>`,
    CAN_TRY: false
},

*/
