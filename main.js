const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// const mongo = require("./mongo");

const getCommand = require("./util/getCommand");

client.once("ready", async () => {
  //   await mongo().then((mongoose) => {
  //     try {
  //       console.log("Connected to MongoDB!");
  //     } finally {
  //       mongoose.connection.close();
  //     }
  //   });
  client.user.setActivity(`${config.prefix}help`, { type: "LISTENING" }).catch(console.error);
  console.log("Bot is Online!");
  
  client
  .generateInvite({
    permissions: [
      "SEND_MESSAGES",
      "ADD_REACTIONS",
      "EMBED_LINKS",
      "VIEW_CHANNEL",
      "MENTION_EVERYONE",
    ],
  })
  .then((link) => {
    console.log(`Bot invite link: ${link}`);
  })
  .catch(console.error);
});

client.on("message", async (message) => {
  if (
    !message.content.startsWith(config.prefix) ||
    message.author.bot ||
    message.channel.type === "dm"
  )
    return;
       
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  console.log(`Command: { --${command} ${args} }`);

  await getCommand(message, command, args);
});

client.login(config.token);
