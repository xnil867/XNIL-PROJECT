module.exports = {
    config: {
        name: "ano rules?",
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
    if (event.body && event.body.toLowerCase() == "ano rules") return message.reply(`MAY RULES KAMI DITO

IF HINDI NAG PAPARANDAM SA GC AUTO KICK

DAPAT 2 DAYS ONLINE PARA D AUTO LIPAD

AND PWEDE KA SEND COMMAND PA CONVERT BASTA ANONG COMMAND WILLING NAMAN DITO MGA TAO PATI NA AKO JOKE 😹

PWEDE KA NAMAN KA LAPAG NG REPL ACCOUNT FOR FOLLOW AND SUPPORTING EACH OTHER 🎀

BAWAL SEENER

BAWAL BASTOS

BAWAL OA / OVER ACTING

BAWAL RP

NEED RESPECT FOR ADMIN AND ALSO FOR MEMBER'S 🎀


NEED NYO GAWAN SI @Liane Cagara 🎀 NG ACCOUNT MINSAN TEMPBAN OR LOCK BOT ACCOUNT NYA 

TAPOS AYUN LANG 😹......`);
}
};