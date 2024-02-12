require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: "mas-gay",
        description: "Dice quien es mas gay de los dos",
        options: [
            {
                name: "primera-persona",
                description: "La primera persona",
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: "Orlito",
                        value: "Orlito"
                    },
                    {
                        name: "Mangle",
                        value: "Mangle"
                    },
                    {
                        name: "Adri",
                        value: "Adri"
                    },
                    {
                        name: "Felu",
                        value: "Felu"
                    },
                    {
                        name: "Nat",
                        value: "Nat"
                    },
                    {
                        name: "Cabra",
                        value: "Cabra"
                    },
                    {
                        name: "Chara",
                        value: "Chara"
                    },
                    {
                        name: "Fell",
                        value: "Fell"
                    },
                    {
                        name: "Grace",
                        value: "Grace"
                    },
                    {
                        name: "Hielo",
                        value: "Hielo"
                    }
                ],
                required: true
            },
            {
                name: "segunda-persona",
                description: "La segunda persona",
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: "Orlito",
                        value: "Orlito",
                        gayLevel: 2
                    },
                    {
                        name: "Mangle",
                        value: "Mangle",
                        gayLevel: 3
                    },
                    {
                        name: "Adri",
                        value: "Adri"
                    },
                    {
                        name: "Felu",
                        value: "Felu"
                    },
                    {
                        name: "Nat",
                        value: "Nat"
                    },
                    {
                        name: "Cabra",
                        value: "Cabra"
                    },
                    {
                        name: "Chara",
                        value: "Chara"
                    },
                    {
                        name: "Fell",
                        value: "Fell"
                    },
                    {
                        name: "Grace",
                        value: "Grace"
                    },
                    {
                        name: "Hielo",
                        value: "Hielo"
                    }
                ],
                required: true
            }
        ]
    },
    {
        name: "gloglo",
        description: "Muestra los penes que se ha comido cabra"
    },
    {
        name: "embed",
        description: "Sends an embed"
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
        console.log(`There was an error: ${error}`)
    }
})();