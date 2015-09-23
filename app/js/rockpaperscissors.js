////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move;
var playerMove;
var computerMove;
var winner;
var playerWins;
var computerWins;

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    playerMove = getPlayerMove(); 
    computerMove = getComputerMove(); 
    if (playerMove === computerMove) {
        winner ='tie';
        console.log('player chose ' +playerMove + ' computer chose ' + computerMove); 
    }
    else if ((playerMove==='rock' && computerMove ==='scissors') || (playerMove==='scissors' && computerMove ==='paper') || (playerMove==='paper' && computerMove ==='rock')) {
        console.log('player chose ' +playerMove + 'computer chose ' + computerMove); 
        winner = 'player'; 
    }
    else {
         console.log('player chose ' +playerMove + ' computer chose ' + computerMove); 
         winner = 'computer';
    }
    console.log(' winner is ' + winner);
    return winner; 
}

 function playToFive(playerMove, computerMove) {
    playerWins = 0;
    computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors"); 
    while ((playerWins < 5) && (computerWins <5)) {
        getWinner (); 
        if (winner==='player') {
            console.log('player +1! ');
            playerWins +=1; 
        }
        if (winner==='computer') {
          console.log('computer + 1! ');
           computerWins +=1; 
        }
        if (winner ==='tie') {
          console.log('Its a tie, play again')
        }

        console.log('the score is player: ' +playerWins + ' to computer '+ computerWins); 
    }
    
     return [playerWins, computerWins];
     
}

playToFive();