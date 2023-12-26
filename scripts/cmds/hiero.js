const fs = require('fs');
module.exports = {
  config: {
    name: "HEIRO",
    version: "1.0",
    author: "Otineeeeeyyyyyy",// HEIRO
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "heiro") {
      return message.reply({
        body: "『u can't see me』",
        attachment: fs.createReadStream("johncena.mp3"),
      });
    }
  }
};