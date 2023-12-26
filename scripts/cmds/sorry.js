module.exports = {
  config: {
    name: "sorry",
    version: "",
    author: "",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "no prefix"
    },
    longDescription: {
      vi: "",
      en: "no prefix"
    },
    category: "no prefix",
    guide: "",
  },

  onStart: async function ({ message, api, event }) {
    const imgURL = "https://i.imgur.com/9URg4t7.mp4";

    const att = {
      attachment: await global.utils.getStreamFromURL(imgURL)
    };

    api.sendMessage(att, event.threadID);
  },

  onChat: async function ({ message, api, event }) {
    if (event.body && event.body.toLowerCase() === "sorry") {
      this.onStart({ message, api, event });
    } else {
    }
  }
};