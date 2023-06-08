/*
1. get computer choice by random
2. get player selection by promt()
3. go letters to lower case by toLowerCase()
4. return the winner
5. write a function that plays 5 rounds
*/

let playerSelection;
let computerSelection;

let player = 0;
let computer = 0;

function getPlayerChoice() {
    const input = window.prompt('Rock, paper or scissors?').toLowerCase();

    if (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        return getPlayerChoice();
    } else {
        return input;
    }
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

/*
rock > scissors
scissors > paper
paper > rock

play 1 round:
    get selections
    check the winner
    ++ to the winner's score
*/

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `frendship win! current score ${player} : ${computer}, ${playerSelection} vs ${computerSelection}`;
    } else if (
    playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        player++;
        return `you win! current score ${player} : ${computer}, ${playerSelection} beats ${computerSelection}`;
    } else {
        computer++;
        return `you lose! current score ${player} : ${computer}, ${playerSelection} beats ${computerSelection}`;
    }
}
// console.log(playRound(playerSelection, computerSelection));

/*
play 5 rounds:
    play 1 round *5
    compare scores
    return the winner
*/

function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));

    if (player === computer) {
        return `frendship win! the score ${player} : ${computer}`;
    } else if (player > computer) {
        return `you win! the score ${player} : ${computer}`;
    } else {
        return `you lose! the score ${player} : ${computer}`;
    }
}
console.log(game());