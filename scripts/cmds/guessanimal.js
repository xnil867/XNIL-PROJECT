module.exports = {
  config: {
    name: "guesstheanimal",
    aliases: ["gta"],
    version: "1.0",
    author: "Your Name",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Guess the animal game",
      tl: "Laro ng pagsusulit ng hayop"
    },
    longDescription: {
      en: "A fun command where users have to guess the animal based on hints.",
      tl: "Isang nakakatuwang command kung saan ang mga user ay kailangang hulaan ang hayop base sa mga tip."
    },
    category: "Miscellaneous",
    guide: {
      en: "{p}guesstheanimal",
      tl: "{p}guesstheanimal"
    },
  },

  onStart: async function ({ event, message, threadsData, usersData, api }) {
    const animals = [
      "dog",
      "cat",
      "elephant",
      "lion",
      "giraffe",
      "monkey",
      "penguin",
      "tiger",
      "turtle",
      "zebra"
    ];

    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const hint = "It is a " + randomAnimal.length + "-letter animal.";
    const answer = randomAnimal.toLowerCase();

    message.reply("Guess the animal! Here's your hint: " + hint);

    const onReplyFunc = async ({ event, message, threadsData, usersData, api, Reply }) => {
      const { body } = event;

      if (body.toLowerCase() === answer) {
        message.reply("Congratulations! You guessed it right! The animal is " + answer + ".");
        global.GoatBot.onReply.delete(Reply.messageID);
      } else {
        message.reply("Oops! That's not the correct answer. Try again.");
      }
    };

    global.GoatBot.onReply.set(message.messageID, {
      commandName: "guesstheanimal",
      messageID: message.messageID,
      author: event.senderID,
      type: "reply"
    });
  },
};