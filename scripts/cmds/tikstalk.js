module.exports = {
  config: {
    name: "tikstalk",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`Add text`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://manhict.tech/api/tikInfo?query=${encodeURIComponent(tip)}&apikey=lgG765KO`).then(res =>
    {
      let bio = res.data.result.signature,
        v = res.data.result.verified,
        nn = res.data.result.nickname,
        uid = res.data.result.uniqueId,
        f = res.data.result.followingCount,
        f1 = res.data.result.followerCount,
        heart = res.data.result.heartCount,
        c = res.data.result.videoCount
      var avatar = res.data.result.avatar;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `◈Username: ${tip}\n\n◈ Nickname: ${nn}\n\n◈ Bio: ${bio}\n\n◈ Following: ${f} \n\n◈Followers: ${f1}\n\n◈ Heart Count: ${heart}\n\n◈ Unique ID: ${uid}\n\n◈ Content Count: ${c}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(avatar)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
},
};