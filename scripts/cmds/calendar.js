module.exports = {
  config: {
    name: "calendar",
    aliases: ["date"],
    shortDescription: {
      en: "Get the current date and time",
      tl: "Kunin ang kasalukuyang petsa at oras"
    },
    longDescription: {
      en: "Get the current date, time, and the upcoming holiday.",
      tl: "Kunin ang kasalukuyang petsa, oras, at ang darating na holiday."
    },
    category: "goatBot",
    guide: {
      en: "{p}calendar",
      tl: "{p}calendar"
    }
  },
  onStart: async function ({ event, message }) {
    // Get the current date and time
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();

    // Format the date
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);

    // Get the upcoming holiday
    const upcomingHoliday = "Christmas Day"; // Replace this with the logic to get the upcoming holiday

    // Reply with the formatted date, time, and upcoming holiday
    message.reply(
      `💟 | Date: ${formattedDate}\n` +
      `💟 | Time in Manila: ${currentTime}\n` +
      `💟 | Upcoming Holiday: ${upcomingHoliday}`
    );
  }
};