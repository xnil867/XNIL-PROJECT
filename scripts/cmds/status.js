const os = require('os');
const { performance } = require('perf_hooks');

module.exports = {
  config: {
    name: "status",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const cpuCores = os.cpus().length;
    const totalRam = (os.totalmem() / (1024 ** 3)).toFixed(2); // convert to GB
    const freeRam = (os.freemem() / (1024 ** 3)).toFixed(2); // convert to GB
    const uptime = os.uptime();
    const botStatus = "online"; // Replace with actual bot status

    api.sendMessage(
      {
        body: `𝖮𝗐𝗇𝖾𝗋 𝗌𝗍𝖺𝗍𝗎𝗌\n\nOS: ${os.type()} ${os.release()}\nCPU Cores: ${cpuCores}\nTotal RAM: ${totalRam} GB\nFree RAM: ${freeRam} GB\nBot Status: ${botStatus}\nUptime: ${uptime} seconds`,
      },
      event.threadID
    );
  },
};