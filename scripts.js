
let computerSelection = '';
let playerSelection = '';
let choices = ['rock', 'paper', 'scissors'];
function getPlayerSelection() {
    let playerSelection = window.prompt('Choose: Rock, Paper, or Scissors', '');
    return playerSelection.toLowerCase();
}

function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    return computerSelection = choices[getRandomInt(1, 3)];
}
console.log('Computer Choice: ' + getComputerChoice());

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    console.log('Player Selection: ' + playerSelection + " Computer Selection: " + computerSelection);
    switch(playerSelection) {
        case 'rock':
            if ( computerSelection === 'scissors' ) {
                console.log('You won! Rock beats Scissors');
                return 'You won! Rock beats Scissors';
            } else if ( computerSelection === 'paper' ) {
                console.log("You lost. Paper beats Rock");
                return "You lost. Paper beats Rock";
            } else if (computerSelection === 'rock' ) {
                console.log("It's a Tie!");
                return "It's a Tie!";
            }
        case 'paper':
            if ( computerSelection === 'rock' ) {
                console.log('You won! Paper beats Rock');
                return 'You won! Paper beats Rock';
            } else if ( computerSelection === 'scissors' ) {
                console.log("You lost. Scissors beats Paper");
                return "You lost. Scissors beats Paper";
            } else if (computerSelection === 'paper' ) {
                console.log("It's a Tie!");
                return "It's a Tie!";
            }
        case 'scissors':
            if ( computerSelection === 'paper' ) {
                console.log('You won! Scissors beats Paper');
                return 'You won! Scissors beats Paper';
            } else if ( computerSelection === 'rock' ) {
                console.log("You lost. Rock beats Paper");
                return "You lost. Rock beats Paper";
            } else if (computerSelection === 'scissors' ) {
                console.log("It's a Tie!");
                return "It's a Tie!";
            }
    }
  }

playRound(playerSelection, computerSelection);
// playGame will play a five round game and keep score and report the winner or loser at the end
// function playGame() {
//     let playerWins = 0;
//     let computerWins = 0;
//     let winner = '';
//     for ( let i = 1; i < 6; i++ ) {
//         console.log("Rock Paper Sissors! Round: " + i);
//         getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     }
//     if ( playerWins > computerWins ) {
//         winner = 'You';
//     } else {
//         winner = 'The computer';
//     }
//     console.log('Game over' + winner + 'Won');
    
// }
// playGame()
  