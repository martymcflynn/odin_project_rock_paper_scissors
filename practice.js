console.log("Hello World")


// Get the players choice for the hand

const choices = ['rock', 'paper', 'scissors']

let outcome;
let humanScore = 0;
let computerScore = 0; 

function getHumanChoice(){
    userInput = prompt("Rock, Paper, or Scissors?").toLowerCase()
    return userInput
}

function getComputerChoice() {
    // needs to randomly return rock, paper, or scissors
    let choiceIndex = Math.floor(Math.random() *(3 - 1 + 1) * 1)
    cpuChoice = choices[choiceIndex]
    return cpuChoice
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") ||
     (humanChoice == "scissors" && computerChoice == "paper")) {
        outcome = "You won round."
        humanScore ++
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") ||
     (humanChoice == "scissors" && computerChoice == "rock")) {
        outcome = "CPU won round."
        computerScore ++
    }
    else {
        outcome = "Tie"}
    console.log(outcome)
}

function playGame() {
    let rounds = 1
    while (rounds <=5) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
        console.log(`Human Score = ${humanScore}`)
        console.log(`Computer Score = ${computerScore}`)
        rounds ++
    }

    if (computerScore > humanScore) {
        return "The computer is the winner"
    }
    else if (computerScore == humanScore) {
        return "Tie!"
    }
    else {
        return "You beat the computer!"
    }
}

console.log(playGame())



