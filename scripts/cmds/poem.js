module.exports = {
  config: {
    name: "poem",
    aliases: ["p"],
    shortDescription: {
      en: "Generate a random poem.",
    },
    longDescription: {
      en: "Generate a random poem using AI.",
    },
    category: "goatBot",
    guide: {
      en: "{p}poem",
    },
  },
  
  onStart: async function ({ message, api }) {
    const poems = [
      "Roses are red, violets are blue, AI writes poems, just for you!",
      "In a world of dreams, where love can gleam, the sunlight beams, over mountain streams.",
      "Through the darkest night, you are my guiding light, with you, I feel so right.",
      "Under the starry sky, our love will never die, forever, you and I.",
    ];

    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    
    message.reply(randomPoem);
  },
};