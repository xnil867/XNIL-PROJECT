module.exports = {
  config: {
    name: "program",
   aliases: ["shell"],
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: "shell command ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
let text = args.join(" ")
exec(`${text}`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`error: \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr:
        \n ${stderr}`, event.threadID, event.messageID);
        return;
    }
    api.sendMessage(`stdout:
    \n ${stdout}`, event.threadID, event.messageID);
});
}
};