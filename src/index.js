require("dotenv").config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");

// const fs = require("node:fs");

// let pitosComidos = 0;

// fs.readFile("./assets/jsons/penesChupados.json", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   pitos = JSON.parse(data).penes;
//   pitosComidos = pitos;
// });

// const nivelGay = [
//   {
//     name: "Orlito",
//     gayLevel: 1,
//   },
//   {
//     name: "Mangle",
//     gayLevel: 2,
//   },
//   {
//     name: "Adri",
//     gayLevel: 5,
//   },
//   {
//     name: "Felu",
//     gayLevel: 10,
//   },
//   {
//     name: "Nat",
//     gayLevel: 3,
//   },
//   {
//     name: "Cabra",
//     gayLevel: 999999999999,
//   },
//   {
//     name: "Chara",
//     gayLevel: 6,
//   },
//   {
//     name: "Fell",
//     gayLevel: 20,
//   },
//   {
//     name: "Grace",
//     gayLevel: 4,
//   },
//   {
//     name: "Hielo",
//     gayLevel: 7,
//   },
// ];

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  } else if (message.content == "hola") {
    message.reply("Hola, soy un bot");
   }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "mas-gay") {
    

    interaction.reply(
      `La persona más gay entre ${persona1} y ${persona2} es... ${masGay}!!!!111!1!!!1!11!!`
    );
  } else if (interaction.commandName === "gloglo") {
    interaction.reply(`Cabra se ha comido ${++pitosComidos} pene(s)`);

  } else if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed title")
      .setDescription("This is a description")
      .setColor("Random");

    interaction.reply({ embeds: [embed] });
  }
});

// function buscarMasGay(persona1, persona2) {
//   const gayLevel1 = nivelGay.find((buscar) => {
//     return persona1 == buscar.name;
//   });

//   const gayLevel2 = nivelGay.find((buscar) => {
//     return persona2 == buscar.name;
//   });

//   return gayLevel1.gayLevel > gayLevel2.gayLevel
//     ? gayLevel1.name
//     : gayLevel2.name;
// }

client.login(process.env.TOKEN);
