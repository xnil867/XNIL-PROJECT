module.exports = {
  config: {
    name: "swordfight",
    aliases: ["fight"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Swordfight with another user",
      tl: "Magsagupa gamit ang espada"
    },
    longDescription: {
      en: "Challenge another user to a swordfight and see who wins!",
      tl: "Hamunin ang isa pang user sa isang labanan gamit ang espada at tingnan kung sino ang mananalo!"
    },
    category: "goatBot",
    guide: {
      en: "{p}swordfight <user>",
      tl: "{p}swordfight <user>"
    }
  },

  onStart: async function ({ event, message, args, threadsData, usersData, api, commandName, role }) {
    if (args.length < 1) {
      message.reply("Please specify a user to swordfight with.");
      return;
    }

    const targetUser = getUserIDFromMention(args[0]);
    if (!targetUser) {
      message.reply("Invalid user. Please mention a valid user to swordfight with.");
      return;
    }

    const senderUserID = event.senderID;
    if (targetUser === senderUserID) {
      message.reply("You can't swordfight with yourself!");
      return;
    }

    const senderData = await usersData.get(senderUserID);
    const targetData = await usersData.get(targetUser);

    if (!senderData || !targetData) {
      message.reply("One or both of the users are not registered.");
      return;
    }

    const senderName = senderData.name;
    const targetName = targetData.name;

    // Generate a random number between 1 and 100
    const senderRoll = Math.floor(Math.random() * 100) + 1;
    const targetRoll = Math.floor(Math.random() * 100) + 1;

    let winner = "";
    if (senderRoll > targetRoll) {
      winner = senderName;
    } else if (senderRoll < targetRoll) {
      winner = targetName;
    } else {
      winner = "It's a draw!";
    }

    message.reply(`${senderName} rolled ${senderRoll}. ${targetName} rolled ${targetRoll}. The winner is ${winner}!`);
  }
}

// Helper function to get the user ID from a mention
function getUserIDFromMention(mention) {
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (matches) {
    return matches[1];
  }
  return null;
}