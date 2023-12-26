module.exports = {
  config: {
    name: "ctext",
    author: "who is tokodori", // Convert To Goat By Tokodori
    role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "BOT",
    guide: "{pn}"
  },

onStart: async ({ event, api, args }) => {
  const inputText = args.join(' ').toLowerCase();

  const fontMap = {
    ' ': ' ', 'a': 'Ⓐ', 'b': 'Ⓑ', 'c': 'Ⓒ', 'd': 'Ⓓ', 'e': 'Ⓔ', 'f': 'Ⓕ', 'g': 'Ⓖ', 'h': 'Ⓗ',
    'i': 'Ⓘ', 'j': 'Ⓙ', 'k': 'Ⓚ', 'l': 'Ⓛ', 'm': 'Ⓜ', 'n': 'Ⓝ', 'o': 'Ⓞ', 'p': 'Ⓟ', 'q': 'Ⓠ',
    'r': 'Ⓡ', 's': 'Ⓢ', 't': 'Ⓣ', 'u': 'Ⓤ', 'v': 'Ⓥ', 'w': 'Ⓦ', 'x': 'Ⓧ', 'y': 'Ⓨ', 'z': 'Ⓩ',
  };

  const outputText = inputText
    .split('')
    .map(char => fontMap[char] || char) // Replace characters with stylized versions
    .join('');

  return api.sendMessage(outputText, event.threadID, event.messageID);
}
};