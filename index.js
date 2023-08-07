// User input module
const readline = require("readline")

// Initialize readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let computerMove = Math.round(Math.random() * 2)
let playerScore = 0
let computerScore = 0

// Process user input
function processInput(input) {
    let playerMove = input.toLowerCase()
    if (playerMove == "rock") {
        playerMove = 0
    }
    else if (playerMove == "paper") {
        playerMove = 1
    }
    else if (playerMove == "scissors") {
        playerMove = 2
    }

    if (playerMove == computerMove) {
        console.log("It's a tie!")
    }
    else if (playerMove == 0 && computerMove == 2) {
        console.log("Computer played scissors. You win!")
        playerScore++
    }
    else if (playerMove == 1 && computerMove == 0) {
        console.log("Computer played rock. You win!")
        playerScore++
    }
    else if (playerMove == 2 && computerMove == 1) {
        console.log("Computer played paper. You win!")
        playerScore++
    }
    else {
        console.log("You lose!")
        computerScore++
    }

    computerMove = Math.round(Math.random() * 2)
    console.log(`Player ${playerScore} - ${computerScore} Computer`)

    if (playerScore == 3) {
        console.log("You won best 2 out of 3!")
        process.exit(0)
    } else if (computerScore == 3) {
        console.log("You lost best 2 out of 3!")
        process.exit(0)
    }

    console.log("Lets play again! Enter rock, paper, or scissors:")
}

console.log("Enter rock, paper, or scissors:")

// Listen for user input
rl.on("line", processInput)