module.exports = {
  config: {
    name: "note",
    aliases: [],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "GoatAI - Create a note",
      tl: "GoatAI - Gumawa ng note"
    },
    longDescription: {
      en: "GoatAI - Create a note in messenger",
      tl: "GoatAI - Gumawa ng note sa messenger"
    },
    category: "goatBot",
    guide: {
      en: "{p}note <content>",
      tl: "{p}note <laman>"
    }
  },
  onStart: async function ({ event, message, args }) {
    const content = args.join(" "); // Get the content of the note
    if (!content) {
      message.reply("Please provide the content of the note.");
    } else {
      message.reply("Note saved successfully!");
      // You can then save the note content to a database or file
    }
  }
};