require("dotenv").config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");

const nombreSacarJuegos = [
  "primer-juego",
  "segundo-juego",
  "tercer-juego",
  "cuarto-juego",
  "quinto-juego",
  "sexto-juego",
  "séptimo-juego",
  "octavo-juego",
  "noveno-juego",
  "décimo-juego",
];

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
    /*General de mensajes
      El primer id es el mío, el segundo es el de Elena
      <@367216927254380545> este formato para pinguear
      */

    //mensaje te amo
  } else if (message.content.toLowerCase().includes("te amo")) {
    if (message.author.id == "367216927254380545") {
      message.channel.send("Es cierto, te ama muchisisisisisimo ");
    } else if (message.author.id == "328241207878615041") {
      message.channel.send("Orlito te ama mucho más <3");
    }

    //mensaje yo mas
  } else if (
    message.content.toLowerCase().includes("yo mas") ||
    message.content.toLowerCase().includes("yo más")
  ) {
    if (message.author.id == "367216927254380545") {
      message.channel.send("Exacto, Orlito te ama más");
    } else if (message.author.id == "328241207878615041") {
      message.channel.send("No es posible, Orlito te ama mucho más <3");
    }

    //mensae nuh uh
  } else if (message.content.toLowerCase().includes("nuh uh")) {
    if (message.author.id == "367216927254380545") {
      message.channel.send("ESO ESO, NUH UH");
    } else if (message.author.id == "328241207878615041") {
      message.channel.send("YUH UH");
    }

    //mensaje yuh uh
  } else if (message.content.toLowerCase().includes("yuh uh")) {
    if (message.author.id == "367216927254380545") {
      message.channel.send("ESO ESO, YUH UH");
    } else if (message.author.id == "328241207878615041") {
      message.channel.send("NUH UH");
    }
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "que-jugamos") {
    const juego = seleccionarJuego(interaction);

    interaction.reply(`Jugaremos a ${juego}!`);
  } else if (interaction.commandName === "te-amo") {
    const gif = getRandomGif();

    if (interaction.user.id === "367216927254380545") {
      interaction.reply({ content: 'Mensaje enviado uwu!', ephemeral: true });
      interaction.channel.send({content: "<@328241207878615041>, Orlito te ama muchísimo", files: [gif]});
    } else if (interaction.user.id === "328241207878615041") {
      
      interaction.reply({ content: 'Mensaje enviado uwu!', ephemeral: true });
      interaction.channel.send({content: "<@367216927254380545>, Mangle te ama muchísimo", files: [gif]});
    }
  }
});

function getRandomGif() {
  const gifs = [
    "./assets/gifs/1.gif",
    "./assets/gifs/2.gif",
    "./assets/gifs/3.gif",
    "./assets/gifs/4.gif",
    "./assets/gifs/5.gif",
    "./assets/gifs/6.gif",
    "./assets/gifs/7.gif",
    "./assets/gifs/8.gif",
    "./assets/gifs/9.gif",
    "./assets/gifs/10.gif",
    "./assets/gifs/11.gif",
    "./assets/gifs/12.gif",
    "./assets/gifs/13.gif",
    "./assets/gifs/14.gif",
    "./assets/gifs/15.gif",
    "./assets/gifs/16.gif",
    "./assets/gifs/17.gif",
    "./assets/gifs/18.gif",
    "./assets/gifs/19.gif",
    "./assets/gifs/20.gif",
  ];

  return gifs[Math.floor(Math.random() * gifs.length)];
}

function seleccionarJuego(interaction) {
  let juegosSeleccionados = [];

  nombreSacarJuegos.forEach((juego) => {
    if (interaction.options.get(juego)) {
      juegosSeleccionados.push(interaction.options.get(juego).value);
    }
  });

  return juegosSeleccionados[
    Math.floor(Math.random() * juegosSeleccionados.length)
  ];
}


client.login(process.env.TOKEN);
