require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const juegos = [
    {
        name: "Valorant",
        value: "Valorant"
    },
    {
        name: "League of legends",
        value: "League of legends"
    },
    {
        name: "Fortnite",
        value: "Fortnite"
    },
    {
        name: "Ver anime",
        value: "Ver anime"
    },
    {
        name: "Osu",
        value: "Osu"
    },
    {
        name: "Juego misterioso uwu",
        value: "Juego misterioso uwu"
    },
    {
        name: "Lethal company",
        value: "Lethal company"
    },
    {
        name: "Juego de miedo",
        value: "Juego de miedo"
    },
    {
        name: "Prueba o verdad",
        value: "Prueba o verdad"
    },
    {
        name: "el uno con el otro",
        value: "el uno con el otro"
    }
]

const commands = [
    {
        name: "que-jugamos",
        description: "Decido que juego jugar",
        options: [
            {
                name: "primer-juego",
                description: "El primer juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: true
            },
            {
                name: "segundo-juego",
                description: "El segundo juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: true
            },
            {
                name: "tercer-juego",
                description: "El tercer juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "cuarto-juego",
                description: "El cuarto juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "quinto-juego",
                description: "El quinto juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "sexto-juego",
                description: "El sexto juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "séptimo-juego",
                description: "El séptimo juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "octavo-juego",
                description: "El octavo juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "noveno-juego",
                description: "El noveno juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
            {
                name: "décimo-juego",
                description: "El décimo juego posible",
                type: ApplicationCommandOptionType.String,
                choices: juegos,
                required: false
            },
        ]
    },{
        name: "te-amo",
        description: "Exprésale a tu pareja lo mucho que la amas",
    }
];

const rest = new REST({ version: "10"}).setToken(process.env.TOKEN);

(async () => {
    try {

        console.log("registering slash commands.");
        
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log("slash commands registered successfully!");
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();