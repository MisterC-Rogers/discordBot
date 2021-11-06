const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const dotenv = require("dotenv");
dotenv.config();

const clientId = process.env.BOT_ID;
const guildId = process.env.GUILD_ID;

module.exports = (client) => {
  client.handleCommands = async (commandFiles) => {
    client.commandArray = [];

    for (const file of commandFiles) {
      const command = require(`../commands/${file}`);
      // Set a new item in the Collection
      // With the key as the command name and the value as the exported module
      client.commands.set(command.data.name, command);
      client.commandArray.push(command.data.toJSON());
    }

    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

    (async () => {
      try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
          body: client.commandArray,
        });

        console.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
