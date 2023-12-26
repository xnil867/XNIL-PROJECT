const axios = require('axios');
const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "checkweb",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  onStart: async function({ api, event, target }) {
    const apiKey = 'your-api-key'; // Replace with your API key
    const websiteToCheck = target[0];

    if (!websiteToCheck) {
      return api.sendMessage('Please provide a website to check.', event.threadID);
    }

    try {
      const response = await axios.post(
        `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`,
        {
          client: {
            clientId: 'your-client-id', // Replace with your client ID
            clientVersion: '1.0',
          },
          threatInfo: {
            threatTypes: ['MALWARE'],
            platformTypes: ['WINDOWS'],
            threatEntryTypes: ['URL'],
            threatEntries: [{ url: websiteToCheck }],
          },
        }
      );

      if (response.data.matches && response.data.matches.length > 0) {
        // Process the matched threats, handle accordingly
      } else {
        // Website is safe
        api.sendMessage('Website is safe.', event.threadID);
      }

    } catch (error) {
      console.error(error);
      // Handle the error accordingly
    }
  }
};