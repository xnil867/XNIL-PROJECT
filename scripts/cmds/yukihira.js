module.exports = {
 config: {
 name: "ADMINBOT",
 version: "1.0",
 author: "TOKODORI",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === `Fritz`) {
 return message.reply({
 body: "hello, i'm Hiroshima Tokodori. my master Tokodori is offline sorry 😔.",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/w92yeNh.jpeg")
 });
 }
 }
}