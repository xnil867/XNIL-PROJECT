module.exports = {
  config: {
    name: "date",
    aliases: ["datetime", "currentdate"],
    role: 0,
    category: "goatBot",
    shortDescription: {
      en: "Get the current date and time.",
      tl: "Kumuha ng kasalukuyang petsa at oras."
    },
    longDescription: {
      en: "This command will display the current date and time.",
      tl: "Ipapakita ng command na ito ang kasalukuyang petsa at oras."
    },
    guide: {
      en: "{p}date",
      tl: "{p}petsa"
    }
  },

  onStart: async function ({ message }) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    message.reply("The current date is: " + formattedDate + " and the current time is: " + formattedTime);
  }
};