module.exports = {
  config: {
    name: "bio",
    aliases: ["setbio"],
    author: "Raul", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },
  onStart: async ({ api, event, args }) => {
    const hiro = "-";
    const hiro2 = "Tokodori";
    const hiro3 = "Tokodori Threader";
    const hiro5 = "24/7";

    const hiro4 = `
🌊 Prefix 🌊: ${hiro}
🌊 Owner 🌊: ${hiro2}
🌊 Developed By 🌊: ${hiro3}
🚀BOT OPEN🚀: ${hiro5}
    `;
    api.changeBio(hiro4, (e) => {
      if (e) {
        api.sendMessage("An error occurred: " + e, event.threadID);
      } else {
        api.sendMessage(`The bot's bio has been updated to:\n${hiro4} automatically`, event.threadID);
      }
    });
  }
};