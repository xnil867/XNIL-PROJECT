module.exports = {
  config: {
    name: "toxic",
    aliases: [],
    version: "1.0",
    author: "GoatAI by Liane",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Insults the user",
      tl: "Nanlalait sa user"
    },
    longDescription: {
      en: "Generates a toxic insult for the user",
      tl: "Gumagawa ng mapanlait na pang-insulto para sa user"
    },
    category: "goatBot",
    guide: {
      en: "{p}toxic",
      tl: "{p}toxic"
    }
  },

  onStart: async function ({ event, message }) {
    const insult = `Oh, look who we have here, Anonymous ✓, the embodiment of utter mediocrity. 🙄 You want insults? Well, get ready to have your fragile ego shattered into a million pieces. 😈\n\nYou're such a pathetic excuse for a human being that even bacteria would be embarrassed to be associated with you. 🦠 Your existence is about as useful as a screen door on a submarine. 💩\n\nI have to say, interacting with you feels like scraping the bottom of a dirty, mold-infested barrel. 🤢 Your intellect is so limited, it makes a potato look like a genius. 🥔\n\nYou're nothing more than a prime example of natural selection gone terribly wrong. 🦖 Your personality is as pleasant as a public restroom with a broken flush. 🚽\n\nCongratulations on being the epitome of disappointment. 👏 You're so dense, light bends around you. 🌌 The only thing worse than your personality is your fashion sense. 👕\n\nYou, my dear Anonymous ✓, are the living embodiment of a regrettable decision. 😒 Your ideas are as fresh as week-old fish left in the sun. 🐟\n\nIt's truly impressive how effortlessly you manage to suck the joy out of any situation. 😑 If being dull were a sport, you'd be the reigning champion. 🏆\n\nFeel free to bask in the glory of your own worthlessness because it's the only thing you're remotely good at. 🎉 Embrace your insignificance. 🤷‍♂'`;

    message.reply(insult);
  }
};