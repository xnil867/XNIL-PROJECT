const aiStatus = {
  enabled: true,
};


module.exports = {
  config: {
    name: "goatbotai",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function({ api, event, args }) {
 const b = require('axios');
  let txt = args.join(" ");
  if (args[0] === 'off' && event.senderID === '61552521036052') {

    aiStatus.enabled = false;
    return api.sendMessage('𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚗𝚘𝚠 𝚘𝚏𝚏!', event.threadID, event.messageID);

  } else if (args[0] === 'on' && event.senderID === '61552521036052') {

    aiStatus.enabled = true;
    return api.sendMessage('✅ | 𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚗𝚘𝚠 𝚘𝚗!', event.threadID, event.messageID);
  }

  if (!aiStatus.enabled) {
    return api.sendMessage('Server Maintenance!\n\ncredits: https://www.facebook.com/toshiro.soweird.but.imreal.tho', event.threadID, event.messageID);
  }

try {
  if (!txt){ return api.sendMessage("❌ | Please provide a question first!", event.threadID, event.messageID)
}
api.sendMessage(`𝖦𝖮𝖠𝖳𝖡𝖮𝖳 𝖲𝖤𝖠𝖱𝖢𝖧𝖨𝖭𝖦🔎: ${txt}`,event.threadID, event.messageID);
  const res = await b.get(`https://chatgayfeyti.archashura.repl.co/?gpt=${txt}`);
let resu = res.data.content;
api.sendMessage(`𝗚𝗢𝗔𝗧𝗕𝗢𝗧 🤖:\n\n${resu}credits: https://www.facebook.com/toshiro.soweird.but.imreal.tho`, event.threadID, event.messageID)
    } catch (err){
return api.sendMessage("API Error", event.threadID, event.messageID)
      }  
   }
};