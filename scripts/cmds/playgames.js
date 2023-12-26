module.exports = {
  config: {
    name: "playgames",
    aliases: ["play"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Play random games",
      tl: "Maglaro ng mga random na laro"
    },
    longDescription: {
      en: "Play random games with GoatBot",
      tl: "Maglaro ng mga random na laro gamit ang GoatBot"
    },
    category: "goatBot",
    guide: {
      en: "{p}playgames",
      tl: "{p}larongmga"
    }
  },

  onStart: async function({ event, message, args, api }) {
    const games = [
      "Chess",
      "Poker",
      "Tic Tac Toe",
      "Snake",
      "Hangman",
      "Scrabble"
    ];
    const randomGame = games[Math.floor(Math.random() * games.length)];

    message.reply(`Let's play ${randomGame}!`);
  }
};