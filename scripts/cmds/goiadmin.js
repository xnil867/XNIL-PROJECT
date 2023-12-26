module.exports = {
  config: {
    name: "goiadmin",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onChat: function({ api, event }) {
  if (event.senderID !== "61552521036052") {
    var aid = ["61552521036052"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["anong kailangan mo sa pogi kong admin?", "Tag Admin again, I'll punch you", "wag mong istorbohin admin ko","tumatae sya","tulog admin yung ko"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
onStart: async function({}) {
  }
};