module.exports = {
  config: {
    name: "setmoney",
    aliases: ["smoney"],
    role: 0,
    shortDescription: {
      en: "Set the money value for a user",
      tl: "Itakda ang halaga ng pera para sa isang user"
    },
    longDescription: {
      en: "Set the money value for a user in the game",
      tl: "Itakda ang halaga ng pera para sa isang user sa laro"
    },
    category: "game",
    guide: {
      en: "{p}setmoney <user> <amount>",
      tl: "{p}setmoney <user> <halaga>"
    }
  },
  onStart: async function ({ event, args, usersData, api, message }) {
    const mentionedUser = event.mentions[0];
    const amount = parseInt(args[1]);

    if (!mentionedUser || isNaN(amount)) {
      message.reply("Invalid usage! Please mention a user and provide a valid amount.");
      return;
    }

    const userData = await usersData.get(mentionedUser.id);
    await usersData.set(mentionedUser.id, {
      name: userData.name,
      money: amount
    });

    message.reply(`Successfully set the money value to ${amount} for ${mentionedUser.name}.`);
  }
};