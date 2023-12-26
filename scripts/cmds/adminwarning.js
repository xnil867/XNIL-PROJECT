module.exports = {
  config: {
    name: "mentionAdminWarning",
    aliases: ["mention"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 1,
    shortDescription: {
      en: "Mention admin warning command",
      tl: "Mention admin command ng babala"
    },
    longDescription: {
      en: "This command sends a warning message to the admins by mentioning them.",
      tl: "Ang command na ito ay nagpapadala ng babala sa mga admin sa pamamagitan ng pag-mentyon sa kanila."
    },
    category: "goatBot",
    guide: {
      en: "{p}mentionAdminWarning <message>",
      tl: "{p}mentionAdminWarning <mensahe>"
    }
  },

  onStart: async function ({ event, message, threadsData, usersData, api }) {
    const admins = await api.getThreadAdmins(event.threadID);
    const mentionedAdmins = admins.map(admin => `@${admin.userID}`).join(" ");
    const warningMessage = `Admin warning! ${mentionedAdmins}\n\n${event.body}`;
    api.sendMessage(warningMessage, event.threadID);
  }
};