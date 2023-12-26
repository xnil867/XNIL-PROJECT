module.exports = {
  config: {
    name: "stalk",
    aliases: [],
    version: "1.0",
    author: "YourName",
    cooldown: 5,
    role: 0,
    shortDescription: {
      en: "Stalk a user's information",
      tl: "Tingnan ang impormasyon ng isang user"
    },
    longDescription: {
      en: "Stalk a user's information",
      tl: "Tingnan ang impormasyon ng isang user"
    },
    category: "goatBot",
    guide: {
      en: "{p}stalk [mention]",
      tl: "{p}stalk [mention]"
    },
  },

  onStart: async function ({ event, message, usersData, api }) {
    const mentionedUser = event.mentions[0];
  
    if (!mentionedUser) {
      message.reply("Please mention a user to stalk!");
      return;
    }
  
    try {
      const userInfo = await api.getUserInfo(mentionedUser);
      const { name, gender, birthday } = userInfo[mentionedUser];
  
      const stalkMessage = `🌟 User Information 🌟\n📝 Name: ${name}\n🆔 UID: ${mentionedUser}\n👤 Gender: ${gender}\n🎂 Birthday: ${birthday || "Birthday not available"}\n📊 Status: ${userInfo[mentionedUser].presence === "offline" ? "Offline 🔴" : "Online 🔵"}\n🤝 Friends: ${userInfo[mentionedUser].isFriend ? "Yes ✅" : "No ❌"}\n🌐 Facebook Link: https://www.facebook.com/profile.php?id=${mentionedUser}\n🔗 Social Links: ${userInfo[mentionedUser].vanity ? "https://www.facebook.com/" + userInfo[mentionedUser].vanity : "🚸 Links unavailable 🚸"}\nProfile Picture: ${userInfo[mentionedUser].profileUrl}`;
  
      message.reply(stalkMessage);
    } catch (error) {
      console.log(error);
      message.reply("An error occurred while trying to stalk the user.");
    }
  }
};