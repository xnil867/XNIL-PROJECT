module.exports = {
  config: {
    name: "shortlink",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async ({ api, event,args }) => {
const axios = require("axios");
let juswa = args.join(" ");
const res = await axios.get(`https://manhict.tech/shortlink?url=${juswa}`);
var created_at = res.data.created_at;
var link = res.data.link;
var long_url = res.data.long_url;
var id = res.data.id;
return api.sendMessage(`Created at:${created_at}\n\nShort url:\n${link}\nShorter url: ${id}\n\nOriginal url:\n${long_url}`, event.threadID, event.messageID)
}
};