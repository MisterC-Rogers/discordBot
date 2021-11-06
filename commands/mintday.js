const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mintday")
    .setDescription("Replies with the day minting goes live."),
  async execute(interaction) {
    await interaction.reply({
      content: "November 17, 2021, Hope to see you there.",
      ephemeral: true,
    });
  },
};
