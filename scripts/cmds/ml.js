const axios = require("axios");
const request = require("request");
const fs = require('fs-extra');

module.exports = {
  config: {
    name: "ml",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

  var link = [
"https://i.imgur.com/KOoiqg6.jpg",
"https://i.imgur.com/sRUIrUk.jpg", 
"https://i.imgur.com/rQADlNS.jpg", 
"https://i.imgur.com/SFhEKpH.jpg", 
"https://i.imgur.com/QSnmMiE.jpg", 
"https://i.imgur.com/1CkO7F3.jpg", 
  ];
	 var callback = () => api.sendMessage({body:`sarap : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/ken.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ken.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ken.jpg")).on("close",() => callback());
   }
};