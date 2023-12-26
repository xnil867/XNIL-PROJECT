const axios = require('axios');
const request = require('request');	
const fs = require("fs");

module.exports = {
  config: {
    name: "foodpic",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },
			
onStart: async ({ api, event, args }) => {
	const req = args[0];
	if (!args[0]) return api.sendMessage("🚀 Need an food to search.", event.threadID, event.messageID);
	axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/foodpic?query=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `❯ Query: ${req}\n❯ Result: ${res.data.title}`,
						attachment: fs.createReadStream(__dirname + `/cache/food1.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/food1.jpg`), event.messageID);
				};
				request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/food1.jpg`)).on("close", callback);
			})
    }
};