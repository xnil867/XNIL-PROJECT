module.exports = {
  config: {
    name: "degreeconvert",
    author: "who is tokodori", // Convert To Goat By Tokodori
    category: "BOT",
    guide: "{pn}",
  },

  conversions: {
    "rankine": 5/9,
    "degreecelsius": 1,
    "degreereaumur": 5/4,
    "degreefahrenheit": 5/9,
    "kelvin": 1,
  },

  shortestAbbreviations: {
    "degreerankine": "°R",
    "degreecelsius": "°C",
    "degreereaumur": "°Re",
    "degreefahrenheit": "°F",
    "kelvin": "K",
  },

  onStart({ api, event, args }) {
    if (args.length !== 4 || args[2].toLowerCase() !== "to") {
      return api.sendMessage("⚠ Invalid format! Use: <value> <source unit> to <target unit>", event.threadID);
    }

    const value = parseFloat(args[0]);
    if (isNaN(value)) {
      return api.sendMessage("⚠ Invalid value provided.", event.threadID);
    }

    const sourceUnit = args[1].toLowerCase();
    const targetUnit = args[3].toLowerCase();

    const sourceUnitFull = Object.keys(this.shortestAbbreviations).find(key => this.shortestAbbreviations[key] === sourceUnit);
    const targetUnitFull = Object.keys(this.shortestAbbreviations).find(key => this.shortestAbbreviations[key] === targetUnit);

    const useSourceUnit = sourceUnitFull || this.conversions.hasOwnProperty(sourceUnit);
    const useTargetUnit = targetUnitFull || this.conversions.hasOwnProperty(targetUnit);

    if (!useSourceUnit || !useTargetUnit) {
      return api.sendMessage("⚠ Invalid units provided.", event.threadID);
    }

    const conversionFactor = this.conversions[targetUnitFull || targetUnit] / this.conversions[sourceUnitFull || sourceUnit];
    const convertedValue = value * conversionFactor;

    const sourceAbbreviation = this.shortestAbbreviations[sourceUnitFull || sourceUnit];
    const targetAbbreviation = this.shortestAbbreviations[targetUnitFull || targetUnit];

    const computationFormula = `${value}${sourceAbbreviation} → ${convertedValue.toFixed(6)}${targetAbbreviation}`;
    const resultMessage = `🌡 𝗗𝗲𝗴𝗿𝗲𝗲 𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻:\n\n${computationFormula}`;

    api.sendMessage(resultMessage, event.threadID);
  },
};