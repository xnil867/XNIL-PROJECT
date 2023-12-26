module.exports = {
  config: {
    name: "oum",
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
    const imgURL = "https://cdn.fbsbx.com/v/t59.3654-21/287506306_2154666671365002_3219867017128682078_n.mp3/omsim.mp3?_nc_cat=111&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeFfZp7XZrvWDJ-j12oxikMKFUEA_0f9GQgVQQD_R_0ZCNcJpy-MbQ-sdbpR39RC9RN41wCFQ9yylGcrJQo8Q8SP&_nc_ohc=hEh7YLbEJskAX-4xllK&_nc_ht=cdn.fbsbx.com&oh=03_AdQk3otmU5dMIklQDxHFN3uAcOauWjTMLvyrLaduuIkK6w&oe=65838720&dl=1";

    const att = {
      attachment: await global.utils.getStreamFromURL(imgURL)
    };

    api.sendMessage(att, event.threadID);
  },

  onChat: async function ({ message, api, event }) {
    if (event.body && event.body.toLowerCase() === "oum") {
      this.onStart({ message, api, event });
    } else {
    }
  }
};