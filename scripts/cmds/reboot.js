const fs = require("fs-extra");

module.exports = {
  config: {
    name: "boot",
    version: "1.0",
    author: "HEIRO",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: "Khởi động lại bot",
      en: "Restart bot"
    },
    longDescription: {
      vi: "Khởi động lại bot",
      en: "Restart bot"
    },
    category: "𝗢𝗪𝗡𝗘𝗥",
    guide: {
      vi: "   {pn}: Khởi động lại bot",
      en: "   {pn}: Restart bot"
    }
  },

  langs: {
    vi: {
      restartting: "❎ | You Cannot Use Bot Rebooting Please Wait...."
    },
    en: {
      restartting: "❎ | You Cannot Use Bot Rebooting Please Wait...."
    }
  },

  onLoad: function ({ api }) {
    const pathFile = `${__dirname}/tmp/restart.txt`;
    if (fs.existsSync(pathFile)) {
      const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
      api.sendMessage(`✅ | Bot is Successfully Rebooted You Can Use It Now....\n\n✅ | At Time: ${(Date.now() - time) / 1000}s`, tid);
      fs.unlinkSync(pathFile);
    }
  },

  onStart: async function ({ message, event, getLang }) {
    const pathFile = `${__dirname}/tmp/restart.txt`;
    fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
    await message.reply(getLang("restartting"));
    process.exit(2);
  }
};