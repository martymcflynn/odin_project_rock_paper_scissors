console.log("Hello World")

const choices = ['rock', 'paper', 'scissors']

let outcome;
let humanScore = 0;
let computerScore = 0; 


const playerScoreContainer = document.querySelector("#player-score");
const computerSCoreContainer = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#results-msg");
const winnerMessage = document.querySelector("#winner-msg");
const playAgainButton = document.querySelector("#reset-game-btn");
const optionsButton = document.querySelector("#option-container");

playAgainButton.style.display = "none"

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() *(3 - 1 + 1) * 1)
    cpuChoice = choices[choiceIndex]
    return cpuChoice
}

function didPlayerWinRound(player, computer) {
    if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") ||
     (player == "scissors" && computer == "paper")) {
        return true
    }
    else if ((player == "rock" && computer == "paper") || (player == "paper" && computer == "scissors") ||
    (player == "scissors" && computer == "rock")) {
        return false
    }
    else {
        return false
    }
}

function getRoundResults(playerChoice) {
    const computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
        return "It's a tie."
    }

    roundResult = didPlayerWinRound(playerChoice, computerChoice)

    if (roundResult) {
        humanScore ++
        playerScoreContainer.innerText = humanScore
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    computerScore ++
    computerSCoreContainer.innerText = computerScore
    return `CPU wins. ${computerChoice} beats ${playerChoice}`

}


function updateResults(playerChoice) {
    resultMessage.innerText = getRoundResults(playerChoice)

    console.log(humanScore)
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            console.log(`You won! Score was ${humanScore} to ${computerScore}`)
            winnerMessage.innerText = `You won! Score was ${humanScore} to ${computerScore}`
        }
        
        if (computerScore === 5) {
            console.log(`You lost. Score was ${computerScore} to ${humanScore}`)
            winnerMessage.innerText = `You lost. Score was ${computerScore} to ${humanScore}`
        }

        playAgainButton.style.display = "block"
        optionsButton.style.display = "none"
    }

}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function() {
    updateResults("rock")
})

paperButton.addEventListener("click", function(){
    updateResults("paper")
})

scissorButton.addEventListener("click", function () {
  updateResults("scissors");
});



function resetGame(){
    resultMessage.innerText = "";
    winnerMessage.innerText = ""
    playerScoreContainer.innerText = 0
    computerSCoreContainer.innerText = 0
    playAgainButton.style.display = "none"
    optionsButton.style.display = "block"
}

playAgainButton.addEventListener("click", resetGame);
