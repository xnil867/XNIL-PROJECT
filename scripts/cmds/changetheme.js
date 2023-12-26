module.exports = {
  config: {
    name: "changetheme",
    aliases: ["ct"],
    version: "1.0",
    author: "GoatAI by LiANE",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Change the theme of the bot",
      tl: "Baguhin ang tema ng bot"
    },
    longDescription: {
      en: "Change the theme of the bot to a specific color",
      tl: "Baguhin ang tema ng bot sa isang tiyak na kulay"
    },
    category: "goatBot",
    guide: {
      en: "{p}changetheme <color>",
      tl: "{p}changetheme <kulay>"
    }
  },

  onStart: async function ({ event, message, args, threadsData, usersData, api }) {
    const color = args[0]; // Get the color argument from the user

    // Check if the color argument is valid
    if (!color) {
      message.reply("Please specify a color to change the theme to."); // Send an error message if no color is specified
      return;
    }

    // Store the color in the bot's data
    await threadsData.set(event.threadID, {
      themeColor: color
    });

    message.reply(`The theme color has been changed to ${color}.`); // Send a success message
  }
}