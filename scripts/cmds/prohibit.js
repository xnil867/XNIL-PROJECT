module.exports = {
  config: {
    name: "prohibited",
    aliases: ["website", "detect"],
    role: 0,
    category: "goatBot",
    shortDescription: {
      en: "Detect prohibited websites",
    },
    longDescription: {
      en: "Detect and warn about prohibited websites",
    },
    guide: {
      en: "{p}prohibited",
    },
  },
  
  onStart: async function ({ event, message }) {
    const prohibitedWebsite = "pornhub.com";
"xvideos.com"; // The prohibited website you want to detect

    if (event.body.includes(prohibitedWebsite)) {
      message.reply(
        `Prohibited Website has been Detected! This link "${prohibitedWebsite}" has contains 18+ contents not for minors. Please don't enter this website, I warn you!`
      );
    }
  },
};