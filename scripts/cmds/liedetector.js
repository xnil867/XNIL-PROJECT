module.exports = {
  config: {
    name: "liedetector",
    aliases: ["ld"],
    category: "goatBot",
    description: {
      en: "Lie Detector - Detect if someone is lying",
      tl: "Lie Detector - Tukuyin kung sinungaling ang isang tao"
    },
    usage: "{prefix}liedetector <question>",
    role: 0,
    cooldown: 5
  },
  onStart: async function ({ event, api, args }) {
    const question = args.join(" ");
    
    if (!question) {
      return api.sendMessage("Please provide a question for the lie detector test.", event.threadID);
    }
    
    // Generate a random result (true or false) for the lie detector
    const isLying = Math.random() < 0.5;
    
    // Reply with the result
    api.sendMessage(`Lie Detector Result: ${isLying ? "Lie" : "Truth"}`, event.threadID);
  }
};