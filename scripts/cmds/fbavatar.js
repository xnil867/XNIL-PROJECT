module.exports = {
  config: {
    name: "fbavatar",
    aliases: ["fa"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get the profile picture of a Facebook user",
      tl: "Kunin ang profile picture ng isang Facebook user"
    },
    longDescription: {
      en: "This command allows you to get the profile picture of a Facebook user.",
      tl: "Ang command na ito ay nagbibigay-daan sa iyo na kunin ang profile picture ng isang Facebook user."
    },
    category: "goatBot",
    guide: {
      en: "{p}fbavatar <user_id>",
      tl: "{p}fbavatar <user_id>"
    },
  },

  onStart: async function({ event, message, args, api }) {
    const userId = args[0];

    // Check if the user_id is provided
    if (!userId) {
      message.reply("Please provide the user ID.");
      return;
    }

    try {
      const userInfo = await api.getUserInfo(userId);

      // Check if the user exists
      if (!userInfo[userId]) {
        message.reply("User not found.");
        return;
      }

      const profilePictureUrl = userInfo[userId].profilePicture;
      const replyMessage = `Profile picture URL: ${profilePictureUrl}`;

      message.reply(replyMessage);
    } catch (error) {
      console.log(error);
      message.reply("An error occurred while fetching the profile picture.");
    }
  }
};