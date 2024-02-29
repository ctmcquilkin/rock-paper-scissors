
let choices = ['rock', 'paper', 'scissors'];
// function getPlayerSelection to get player's selection, use prompt() and make playerSelection case-insensitive.  
const playerSelection = "rock";

// function getComputerChoice will randomly return either 'Rock,' 'Paper,' or 'Scissors.'
function getComputerChoice() {
    return 'rock';
}
const computerSelection = getComputerChoice();

// playRound is a function that plays a single round of Rock Paper Scissors. The function should take two paramters 
// - the playerSelection and computerSelection and then reutrn a string that declares teh winner or tie of the round like so: 
// 'You Lose! Paper beats Rock'
function playRound(playerSelection, computerSelection) {
    // your code here!
    return playerSelection + computerSelection;
  }
  
console.log(playRound(playerSelection, computerSelection));

// playGame will play a five round game and keep score and report the winner or loser at the end
function playGame() {
    playRound();
}

  