module.exports = {
  config: {
    name: "birthday",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: function ({ event, api }) {
    const t = Date.parse("Octerber 31, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`💝Time left until Heiro Birthday💝\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds «`, event.threadID, event.messageID);
}
};