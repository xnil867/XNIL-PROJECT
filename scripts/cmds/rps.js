module.exports = {
  config:{
    name: "rps",
    version: "1.0.0",
    hasPermission: 0,
    author: "Kaizen",
    shortDescription: {
      en: "Play the game of jak en poy with the computer"
    },
    longDescription: {
      en: ""
    },
    commandCategory: "Utility",
    usage: "rps rock/paper/scissors",
    cooldowns: 3
},

onStart: async function({ api, event, args }) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (!args || args.length === 0) {
        api.sendMessage("Please provide your choice of 'rock', 'paper', or 'scissors'", event.threadID);
        return;
    }

    let userChoice = args[0];
    
    if (!userChoice || !choices.includes(userChoice)) {
        api.sendMessage("Invalid choice, please choose either 'rock', 'paper', or 'scissors'", event.threadID);
        return;
    }
    
    if (userChoice === computerChoice) {
        api.sendMessage("It's a tie! Both you and the computer chose " + userChoice, event.threadID);
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        api.sendMessage("You win! Rock beats scissors", event.threadID);
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        api.sendMessage("You win! Paper beats rock", event.threadID);
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        api.sendMessage("You win! Scissors beats paper", event.threadID);
    } else {
        api.sendMessage("You lose! " + computerChoice + " beats " + userChoice, event.threadID);
    }
}
  };