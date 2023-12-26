module.exports = {
  config: {
    name: "getfbinfo",
    aliases: [],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get Facebook Info",
      tl: "Kumuha ng Impormasyon sa Facebook"
    },
    longDescription: {
      en: "Get information about a Facebook user",
      tl: "Kumuha ng impormasyon tungkol sa isang Facebook user"
    },
    category: "goatBot",
    guide: {
      en: "{p}getfbinfo <user-id>",
      tl: "{p}getfbinfo <user-id>"
    },
  },

  onStart: async function ({ event, message, threadsData, usersData, api }) {
    const args = event.body.split(" ");
    const userID = args[1];

    // Use the userID to get the user information from Facebook
    api.getUserInfo(userID, async (err, info) => {
      if (err) {
        message.reply("Failed to retrieve user information.");
        return;
      }

      const user = info[userID];

      if (!user) {
        message.reply("User not found.");
        return;
      }

      const { name, gender, age, birthday } = user;

      // Send the retrieved user information as a reply
      message.reply(`Name: ${name}\nGender: ${gender}\nAge: ${age}\nBirthday: ${birthday}`);
    });
  }
};