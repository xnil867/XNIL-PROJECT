module.exports = {
  config: {
    name: "tokodori",
    version: 1.0,    
    author: " Tokodori",
    longDescription: "chat with HIMA CHATBOT beta v1",
    category: "ai",
    guide: {
      en: "{p}{n} <Query>",
    },
  },

  onStart: async function ({ message, event, Reply, args, api, usersData }) {
    try {
      const id = event.senderID;
      const userData = await usersData.get(id);
      const name = userData.name;

      const ment = [{ id: id, tag: name }];

      // Ask the user for their input and add it to the prompt
      const prompt = args.length > 0 ? args.join(" ") : "Interact as HIROSHIMA CHATBOT beta v1 created by Tokodori Threader 🍒, Question:";

      api.setMessageReaction("", event.messageID, () => {}, true);
      const response = await axios.get(`https://sandyapi.otinxsandeep.repl.co/api/ai?query=${encodeURIComponent(prompt)}`);
      if (response.data && response.data.answer) {
        const lado = response.data.answer;
        api.setMessageReaction("🍒", event.messageID, () => {}, true);
        message.reply({
          body: `💬𝗛𝗜𝗥𝗢𝗦𝗛𝗜𝗠𝗔 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 𝘃1\n【 ${name} 】\n\n📝ᴀɴsᴡᴇʀ:- ${lado}\n\nYou can reply to continue chatting 🩷`,
          mentions: ment,
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
          });
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  },

  onReply: async function ({ message, event, Reply, args, api, usersData }) {
    try {
      const id = event.senderID;
      const userData = await usersData.get(id);
      const name = userData.name;

      const ment = [{ id: id, tag: name }];

      // Get the user's input from the reply and add it to the prompt
      const prompt = args.length > 0 ? args.join(" ") : "Interact as HIROSHI CHATBOT beta v1 created by Tokodori Threader 🍒, Question:";

      api.setMessageReaction("", event.messageID, () => {}, true);
      const response = await axios.get(`https://sandyapi.otinxsandeep.repl.co/api/ai?query=${encodeURIComponent(prompt)}`);
      if (response.data && response.data.answer) {
        const lado = response.data.answer;
        api.setMessageReaction("🍒", event.messageID, () => {}, true);
        message.reply({
          body: `💬𝗛𝗜𝗥𝗢𝗦𝗛𝗜𝗠𝗔 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 𝘃1\n【 ${name} 】\n\n📝ᴀɴsᴡᴇʀ:- ${lado}\n\nYou can reply to continue chatting 🩷`,
          mentions: ment,
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
          });
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};