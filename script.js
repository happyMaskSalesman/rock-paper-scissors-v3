let playerScore = 0;
let computerScore = 0;

//Randomly selects rock, paper, scissors for computer 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 3) {
        return "ROCK";
    } else if (randomNumber >= 7) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

//Executes one round
function playRound(playerSelection, computerSelection) {
    
    console.log("You chose: " + playerSelection + ". Computer chose: " + computerSelection);

    if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        return "It's a tie!";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore += 1;
        return "You lose. Paper beats rock.";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore += 1;
        return "You win! Rock beats paper!";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore += 1;
        return "You win! Paper beats rock!";
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        return "It's a tie!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore += 1;
        return "You lose. Scissors beats paper.";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1;
        return "You lose. Rock beats scissors";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore += 1;
        return "You win! Scissors beats paper!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return "It's a tie!";
    }
}
//Executes one game
function game() {

    for (let i = 1; i <= 6; i++) {
        if (i <= 5) {
            console.log(playRound(prompt("Choose! Rock, paper, or scissors?", '').toUpperCase(), getComputerChoice()));
            console.log("Your Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else {
            if (playerScore > computerScore) {
                console.log("You win! Congrats!");
            } else if (playerScore < computerScore) {
                console.log("Sorry, you lost...");
            } else {
                console.log("TIE MATCH");
            }
        }
    }
}

game();