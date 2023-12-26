const fs = require('fs-extra');
const pathFile = __dirname + '/cache/deku.txt';

if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');

module.exports = {
  config: {
    name: "deku",
    author: "who is tokodori",
    role: 2,
    shortDescription: "",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  onStart: async ({ api, event, args }) => {
    const isEnable = fs.readFileSync(pathFile, 'utf-8');
    if (isEnable == 'true') {
      api.sendMessage(event.body, event.threadID);
      if (event.attachments[0].type == "sticker") {
        api.sendMessage({ sticker: event.attachments[0].stickerID }, event.threadID);
      }
    }
  },

  onCommand: async ({ api, event, args }) => {
    try {
      if (args[0] == 'on') {
        fs.writeFileSync(pathFile, 'true');
        api.sendMessage('Echo turned on successfully', event.threadID, event.messageID);
      } else if (args[0] == 'off') {
        fs.writeFileSync(pathFile, 'false');
        api.sendMessage('Echo turned off successfully', event.threadID, event.messageID);
      } else {
        api.sendMessage('Wrong format. Use deku off/on', event.threadID, event.messageID);
      }
    } catch (e) {
      console.log(e);
    }
  }
};