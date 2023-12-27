module.exports = {
	config: {
		name: "bing", // Name of command, it must be unique to identify with other commands
		version: "1.0", // Version of command
		author: "XNiL", // Author of command
		countDown: 5, // Time to wait before executing command again (seconds)
		role: 0, // Role of user to use this command (0: normal user, 1: admin box chat, 2: owner bot)
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "this is short description of command"
		}, // Short description of command
		longDescription: {
			vi: "đây là mô tả dài của lệnh",
			en: "this is long description of command"
		}, // Long description of command
		category: "Ai photo Generator", // Category of command
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "this is guide of command"
		} // Guide of command
	},

	langs: {
		vi: {
			hello: "xin chào",
			helloWithName: "xin chào, id facebook của bạn là %1"
		}, // Vietnamese language
		en: {
			hello: "hello world",
			helloWithName: "hello, your facebook id is %1"
		} // English language
	},


onStart: async function ({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    
    const { messageID, threadID } = event;
  if (!args[0]) return api.sendMessage("[ ! ] Input text.", threadID, messageID);

    let np = args.join(" ");
   if (!args.join(" ")) api.sendMessage(`creating img...`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 2000000));

 try {
    const res = await axios.get(`
https://api.nayan-project.repl.co/nayan/bing?perams=${np}`);
    var data = res.data;
    var msg = [];
    let img1 = `${res.data.Url}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/bing.jpg", Buffer.from(imgs1, "utf-8"));




    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/bing.jpg"));

    {
        msg += `✅HERE YOUR IMG `
    }

    await message.reply({
        attachment: imageStream
      });
    } catch (error) {
      console.error(error);
      if (error.message === "Timeout: Processing took longer than 20 seconds.") {
        message.reply("❌ An error occurred while processing your prompt. Please try again later");
      } else {
        message.reply("❌ An error occurred while processing your prompt. Please try again later."); 
   }
};