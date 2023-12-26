module.exports = {
  config: {
    name: "planetstatus",
    aliases: ["planet", "plstatus"],
    version: "1.0",
    author: "Your Name",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get the status of a planet",
      tl: "Malaman ang status ng planeta"
    },
    longDescription: {
      en: "Get the current status of a specific planet",
      tl: "Malaman ang kasalukuyang estado ng isang tiyak na planeta"
    },
    category: "goatBot",
    guide: {
      en: "{p}planetstatus <planet>",
      tl: "{p}planetstatus <planeta>"
    }
  },
  
  onStart: async function ({ event, message, args, api }) {
    const planet = args[0]; // Get the planet name from the command arguments
    
    // List of planets and their status
    const planetStatus = {
      earth: "Active",
      mars: "Inactive",
      jupiter: "Unknown",
      saturn: "Active"
      // Add more planets and their status as needed
    };
    
    // Check if the planet exists in the planetStatus object
    if (planetStatus.hasOwnProperty(planet.toLowerCase())) {
      const status = planetStatus[planet.toLowerCase()]; // Get the status of the planet
      
      // Send the status as a reply
      message.reply(`The planet ${planet} is currently ${status}`);
    } else {
      // If the planet is not found, send an error message
      message.reply("Sorry, I couldn't find information about that planet.");
    }
  }
};