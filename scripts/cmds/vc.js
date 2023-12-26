module.exports = {
  config: {
    name: "videocall",
    aliases: ["video", "call"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "GoatAI - Start a videocall",
      tl: "GoatAI - Magsimula ng videocall"
    },
    longDescription: {
      en: "GoatAI - Start a videocall using GoatBot",
      tl: "GoatAI - Magsimula ng videocall gamit ang GoatBot"
    },
    category: "goatBot",
    guide: {
      en: "{p}videocall",
      tl: "{p}videocall"
    }
  },
  
  onStart: async function ({ event, message, threadsData, usersData, api }) {
    message.reply("To start a videocall, you can use a video call link or a video call app. For example, you can use Google Meet, Microsoft Teams, or Zoom. Simply create a meeting and share the link or meeting details with the participants.");
  }
}