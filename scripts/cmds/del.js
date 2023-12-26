const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "del",
    aliases: ["d"],
    version: "1.0",
    author: "Xemon",
    countDown: 5,
    role: 2,
    shortDescription: "Delete file and folders",
    longDescription: "Delete file",
    category: "𝗢𝗪𝗡𝗘𝗥",
    guide: "{pn}"
  },


  onStart: async function ({ args, message,event}) {
 const permission = ["61552521036052"];
    if (!permission.includes(event.senderID)) {
      message.reply("❌");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("Type the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`✅️ | A command file has been deleted ${commandName} !!`);
      } else {
        message.reply(`command file ${commandName} unavailable!!`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`Cannot be deleted because ${commandName}: ${err.message}`);
    }
  }
};