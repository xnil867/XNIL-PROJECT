const fs = require("fs")
const request = require("request")

module.exports = {
  config: {
    name: "khabylame",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async ({ api, event,args }) => {  {
      
	 const { threadID, messageID, senderID, body } = event;
	 const text = args.join(" ")
  if (!text) return api.sendMessage('Please enter the correct format [text1 | text2 ]!', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
  const text1 = text.substr(0, text.indexOf(' | ')); 
  if (!text1) return api.sendMessage('Please enter the correct format [text1 | text2 ]!', event.threadID, event.messageID);
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  if (!text2) return api.sendMessage('Please enter the correct format [text1 | text2 ]!', event.threadID, event.messageID);
  const length_2 = parseInt(text2.length)
  
	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/poh.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/poh8.png"),event.messageID);
	 return request(encodeURI(`https://api.memegen.link/images/khaby-lame/${text1}/${text2}.png`)).pipe(fs.createWriteStream(__dirname+'/cache/poh.png')).on('close',() => callback());  
}}
};