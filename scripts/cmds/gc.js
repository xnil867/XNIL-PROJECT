module.exports = {
  config: {
    name: "groupchat",
    aliases: ["gc"],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "GoatAI - Create a group chat",
      tl: "GoatAI - Gumawa ng group chat"
    },
    longDescription: {
      en: "GoatAI - Create a new group chat",
      tl: "GoatAI - Gumawa ng bago group chat"
    },
    category: "goatBot",
    guide: {
      en: "{p}groupchat <name> <members>",
      tl: "{p}groupchat <pangalan> <mga_member>"
    }
  },

  async onStart({ event, message, args, api }) {
    // Make sure to check if the user is an administrator
    const isAdmin = event.authorAdmin;
    if (!isAdmin) {
      message.reply("You must be an administrator to use this command.");
      return;
    }

    // Extract the name and members from the command arguments
    const [name, ...members] = args;

    // Make sure at least one member is provided
    if (members.length === 0) {
      message.reply("Please provide at least one member for the group chat.");
      return;
    }

    // Create the group chat
    const createGroupChat = await api.createGroupChat(name, members);

    if (createGroupChat) {
      message.reply(`Group chat "${name}" has been created successfully.`);
    } else {
      message.reply(`Failed to create group chat "${name}". Please try again.`);
    }
  }
};