module.exports = {
  config: {
    name: "earthstatus",
    aliases: ["earth"],
    category: "goatBot",
    role: 0,
    shortDescription: {
      en: "Shows the current status of the Earth.",
      tl: "Nagpapakita ng kasalukuyang estado ng Daigdig."
    },
    longDescription: {
      en: "Use this command to get information about the current status of the Earth.",
      tl: "Gamitain ang command na ito para malaman ang impormasyon tungkol sa kasalukuyang estado ng Daigdig."
    },
    guide: {
      en: "{p}earthstatus",
      tl: "{p}earthstatus"
    }
  },
  
  onStart: async function ({ message, api }) {
    const earthStatus = "The Earth is currently functioning normally.";
    message.reply(earthStatus);
  }
};