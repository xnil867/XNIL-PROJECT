module.exports = {
  config: {
    name: "happy500",
    aliases: [],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Happy 500!",
      tl: "Maligayang 500!"
    },
    longDescription: {
      en: "Sends a happy message for reaching 500.",
      tl: "Nagpapadala ng masayang mensahe kapag umabot na ng 500."
    },
    category: "goatBot",
    guide: {
      en: "{p}happy500",
      tl: "{p}happy500"
    },
  },
  
  onStart: async function ({ event, message, args, threadsData, usersData, api, commandName, role }) {
    message.reply("Congratulations on reaching 500! 🎉 Keep up the good work!");
  }
}