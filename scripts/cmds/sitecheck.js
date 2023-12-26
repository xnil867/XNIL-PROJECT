module.exports = {
  config: {
    name: "sitecheck",
    aliases: ["checksite"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Sitecheck - Check the status of a website",
      tl: "Sitecheck - Tingnan ang status ng isang website"
    },
    longDescription: {
      en: "Sitecheck - Check the status of a website using GoatBot's AI",
      tl: "Sitecheck - Tingnan ang status ng isang website gamit ang AI ng GoatBot"
    },
    category: "goatBot",
    guide: {
      en: "{p}sitecheck <website_url>",
      tl: "{p}sitecheck <website_url>"
    }
  },
  onStart: async function ({ event, message, args, api }) {
    const websiteURL = args[0];
    if (!websiteURL) {
      message.reply("Please provide a website URL.");
      return;
    }
    
    const axios = require("axios");
    
    try {
      const response = await axios.get(websiteURL);
      if (response.status === 200) {
        message.reply(`The website ${websiteURL} is up and running.`);
      } else {
        message.reply(`The website ${websiteURL} is down.`);
      }
    } catch (error) {
      message.reply(`An error occurred while checking the website ${websiteURL}.`);
    }
  }
};