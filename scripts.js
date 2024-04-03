const CHOICES = ['rock', 'paper', 'scissors'];
let computerSelection = '';
let playerSelection = '';
let playerWins = 0;
let computerWins = 0;
let round = 1;

let score = document.createElement('p');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#info'); 

let winner = document.createElement('p');
let selections = document.createElement('p');

score.textContent = 'Round #: ' + round + ' Computer: ' + computerWins + ' You: ' + playerWins;
container.appendChild(score);

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
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      const rndInt = randomIntFromInterval(0, 2)
      return computerSelection = CHOICES[rndInt];
}

function playRound(playerSelection, computerSelection) {
    selections.textContent = 'You selected: ' + playerSelection + " The Computer selected: " + computerSelection;
    container.appendChild(selections);
    container.appendChild(winner);
    if (round === 5) {
        winner.innerHTML = '';
        playGame();
        return;
    };
    switch(playerSelection) {
        case 'rock':
            if ( computerSelection === 'scissors' ) {
                winner.innerHTML = 'You won! Rock beats Scissors';
                playerWins++;
                playGame();
                return 'You won! Rock beats Scissors';
            } else if ( computerSelection === 'paper' ) {
                winner.innerHTML = "You lost. Paper beats Rock";
                computerWins++;
                playGame();
                return "You lost. Paper beats Rock";
            } else if (computerSelection === 'rock' ) {
                winner.innerHTML = "It's a Tie!";
                playGame();
                return "It's a Tie!";
            }
        case 'paper':
            if ( computerSelection === 'rock' ) {
                winner.innerHTML = 'You won! Paper beats Rock';
                playerWins++;
                playGame();
                return 'You won! Paper beats Rock';
            } else if ( computerSelection === 'scissors' ) {
                winner.innerHTML = "You lost. Scissors beats Paper";
                computerWins++;
                playGame();
                return "You lost. Scissors beats Paper";
            } else if (computerSelection === 'paper' ) {
                winner.innerHTML = "It's a Tie!";
                playGame();
                return "It's a Tie!";
            }
        case 'scissors':
            if ( computerSelection === 'paper' ) {
                winner.innerHTML = 'You won! Scissors beats Paper';
                playerWins++;
                playGame();
                return 'You won! Scissors beats Paper';
            } else if ( computerSelection === 'rock' ) {
                winner.innerHTML = "You lost. Rock beats Scissors";
                computerWins++;
                playGame();
                return "You lost. Rock beats Scissors";
            } else if (computerSelection === 'scissors' ) {
                winner.innerHTML = "It's a Tie!";
                playGame();
                return "It's a Tie!";
            }
    }
  }

function playGame() {
    let winner = '';
    round++;
    score.textContent = 'Round #: ' + (round - 1) + ' Computer wins: ' + computerWins + ' Your wins: ' + playerWins;

    if (round === 6) {
        selections.textContent = 'Game over'
        round = 1;
        if (playerWins > computerWins) {
            score.textContent = 'You won the game.' + ' Computer: ' + computerWins + ' You: ' + playerWins;
            winner.textContent = '';
        } else {
            score.textContent = 'The computer won the game.' + ' Computer: ' + computerWins + ' You: ' + playerWins;
            winner.textContent = '';
        };
    };
};