module.exports = {
  config: {
    name: "translateTagalog",
    aliases: ["transTagalog", "tagalog"],
    category: "goatBot",
    shortDescription: {
      en: "Auto translates a message into Tagalog",
      tl: "Awto nagtetranslate ng mensahe sa Tagalog"
    },
    longDescription: {
      en: "This command automatically translates a message into Tagalog.",
      tl: "Ang command na ito ay awtomatikong nagtetranslate ng mensahe sa Tagalog."
    },
    guide: {
      en: "{p}translateTagalog <message>",
      tl: "{p}translateTagalog <mensahe>"
    },
    role: 0
  },
  onStart: async function ({ event, message, args }) {
    const translate = require("@vitalets/google-translate-api"); // You will need to install the 'google-translate-api' package using npm

    const messageToTranslate = args.join(" ");
    if (!messageToTranslate) {
      message.reply({
        body: "Please provide a message to translate.",
        mentions: [{
          tag: message.senderID,
          id: message.senderID
        }]
      });
      return;
    }

    try {
      // Translate the message to Tagalog
      const translation = await translate(messageToTranslate, { from: "en", to: "tl" });

      // Send the translated message
      message.reply({
        body: `Translated message: ${translation.text}`,
        mentions: [{
          tag: message.senderID,
          id: message.senderID
        }]
      });
    } catch (error) {
      console.error("Translation error:", error);
      message.reply({
        body: "Sorry, I couldn't translate the message.",
        mentions: [{
          tag: message.senderID,
          id: message.senderID
        }]
      });
    }
  }
};