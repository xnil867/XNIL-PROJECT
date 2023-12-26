module.exports = {
  config: {
    name: "internet",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function({ event, message, api }) {
  // Use the 'isConnected' method from the 'api' object to check the internet connection status
  const isConnected = await api.isConnected();
  
  if (isConnected) {
    message.reply("The internet connection is active.");
  } else {
    message.reply("The internet connection is not active.");
  }
},
};