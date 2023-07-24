const playerSelectionDisplay = document.getElementById('player-selection')
const computerSelectionDisplay = document.getElementById('computer-selection')
const resultDisplay = document.getElementById('result')
const possibleSelections = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')
let playerSelection
let computerSelection
let result
let score
let player = 0
let computer = 0

possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = playerSelection
    computerSelection = getComputerChoice()
    computerSelectionDisplay.innerHTML = computerSelection
    result = playRound(playerSelection, computerSelection)
    resultDisplay.innerHTML = result
    score = `${player} : ${computer}`
    scoreDisplay.innerHTML = score
}))

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)
    
    if (randomNum === 0) {
        return 'rock'
    } else if (randomNum === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (player >= 5 || computer >= 5) {
        if (player > computer) {
            return `Player win! The score is ${player} : ${computer}`
        } else {
            return `Computer win! The score is ${player} : ${computer}`
        }
    } else if (playerSelection === computerSelection) {
        return 'draw!'
    } else if (
    playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        player++;
        return 'player win!'
    } else {
        computer++;
        return 'computer win!'
    }
}