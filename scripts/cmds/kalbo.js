module.exports = {
  config: {
    name: "kalbo",
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
    const imgURL = "https://cdn.fbsbx.com/v/t59.3654-21/410964675_912205843650549_3152396050809260408_n.mp3/dwbAjs333c4_1702713168914.mp3?_nc_cat=103&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeFwYU_fkxaX4fBms1n9tlmahV0DoIpvx_GFXQOgim_H8SnviAH14yE3QIp2Axkq7QO0H22K1dzWB2qh4X1umeCq&_nc_ohc=9SdCMemfsfkAX-r472a&_nc_ht=cdn.fbsbx.com&oh=03_AdQsDSfSS0lGO32q6YYSPHdd3GzUpuoaQyiGzWAVSSJFmA&oe=657F50A9&dl=1";

    const att = {
      attachment: await global.utils.getStreamFromURL(imgURL)
    };

    api.sendMessage(att, event.threadID);
  },

  onChat: async function ({ message, api, event }) {
    if (event.body && event.body.toLowerCase() === "bat kalbo?") {
      this.onStart({ message, api, event });
    } else {
    }
  }
};