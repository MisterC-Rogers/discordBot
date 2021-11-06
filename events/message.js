module.exports = {
  name: "messageCreate",

  async execute(message) {
    let blacklisted = ["shit", "fuck", "damn", "gay", "fag", "bitch"];

    let foundInText = false;
    for (const i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
        foundInText = true;
    }

    if (foundInText) {
      message.reply({
        content: "CENSORED WORD",
      });

      setTimeout(() => {
        message.delete();
      }, 500);
    }
  },
};
