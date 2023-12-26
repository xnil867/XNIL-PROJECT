const fs = require("fs");
const moment = require("moment-timezone");

module.exports = {
    config: {
        name: "antiaddbot",
        version: "1.2.0",
        author: "JOHN RÉ PORAS",
        description: "Prevent users from adding GoatBot to other groups without approval.",
        category: "Settings",
        cooldown: 0,
        role: 2, // Only bot admins can use this command
        shortDescription: {
            en: "Antiaddbot - Prevent unauthorized addition of GoatBot",
            tl: "Antiaddbot - Pigilan ang di-awtorisadong pagdagdag ng GoatBot"
        },
        longDescription: {
            en: "Antiaddbot - Prevent users from adding GoatBot to other groups without approval.",
            tl: "Antiaddbot - Pigilan ang mga user na magdagdag ng GoatBot sa ibang mga grupo nang walang pahintulot."
        },
        guide: {
            en: "{p}antiaddbot",
            tl: "{p}antiaddbot"
        }
    },

    onStart: function () {}, // Add this empty function

    handleEvent: async function({ api, event }) {
        if (event.type === "thread-add" && event.author) {
            const authorID = event.author;
            const threadID = event.threadID;
            const botAdmins = await getBotAdmins();
            const botOwnerID = botAdmins[0]; 

            if (botAdmins.includes(authorID)) {
                return;
            }

            await api.sendMessage("You don't have permission to add me to other groups.", authorID);

            const threadInfo = await api.getThreadInfo(threadID);
            const threadName = threadInfo.threadName || "this group";
            const timestamp = moment.tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss");
            const adminMessage = `${event.senderID} is trying to add me to ${threadName} at ${timestamp}.`;
            await api.sendMessage(adminMessage, botOwnerID);
        }
    }
};

async function getBotAdmins() {
    try {
        const data = await fs.promises.readFile(__dirname + "/bot_admins.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}