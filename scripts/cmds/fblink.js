module.exports = {
  config: {
    name: "fblink",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  onStart: async function({ event, message, threadsData, usersData, api }) {
    if (event.body.toLowerCase() === `${api.currentUserInfo.name.toLowerCase()} fblink`) {
      const userInfo = await api.getUserInfo(event.senderID);
      const user = userInfo[event.senderID];
      
      if (user && user.userID) { // Check if user and userID exist
        const fbLink = `https://www.facebook.com/${user.userID}`;
        message.reply(`Here is your Facebook link: ${fbLink}`);
      } else {
        message.reply(`Unable to retrieve Facebook link for user ${event.senderID}`);
      }
    }
  },
};