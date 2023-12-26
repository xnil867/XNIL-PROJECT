module.exports = {
  config: {
    name: "location",
    aliases: ["loc"],
    category: "goatBot",
    shortDescription: {
      en: "Get the current location",
      tl: "Kumuha ng kasalukuyang lokasyon"
    },
    longDescription: {
      en: "This command returns the current location.",
      tl: "Ang command na ito ay nagbibigay ng current na lokasyon."
    },
    role: 0, // Can be freely used by everyone
    guide: {
      en: "{p}location",
      tl: "{p}lokasyon"
    }
  },
  onStart: async function ({ event, message, args, api }) {
    const longitude = event.messageReply.attachments[0].longitude;
    const latitude = event.messageReply.attachments[0].latitude;

    if (longitude && latitude) {
      api.sendMessage(`The current location is Latitude: ${latitude}, Longitude: ${longitude}`, event.threadID);
    } else {
      api.sendMessage("Location not found.", event.threadID);
    }
  }
};