// User input module
const readline = require("readline")

// Initialize readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let computerMove = Math.round(Math.random() * 2)

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
    }
    else if (playerMove == 1 && computerMove == 0) {
        console.log("Computer played rock. You win!")
    }
    else if (playerMove == 2 && computerMove == 1) {
        console.log("Computer played paper. You win!")
    }
    else {
        console.log("You lose!")
    }

    process.exit(0)
}

// Listen for user input
rl.on("line", processInput)