module.exports = {
  config: {
    name: "autosend",
    // other config properties ...
  },
  onStart: async function ({ event, api }) {
    if (event.type === "event" && event.logMessageType === "log:subscribe") {
      const addedBy = event.logMessageData.addedParticipants[0].userFbId;
      const groupName = event.logMessageData.threadName;
      
      // Customize your autosend message here
      const message = `Hello ${addedBy}! Welcome to ${groupName}.

MAY RULES KAMI DITO

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

TAPOS AYUN LANG 😹......`;
      
      // Send the autosend message
      api.sendMessage(message, event.threadID);
    }
  },
};