
const computerSelection = getComputerChoice();
let playerSelection = '';
// function getPlayerSelection to get player's selection, use prompt() and make playerSelection case-insensitive.  
function getPlayerSelection() {
    let playerSelection = window.prompt('Choose: Rock, Paper, or Scissors', '');
    return playerSelection.toLowerCase();
}


// function getComputerChoice will randomly return either 'Rock,' 'Paper,' or 'Scissors.'
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    switch(choice) {
        case 1:
            return 'rock';
        case 2:
            return 'rock';
        case 3: 
            return 'rock';
        case 4: 
            return 'paper';
        case 5: 
            return 'paper';
        case 6: 
            return 'paper';
        case 7: 
            return 'scissors';
        case 8: 
            return 'scissors';
        case 9: 
            return 'scissors';
    }
}

// playRound is a function that plays a single round of Rock Paper Scissors. The function should take two paramters 
// - the playerSelection and computerSelection and then reuturn a string that declares the winner or tie of the round like so: 
// 'You Lose! Paper beats Rock'
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    console.log('Player Selection: ' + playerSelection + " Computer Selection: " + computerSelection);
    // your code here!
    if ( playerSelection === 'rock' && computerSelection === 'sissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You won!');
        return 'You won!';
    } else if ( playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors' ) {
        console.log('You lost');
        return 'You lost';
    } else {
        console.log("It's a tie!")
        return "It's a tie";
    }

    // console.log('Player: ' + playerSelection + 'Computer:' + computerSelection);
    // if ( playerSelection === computerSelection ) {
    //     return "It's a tie!";
    // } else if ( playerSelection === 'rock' && computerSelection === 'paper') {
    //     return 'You Lose! Paper beats Rock';
    // } else if ( playerSelection === 'rock' && computerSelection === 'scissors') {
    //     return 'You won! Rock beats Sissors';
    // } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ) {
    //     return 'You won! Sissors beats Paper';
    // } else if ( playerSelection === 'scissors' && computerSelection === 'rock' ) {
    //     return 'You lost. Rock beats Sissors';
    // } else if ( playerSelection === 'paper' && computerSelection === 'rock' ) {
    //     return 'You won! Paper beats Rock';
    // } else if ( playerSelection === 'paper' && computerSelection === 'scissors' ) {
    //     return 'You lost. Paper beats Sissors';
    // }
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
  