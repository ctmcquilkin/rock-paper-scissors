const CHOICES = ['rock', 'paper', 'scissors'];
let computerSelection = '';
let playerSelection = '';
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#info'); 

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    // alert(button.id);
    playRound(button.id, computerChoice);
  });
});

function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    return computerSelection = CHOICES[getRandomInt(1, 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    let selections = document.createElement('p');
    let winner = document.createElement('p');
    selections.textContent = 'Player Selection: ' + playerSelection + " Computer Selection: " + computerSelection;
    container.appendChild(selections);
    container.appendChild(winner);
    switch(playerSelection) {
        case 'rock':
            if ( computerSelection === 'scissors' ) {
                winner.innerHTML = 'You won! Rock beats Scissors';
                playerWins++;
                return 'You won! Rock beats Scissors';
            } else if ( computerSelection === 'paper' ) {
                winner.innerHTML = "You lost. Paper beats Rock";
                computerWins++;
                return "You lost. Paper beats Rock";
            } else if (computerSelection === 'rock' ) {
                winner.innerHTML = "It's a Tie!";
                return "It's a Tie!";
            }
        case 'paper':
            if ( computerSelection === 'rock' ) {
                winner.innerHTML = 'You won! Paper beats Rock';
                playerWins++;
                return 'You won! Paper beats Rock';
            } else if ( computerSelection === 'scissors' ) {
                winner.innerHTML = "You lost. Scissors beats Paper";
                computerWins++;
                return "You lost. Scissors beats Paper";
            } else if (computerSelection === 'paper' ) {
                winner.innerHTML = "It's a Tie!";
                return "It's a Tie!";
            }
        case 'scissors':
            if ( computerSelection === 'paper' ) {
                winner.innerHTML = 'You won! Scissors beats Paper';
                playerWins++;
                return 'You won! Scissors beats Paper';
            } else if ( computerSelection === 'rock' ) {
                winner.innerHTML = "You lost. Rock beats Scissors";
                computerWins++;
                return "You lost. Rock beats Scissors";
            } else if (computerSelection === 'scissors' ) {
                winner.innerHTML = "It's a Tie!";
                return "It's a Tie!";
            }
    }
  }

//   function playGame() {
//     let winner = '';
//     let score = document.createElement('p');
//     for ( let i = 1; i < 6; i++ ) {
//         // score.textContent = "Rock Paper Sissors! Round: " + i + "You: " + playerWins + "Computer: " + computerWins;
//         // container.appendChild(score);
//         playRound(playerSelection, computerSelection);
        
//     }
//     if ( playerWins > computerWins ) {
//         winner = 'You';
//     } else {
//         winner = 'The computer';
//     }
//     // score.textContent = 'Game over. ' + winner + ' won.';
//     // container.appendChild(score);
// }
// playGame()