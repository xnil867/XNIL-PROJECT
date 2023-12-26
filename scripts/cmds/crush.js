module.exports = {
  config: {
    name: "crush",
    aliases: [],
    version: "1.0",
    author: "GoatAI by Liane",
    cooldown: 5,
    role: 0,
    shortDescription: {
      en: "Crush command",
      tl: "Command para sa crush",
    },
    longDescription: {
      en: "Generate a random crush message",
      tl: "Mag-generate ng random na mensahe para sa crush",
    },
    category: "goatBot",
    guide: {
      en: "{p}crush",
      tl: "{p}crush",
    },
  },

  onStart: async function ({ event, message, threadsData, usersData, api }) {
    const crushMessages = [
      "You're my crush!",
      "Every time I see you, my heart skips a beat.",
      "I can't help but blush whenever you're around.",
      "You light up my world like nobody else.",
      "I have a major crush on you!",
    ];

    const randomMessage = crushMessages[Math.floor(Math.random() * crushMessages.length)];

    message.reply(randomMessage);
  },
};