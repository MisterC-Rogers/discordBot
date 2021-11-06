const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sim-join")
    .setDescription("simulate a member joining"),

  async execute(client, message) {
    client.emit("guildMemberAdd", message.member);
  },
};
