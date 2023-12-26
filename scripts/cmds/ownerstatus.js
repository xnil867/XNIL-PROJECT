module.exports = {
  config: {
    name: "ownerstatus",
    aliases: ["os"],
    version: "1.0",
    author: "GoatAI by LiANE",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Check owner's status",
      tl: "Tingnan ang estado ng may-ari"
    },
    longDescription: {
      en: "This command checks whether the owner is sick or not.",
      tl: "Ang command na ito ay nagche-check kung ang may-ari ay may sakit o wala."
    },
    category: "goatBot",
    guide: {
      en: "{p}ownerstatus",
      tl: "{p}ownerstatus"
    },
  },

  onStart: async function ({ event, message, args, threadsData, usersData, api, commandName, role }) {
    const ownerID = "61552521036052"; // Replace with the owner's user ID

    const ownerData = await usersData.get(ownerID);
    const isSick = ownerData.sick || false;

    let status = "";
    if (isSick) {
      status = "The owner is currently sick.";
    } else {
      status = "The owner is not sick.";
    }

    message.reply(status);
  }
};