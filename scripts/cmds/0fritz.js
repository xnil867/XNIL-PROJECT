module.exports = {
  config: {
    name: "Tokodori",
    version: "1.0",
    author: "Tokodori",
    countDown: 5,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "sarcasm",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message, getLang, api }) {
    const TokodoriRegex = /^(fritz|frtiz|Fritz|Frtiz)$/i;
    if (event.body && TokodoriRegex.test(event.body)) {
      await api.sendMessage("My Admin Is Offline Sorry nood ka muna bold eto link : beeg.com", event.threadID, event.messageID);
      await api.sendMessageReaction("❔", event.messageID);
    }
  },
};