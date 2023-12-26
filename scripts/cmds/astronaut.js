
const axios = require("axios")
const fs = require("fs-extra")
const request = require('request');

module.exports = {
  config: {
    name: "astronaut",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

  var link = [
"https://i.imgur.com/5fTZ2IB.jpeg",
"https://i.imgur.com/pImMWvV.jpeg", 
"https://i.imgur.com/ShANHgX.jpeg", 
"https://i.imgur.com/ww7yqzg.jpeg", 
"https://i.imgur.com/wXrwyEM.jpeg", 
"https://i.imgur.com/fewXznj.jpeg", 
"https://i.imgur.com/DjdicZk.jpeg", 
"https://i.imgur.com/SC4AdXl.jpeg", 
"https://i.imgur.com/e7w9I3Y.jpeg", 
"https://i.imgur.com/fEzNfj1.jpeg", 
"https://i.imgur.com/iNNaOVJ.jpeg", 
"https://i.imgur.com/siokqHJ.jpeg", 
"https://i.imgur.com/5uaIohn.jpeg", 
  ];
	 var callback = () => api.sendMessage({body:`pogi mo lods : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/hiro.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/hiro.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/hiro.jpg")).on("close",() => callback());
   }
};