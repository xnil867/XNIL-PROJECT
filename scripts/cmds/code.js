axios = require("axios");
const fs = require('fs');
const cheerio = require("cherio");

module.exports = {
  config: {
    name: "code",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: "",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  onStart: async ({ api, event, args }) => {
    const permission = ["61552521036052"];
    if (!permission.includes(event.senderID)) return api.sendMessage("•callad Có Thằng Định Phá Code Này Ông Chủ:))", event.threadID, event.messageID);

    if (args.length === 0) return api.sendMessage("Lỗi cú pháp", event.threadID);
    var path = __dirname + '/';
    if (args[0] === "edit") {
      var newCode = event.body.slice(8 + args[1].length + args[0].length, event.body.length);
      console.log(newCode);
      fs.writeFile(`${__dirname}/${args[1]}.js`, newCode, "utf-8", function (err) {
        if (err) return api.sendMessage(`An error occurred while applying the new code to "${args[1]}.js".`);
        api.sendMessage(`New code applied for "${args[1]}.js".`, event.threadID, event.messageID);
      });
    } else if (args[0] === "read" || args[0] === "-r") {
      var data = await fs.promises.readFile(`${__dirname}/${args[1]}.js`, "utf-8", (err, data) => {
        if (err) return api.sendMessage(`An error occurred while reading the command "${args[1]}.js".`, event.threadID, event.messageID);
        api.sendMessage(data, event.threadID, event.messageID);
      });
    } else if (args[0] === "cre") {
      if (args[1].length === 0) return api.sendMessage("Modules have not been named yet", event.threadID);
      if (fs.existsSync(`${__dirname}/${args[1]}.js`))
        return api.sendMessage(`${args[1]}.js already exist.`, event.threadID, event.messageID);
      fs.copyFileSync(__dirname + "/example.js", __dirname + "/" + args[1] + ".js");
      return api.sendMessage(`File has been created successfully "${args[1]}.js".`, event.threadID, event.messageID);
    } else if (args[0] === "del") {
      fs.unlinkSync(`${__dirname}/${args[1]}.js`);
      return api.sendMessage(`Deleted file named "${args[1]}.js".`, event.threadID, event.messageID);
    } else if (args[0] === "rename") {
      fs.rename(`${__dirname}/${args[1]}.js`, `${__dirname}/${args[2]}.js`, function (err) {
        if (err) throw err;
        return api.sendMessage(`File has been renamed successfully "${args[1]}.js" success "${args[2]}.js".`, event.threadID, event.messageID);
      });
    }
  }
};