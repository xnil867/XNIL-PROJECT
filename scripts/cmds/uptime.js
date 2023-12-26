module.exports = {
  config: {
    name: "uptime",
    aliases: [],
    category: "goatBot",
    shortDescription: {
      en: "Shows the bot's uptime",
      tl: "Ipinapakita ang uptime ng bot"
    },
    longDescription: {
      en: "Shows how long the bot has been running",
      tl: "Ipinapakita kung gaano katagal na tumatakbo ang bot"
    },
    guide: {
      en: "{p}uptime",
      tl: "{p}uptime"
    }
  },
  onStart: async function ({ message, api }) {
    const uptime = process.uptime(); // gets the uptime in seconds
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor(uptime % 86400 / 3600);
    const minutes = Math.floor(uptime % 3600 / 60);
    const seconds = Math.floor(uptime % 60);

    // format the uptime into a readable string
    const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

    const response = `Hello, our bot has been running for:\n\n🕒 : 𝗨𝗣𝗧𝗜𝗠𝗘 ${uptimeString}\n\n📝 : 𝗪𝗘𝗕𝗦𝗜𝗧𝗘\n1. ➡ [www.betterstack.com]\n2. ➡ [www.uptimer.com]\n\n💌 𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗡𝗧𝗔𝗖𝗧:\n1. Fb Link: [https://www.facebook.com/toshiro.sowierd.but.imreal.tho]`;

    message.reply(response);
  }
};