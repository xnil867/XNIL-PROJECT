module.exports = {
    config: {
        name: "pogiv2",
        version: "1.0",
        author: "Tokodori",
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
    if (event.body && event.body.toLowerCase() == "top10 pogi") return message.reply(`𝖳𝗈𝗉 10 𝗆𝗈𝗌𝗍 𝗁𝖺𝗇𝖽𝗌𝗈𝗆𝖾 𝗂𝗇 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽 👍😎
 
1 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
2 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
3 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
4 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
5 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
6 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
7 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
8 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
9 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱
10 𝖳𝖮𝖪𝖮𝖣𝖮𝖱𝖨 𝖳𝖧𝖱𝖤𝖠𝖣𝖤𝖱`);
}
};