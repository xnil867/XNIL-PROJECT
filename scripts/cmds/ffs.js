module.exports = {
  config: {
    name: "ffs",
    author: "Mahiro", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function ({ api, args, event, permssion, Currencies }) {
	const { threadID, messageID, senderID } = event;
	const axios = require("axios");
	try {
		const req = args[1];
		const req1 = args[0];
		if (!req) return api.sendMessage("[!] Please provide an USERID.\n "+global.config.PREFIX+this.config.name+" API_KEY USERID", threadID, messageID);
		if (!req1) return api.sendMessage("[!] Please provide an API_KEY.\n "+global.config.PREFIX+this.config.name+" API_KEY USERID", threadID, messageID);
		if (!req1 || !req) return api.sendMessage("[!] Provide an API_KEY and ID.\n "+global.config.PREFIX+this.config.name+" API_KEY USERID", threadID, messageID);
		api.sendMessage("[!] PROCESSING PLEASE WAIT...", threadID, messageID);
		const res = await axios.get(`https://free.ffslikes.site/api.php?key=${encodeURI(req1)}&id=${encodeURI(req)}`);
		api.sendMessage(res.data.message, threadID, messageID);
	} catch {
		api.sendMessage("An error occured while fetching the api.", threadID, messageID);
	}
},
};