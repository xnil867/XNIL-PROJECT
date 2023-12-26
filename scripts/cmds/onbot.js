module.exports = {
  config: {
    name: "onbot",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: ({event, api}) =>api.sendMessage("onbot",event.threadID, () =>process.enter(1))
};