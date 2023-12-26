module.exports = {
  config: {
    name: "eval2",
    aliases: [],
    version: "1.0",
    author: "Your Name",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Evaluate JavaScript code",
      tl: "Ebalwasyon ng code sa JavaScript"
    },
    longDescription: {
      en: "This command allows you to evaluate JavaScript code.",
      tl: "Ang command na ito ay nagbibigay-daan sa iyo upang ma-evaluate ang JavaScript code."
    },
    category: "goatBot",
    guide: {
      en: "{p}eval <code>",
      tl: "{p}eval <code>"
    },
  },
  
  async onStart({ message, args, api }) {
    const code = args.join(" ");
    
    try {
      const result = eval(code);
      message.reply(`Result: ${result}`);
    } catch (error) {
      message.reply(`Error: ${error.message}`);
    }
  },
};