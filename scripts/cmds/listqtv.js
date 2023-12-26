module.exports = {
  config: {
    name: "listqtv",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  onStart: async function({ api, event, args, Users }) {
    /*try {
        var threadInfo = await api.getThreadInfo(args[0]);
    } catch (e) {
        var threadInfo = await api.getThreadInfo(event.threadID);
    }*/
    var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    var fs = require('fs-extra');
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
      const info = await api.getUserInfo(qtv2[i].id);
      const name = info[qtv2[i].id].name;
      listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
      `List ${qtv} Administrators include:\n${listad}`,
      event.threadID,
      event.messageID
    );
  }
};