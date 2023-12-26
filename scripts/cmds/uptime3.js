module.exports = {
  config: {
    name: "uptime3",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
  },

  onStart: async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const time = process.uptime();
    const hours = Math.floor(time / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor(time % 60);
    const pidusage = require("pidusage")(process.pid);
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("D/MM/YYYY || HH:mm:ss");
    const timeStart = Date.now();
    let today = new Date();
    axios.get('https://naughty.ocvat2810.repl.co').then(res => {
      let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let callback = function () {
        api.sendMessage({
          body: `📅Today is: ${gio}\n🤖Bot is up and running ${hours} hour ${minutes} minute ${seconds} second ❤.\n⚔Prefix: ${global.config.PREFIX}\n🔥Version: 2.0.0\n✅Total users: ${global.data.allUserID.length}\n🦖Total Group: ${global.data.allThreadID.length}\n⚡CPU in use: ${pidusage.cpu.toFixed(1)}\n⚠Ram in use: ${byte2mb(pidusage.memory)}\n🔰Ping: ${Date.now() - timeStart}ms`,
          attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
      };
      request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
    });
  }
};