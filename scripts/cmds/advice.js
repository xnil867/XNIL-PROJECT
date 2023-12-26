module.exports = {
  config: {
    name: "advice",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async ({ event, api, args }) => {
  
  const request = require ("request");
  const srod = require ("srod-v2");
  const Data = (await srod.GetAdvice()).embed.description;
  
  return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=tl&dt=t&q=${Data}`), (err, response, body) => {
		if (err) return api.sendMessage("Error", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
}
};