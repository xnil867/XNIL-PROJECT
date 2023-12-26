module.exports = {
  config: {
    name: "sana",
    version: "1.0",
    author: "fritz",
    countDown: 5,
    role: 0,
    shortDescription: "No Prefix",
    longDescription: "No Prefix",
    category: "FILES",
  },
  onStart: async function() {},
  onChat: async function({ event, message, getLang }) {
    if (event.body && (event.body.toLowerCase() === "agoi" || event.body.toLowerCase() === "agui")) {
      return message.reply(`talaga ba? edi sana pina billboard, powerpoint, dineclimite, pinoster, inislogan, pinaprint, pina xerox, chinismis, pinalapida, pinabaranggay, pinapulis, pinarally, pinabroadcast, newspaper, newscast, tattoo, magazine, tarpaulin, lettering, calligraphy, winallpaper, nilockscreen, cinoverphoto mo yang mga pinagsasabi mo talaga ba? edi sana pina billboard, powerpoint, dineclimite, pinoster, inislogan, pinaprint, pina xerox, chinismis, pinalapida, pinabaranggay, pinapulis, pinarally, pinabroadcast, newspaper, newscast, tattoo, magazine, tarpaulin, lettering, calligraphy, winallpaper, nilockscreen, cinoverphoto mo yang mga pinagsasabi mo talaga ba? edi sana pina billboard, powerpoint, dineclimite, pinoster, inislogan, pinaprint, pina xerox, chinismis, pinalapida, pinabaranggay, pinapulis, pinarally, pinabroadcast, newspaper, newscast, tattoo, magazine, tarpaulin, lettering, calligraphy, winallpaper, nilockscreen, cinoverphoto, pina kmjs mo yang mga pinagsasabi mong ungoy ka`);
    }
  },
};