const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "info",
    author: "Tokodori",
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "TOKODORI",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }){

 try {
const text = "🧾 | Loading owner information...";
await api.sendMessage(text, event.threadID);

      const ownerInfo = {
        name: 'TOKODORI THREADER',
        gender: 'Male',
        age: 'Unknown',
        height: 'Unknown',
        facebookLink: 'stalk moko mwa',
        nick: '🌊Hiroshima Tokodori🌊'
      };

      const bold = 'https://i.imgur.com/3AO5bEg.mp4'; // Add the missing semicolon here
      'https://i.imgur.com/vvEvsqV.mp4'; // Fix the syntax error by removing this line

      const tmpFolderPath = path.join(__dirname, 'tmp');

      if (!fs.existsSync(tmpFolderPath)) {
        fs.mkdirSync(tmpFolderPath);
      }

      const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
      const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

      fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

      const response = `
 𝖮𝗐𝗇𝖾𝗋 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝖨𝗈𝗇:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;


      await api.sendMessage({
        body: response,
        attachment: fs.createReadStream(videoPath)
      }, event.threadID, event.messageID);

      if (event.body.toLowerCase().includes('ownerinfo')) {
        api.setMessageReaction('❔', event.messageID, (err) => { }, true);
      }
    } catch (error) {
      console.error('Error in ownerinfo command:', error);
      return api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
  },

  onChat: async function ({ api, event }) {
    try {
      const lowerCaseBody = event.body.toLowerCase();

      if (lowerCaseBody === "info" || lowerCaseBody.startsWith("{p}info")) {
        await this.onStart({ api, event });
      }
    } catch (error) {
      console.error('Error in ownerinfo command:', error);
      return api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
  },
};