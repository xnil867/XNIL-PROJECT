const axios = require('axios');
const { resolve } = require("path");
const { createReadStream, unlinkSync } = require("fs-extra");

module.exports = {
  config: {
    name: "sim",
    author: "who is tokodori",
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}",
  },

  envConfig: {
    APIKEY: "Meew_xVZVZ6g5i7Zz0TJyhTkDueNKlaoiOR",
  },
};

async function simsimi(a, b, c) {
  const d = global.nodemodule.axios,
    { APIKEY: e } = global.configModule.sim,
    g = (a) => encodeURIComponent(a);
  try {
    var { data: j } = await d({
      url: `https://meewmeew.info/simsimi/api?ask=${g(a)}&apikey=${e}`,
      method: "GET",
    });
    return { error: !1, data: j };
  } catch (p) {
    return { error: !0, data: {} };
  }
}

module.exports.onChat = async function () {
  if (typeof global.procodermew === "undefined") {
    global.procodermew = {};
  }
  if (typeof global.procodermew.simsimi === "undefined") {
    global.procodermew.simsimi = new Map();
  }
};

module.exports.handleEvent = async ({ api: b, event: a }) => {
  const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
  const { resolve } = global.nodemodule["path"];
  const { threadID: c, messageID: d, senderID: e, body: f } = a;
  const g = (e) => b.sendMessage(e, c, d);

  if (global.procodermew.simsimi.has(c)) {
    if (e == b.getCurrentUserID() || "" == f || d == global.procodermew.simsimi.get(c)) {
      return;
    }
    var { data: h, error: i } = await simsimi(f, b, a);
    const path = resolve(__dirname, "cache", `${event.threadID}_${event.senderID}.mp3`);
    await global.utils.downloadFile(
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
        h.msg
      )}&tl=vi&client=tw-ob`,
      path
    );
    return g({
      attachment: createReadStream(path),
    });
  }
};

module.exports.onStart = async ({ api: b, event: a, args: c }) => {
  const { threadID: d, messageID: e } = a;
  const f = (c) => b.sendMessage(c, d, e);

  if (c.length == 0) {
    return f("Bản chưa nhập tin nhắn");
  }

  switch (c[0]) {
    case "on":
      if (global.procodermew.simsimi.has(d)) {
        return f("Bạn chưa tắt sim.");
      } else {
        global.procodermew.simsimi.set(d, e);
        return f("Đã bật sim thành công.");
      }
    case "off":
      if (global.procodermew.simsimi.has(d)) {
        global.procodermew.simsimi.delete(d);
        return f("Đã tắt sim thành công.");
      } else {
        return f("Bạn chưa bật sim.");
      }
    default:
      var { data: g, error: h } = await simsimi(c.join(" "), b, a);
      const path = resolve(__dirname, "cache", `${event.threadID}_${event.senderID}.mp3`);
      await global.utils.downloadFile(
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
          g.msg
        )}&tl=vi&client=tw-ob`,
        path
      );
      return f({
        attachment: createReadStream(path),
      });
  }
};