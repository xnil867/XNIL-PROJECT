const axios = require("axios");

module.exports = {
  config: {
    name: "urlshort",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function({ api, event, args}) {
	var { threadID, messageID } = event;
	const res1 = args[0];
	try {
	    if (!args[0]) return api.sendMessage("[!] Require a url to shorten.", threadID, messageID);
	    if (!args[1]) {
	    const res = await axios(`https://url.codersensui.repl.co/api/urlshort?url=${encodeURI(args[1])}}`);
	    api.sendMessage("❯ Original Url: "+res1+"\n❯ Shortened Url: "+res.data.shortUrl+"\n❯ Expiration: "+res.data.expireAt, threadID, messageID);
	    };
	} catch (error) {
		api.sendMessage(error, threadID, messageID);
   	}
   }
};