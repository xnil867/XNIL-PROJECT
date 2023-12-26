module.exports = {
  config: {
    name: "billboard",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async function({ api, event, args, client, __GLOBAL }) {
  const { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const fs = require("fs-extra");
  const axios = require("axios");
  const avatar = __dirname + '/cache/avt.png';
  let pathImg = __dirname + '/cache/wew.png';
  var text = args.join(" ");
  const name = (await api.getUserInfo(senderID))[senderID].name;
  var linkAvatar = (await api.getUserInfo(senderID))[senderID].thumbSrc;
  if (!text) return api.sendMessage("Please put a message", threadID, messageID);
  const getAvatar = (await axios.get(linkAvatar, { responseType: 'arraybuffer' })).data;
  const getPorn = (await axios.get(`https://imgur.com/uN7Sllp.png`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
  fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
  const image = await loadImage(avatar);
  const baseImage = await loadImage(pathImg);
  const canvas = createCanvas(baseImage.width, baseImage.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 10, 10, canvas.width, canvas.height);
  ctx.drawImage(image, 148, 75, 110, 110);
  ctx.font = "800 23px Arial";
  ctx.fillStyle = "#fffff";
  ctx.textAlign = "start";
  ctx.fillText(name, 280, 110);
  ctx.font = "400 23px Arial";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  let fontSize = 55;
  while (ctx.measureText(text).width > 600) {
    fontSize--;
    ctx.font = `400 ${fontSize}px Arial, sans-serif`;
  }
  const lines = await this.onStart(ctx, text, 250);
  ctx.fillText(lines.join('\n'), 280, 145);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(avatar);
  return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);
}
};