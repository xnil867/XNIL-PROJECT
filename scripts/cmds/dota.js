module.exports = {
  config: {
    name: "dota",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
 
  api.sendMessage(`⏱️ | Sending Dota Highlights ...`, event.threadID, event.messageID);
axios.get('https://dota-api.yodi-iyods.repl.co/api/?apikey=dota').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `DOTA 🤍😼🔪`,
						attachment: fs.createReadStream(__dirname + `/cache/dota.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dota.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dota.${ext}`)).on("close", callback);
			}) .catch(err => {
                     api.sendMessage("[ DOTA ]\nApi error status: 200\nContact the owner to fix immediately", event.threadID, event.messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true);
                  })     
},
};