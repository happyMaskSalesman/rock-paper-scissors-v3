const buttons = document.querySelector('#buttons');

const content = document.querySelector('#content');
const round = document.querySelector('#round');
const results = document.querySelector('#results');
const score = document.querySelector('#scoreboard');
const endGame = document.querySelector('#end-game');
const newGame = document.querySelector('#new-game');

const para = document.createElement('p');

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

buttons.addEventListener('click', listener);

function listener(e) {
    let input = e.target.id;

    switch(input) {
        case 'rock':
            playRound('ROCK', getComputerChoice());
            gameOver();
            break;
        case 'paper':
            playRound('PAPER', getComputerChoice());
            gameOver();
            break;
        case 'scissors': 
            playRound('SCISSORS', getComputerChoice());
            gameOver();
            break;
    };
};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10); //Random selection between 1 and 9
    if (randomNumber <= 3) {
        return "ROCK";
    } else if (randomNumber >= 7) {
        return "PAPER";
    } else {
        return "SCISSORS";
    };
};

function playRound(playerSelection, computerSelection) {

    results.textContent = `You chose: ${playerSelection}. Computer chose: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;
        para.textContent = "It's a tie!";
        results.appendChild(para);
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        return;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"
    || playerSelection === "PAPER" && computerSelection === "SCISSORS"
    || playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        rounds += 1;
        computerScore += 1;
        round.textContent = `Round: ${rounds}`;
        para.textContent = `You lose. ${computerSelection} beats ${playerSelection}`;
        results.appendChild(para);
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        return;
    } else {
        rounds += 1;
        playerScore += 1;
        round.textContent = `Round: ${rounds}`;
        para.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        results.appendChild(para);
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        return;
    };
};

function gameOver() {

    const newGameButton = document.createElement('button');

    newGameButton.setAttribute('id', 'new-game');
    newGameButton.textContent = "Play again?"
    newGameButton.addEventListener('click', () => {
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        round.textContent = '';
        results.textContent = '';
        score.textContent = '';
        endGame.textContent = '';
        content.removeChild(newGameButton);
        buttons.addEventListener('click', listener);
    });
    

    if (playerScore === 5) {
        endGame.textContent = "Congrats! You beat the computer!";
        content.appendChild(newGameButton);
        buttons.removeEventListener('click', listener);
    } else if (computerScore === 5) {
        endGame.textContent = "Sorry, you were beaten by the computer :("
        content.appendChild(newGameButton);
        buttons.removeEventListener('click', listener);
    } else {
        return
    };
};