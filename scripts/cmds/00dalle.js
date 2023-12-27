const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
  name: "Dalle",
  version: "1.0.0",
  credits: "August Quinn",
  description: "Generate images with DALL-E.",
  commandCategory: "AI",
  usage: "/dalle [text]",
  cooldowns: 5,
  requiredArgs: 1,
};

module.exports.run = async function ({ args, event, api }) {
  try {
    const text = args.join(" ");

    const apiUrl = 'http://openai-dall-e.august-quinn-api.repl.co/generate-images';
    const response = await axios.post(apiUrl, { text, num_images: 4 });

    const imgData = [];

    for (let i = 0; i < response.data.openai.items.length; i++) {
      const imgUrl = response.data.openai.items[i].image_resource_url;

      if (imgUrl) {
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', `dalle_${i + 1}.jpg`);

        await fs.outputFile(imgPath, imgResponse.data);
        imgData.push(fs.createReadStream(imgPath));

        if (fs.existsSync(imgPath)) {
          await fs.unlink(imgPath);
        }
      }
    }

    if (imgData.length > 0) {
      await api.sendMessage({
        body: `Generated Images with DALL-E:`,
        attachment: imgData
      }, event.threadID);
    } else {
      await api.sendMessage('No images generated.', event.threadID);
    }

  } catch (error) {
    console.error(error);
    await api.sendMessage(`Image generation failed!\nError: ${error.message}`, event.threadID);
  }
};
