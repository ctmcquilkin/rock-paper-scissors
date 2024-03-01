const CHOICES = ['rock', 'paper', 'scissors'];
let computerSelection = '';
let playerSelection = '';
let playerWins = 0;
let computerWins = 0;

function getPlayerSelection() {
    let playerSelection = window.prompt('Choose: Rock, Paper, or Scissors', '');
    return playerSelection.toLowerCase();
}

function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    return computerSelection = CHOICES[getRandomInt(1, 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    console.log('Player Selection: ' + playerSelection + " Computer Selection: " + computerSelection);
    switch(playerSelection) {
        case 'rock':
            if ( computerSelection === 'scissors' ) {
                console.log('You won! Rock beats Scissors');
                playerWins++;
                return 'You won! Rock beats Scissors';
            } else if ( computerSelection === 'paper' ) {
                console.log("You lost. Paper beats Rock");
                computerWins++;
                return "You lost. Paper beats Rock";
            } else if (computerSelection === 'rock' ) {
                console.log("It's a Tie!");
                return "It's a Tie!";
            }
        case 'paper':
            if ( computerSelection === 'rock' ) {
                console.log('You won! Paper beats Rock');
                playerWins++;
                return 'You won! Paper beats Rock';
            } else if ( computerSelection === 'scissors' ) {
                console.log("You lost. Scissors beats Paper");
                computerWins++;
                return "You lost. Scissors beats Paper";
            } else if (computerSelection === 'paper' ) {
                console.log("It's a Tie!");
                return "It's a Tie!";
            }
        case 'scissors':
            if ( computerSelection === 'paper' ) {
                console.log('You won! Scissors beats Paper');
                playerWins++;
                return 'You won! Scissors beats Paper';
            } else if ( computerSelection === 'rock' ) {
                console.log("You lost. Rock beats Scissors");
                computerWins++;
                return "You lost. Rock beats Scissors";
            } else if (computerSelection === 'scissors' ) {
                console.log("It's a Tie!");
                return "It's a Tie!";
            }
    }
  }

function playGame() {
    let winner = '';
    for ( let i = 1; i < 6; i++ ) {
        console.log("Rock Paper Sissors! Round: " + i);
        playRound(playerSelection, computerSelection);
        
    }
    if ( playerWins > computerWins ) {
        winner = 'You';
    } else {
        winner = 'The computer';
    }
    console.log('Game over. ' + winner + ' won.');
}
playGame()