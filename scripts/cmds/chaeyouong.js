module.exports = {
  config: {
    name: "chaeyouongsimp",
   aliases: ["cs"],
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
  var link = [
"https://i.imgur.com/RLwFugK.jpeg ",
"https://i.imgur.com/0ty7QOC.jpeg",
"https://i.imgur.com/TBngk8v.jpeg",
"https://i.imgur.com/0ty7QOC.jpeg",
"https://i.imgur.com/RLwFugK.jpeg",
"https://i.imgur.com/5CEosj9.jpeg",
"https://i.imgur.com/ZAMFCwf.jpeg",
"https://i.imgur.com/jxhddCk.jpeg",
"https://i.imgur.com/6cijzSS.jpeg",
"https://i.imgur.com/DOmqxmf.jpeg",
"https://i.imgur.com/DOmqxmf.jpeg",
"https://i.imgur.com/vRxnsb8.jpeg",
"https://i.imgur.com/R0xYwyz.jpeg",
"https://i.imgur.com/buuwnMe.jpeg",
"https://i.imgur.com/vDAa40x.jpeg",
"https://i.imgur.com/drP4hnn.jpeg",
"https://i.imgur.com/n0NCF2x.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`wahhhh`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};