module.exports = {
  config: {
    name: "spin",
    aliases: ["spinwheel"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Spin a wheel and win coins!",
      tl: "Ikutin ang gulong at manalo ng mga coin!"
    },
    longDescription: {
      en: "Spin a wheel and win coins!",
      tl: "Ikutin ang gulong at manalo ng mga coin!"
    },
    category: "goatBot",
    guide: {
      en: "{p}spin",
      tl: "{p}spin"
    },
  },
  onStart: async function ({ event, message, args, threadsData, usersData, api, commandName, role }) {
    // Fetch user data
    const userData = await usersData.get(event.senderID);

    // Check if the user has enough coins to spin the wheel
    if (userData && userData.money >= 10) {
      // Deduct 10 coins from the user's balance
      const newBalance = userData.money - 10;
      await usersData.set(event.senderID, {
        ...userData,
        money: newBalance
      });

      // Set up the spin wheel options
      const options = ["Coin", "Item 1", "Item 2", "Item 3"]; // Customize the wheel options here

      // Generate a random index for the winning option
      const randomIndex = Math.floor(Math.random() * options.length);
      const winningOption = options[randomIndex];

      // Send a message to the user with the spin result
      message.reply(`You spun the wheel and landed on ${winningOption}! You won a ${winningOption === "Coin" ? "coin" : "prize"}!`);

      if (winningOption === "Coin") {
        // Add coins to the user's balance
        const newBalance = newBalance + 5; // Customize the amount of coins won here
        await usersData.set(event.senderID, {
          ...userData,
          money: newBalance
        });
        message.reply(`You received 5 coins! Your new balance is ${newBalance} coins.`);
      } else {
        // Handle winning a different prize here
        // You can add your custom logic for different prizes
        // For example, you can give the user an item or perform other actions
        message.reply(`Congratulations! You won ${winningOption}!`);
      }
    } else {
      message.reply("You don't have enough coins to spin the wheel!");
    }
  }
};