module.exports = {
  config: {
    name: "totalcmd",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function ({ api, event, threadsData }) {
  // Retrieve the command list from threadsData
  const commandList = await threadsData.get('commandList');

  let totalCommands = 0;

  if (commandList) {
    totalCommands = Object.keys(commandList).length;
  }

  // Display the total number of commands
  api.sendMessage(`There are ${totalCommands} commands available.`, event.threadID);
},
};