module.exports = {
  config: {
    name: "creator",
    author: "Tokodori", // Converted To Goat
    role: 2,
    shortDescription: {
      en: " ",
      tl: " "
    },
    longDescription: {
      en: "",
      tl: ""
    },
    category: "BOT",
    guide: {
      en: "{pn}",
      tl: "{pn}"
    }
  },

  onStart: async function({ event, api, usersData }) {
    const res = await api.getUserInfo(event.senderID);
    const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
    const process = require("process");

    if (!res || !res[0] || !res[0].profileUrl) {
      console.log("Cannot get the profile URL. Aborting.");
      return;
    }

    const time = process.uptime(),
      hours = Math.floor(time / (60 * 60)),
      minutes = Math.floor((time % (60 * 60)) / 60),
      seconds = Math.floor(time % 60);

    const moment = require("moment-timezone");
    var juswa = moment.tz("Asia/Manila").format("『MM/D/YYYY』 【HH:mm:ss】");

    const callback = () => {
      api.sendMessage({
        body: `•——[ Creator of Hitoshi Float  ]——•
        ✫Creator : TOKODORI THREADER 
        ❂Admin UID : NONE
        ♛Admin FB Link : https://www.facebook.com/toshiro.soweird.but.imreal.tho
        If you want your own bot just message the bot owner.`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
      }, event.threadID, () => {
        fs.unlinkSync(__dirname + "/cache/1.png");
      })
    };

    return request(encodeURI(res[0].profileUrl)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', callback);
  }
};