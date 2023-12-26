module.exports = {
    config: {
        name: "nakaw",
        version: "1.0",
        author: "HEIRO",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "nakaw boi") return message.reply("SA LETRANG N NAKAW I HAMPAS KO SAYO ANG DOS 4 DOS!");
}
};