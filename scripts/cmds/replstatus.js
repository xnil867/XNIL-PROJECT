module.exports = {
  config: {
    name: "replitstatus",
    aliases: ["replstatus"],
    version: "1.0",
    author: "GoatAI by LiANE",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Check the status of Replit",
      tl: "Suriin ang status ng Replit"
    },
    longDescription: {
      en: "Check the status of Replit",
      tl: "Suriin ang status ng Replit"
    },
    category: "goatBot",
    guide: {
      en: "{p}replitstatus",
      tl: "{p}replitstatus"
    },
  },

  onStart: async function ({ event, message, threadID, api }) {
    const axios = require('axios');

    try {
      const response = await axios.get('https://status.replit.com/api/v2/status.json');
      const status = response.data;

      let messageToSend = `Replit Status:\n`;

      status.components.forEach(component => {
        let emoji = "❌";
        if (component.status === "operational") emoji = "✅";
        else if (component.status === "degraded_performance") emoji = "⚠";

        messageToSend += `${emoji} ${component.name}\n`;
      });

      // Sending the message
      api.sendMessage({ body: messageToSend }, threadID);
    } catch (error) {
      console.error("Error fetching Replit status:", error);
      api.sendMessage({ body: "An error occurred while fetching Replit status. Please try again later." }, threadID);
    }
  },
};