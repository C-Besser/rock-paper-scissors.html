const gameChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

let computerSelection = getComputerChoice(gameChoices);

console.log(computerSelection);

  
//create function for getComputerChoice
//assign getComputerChoice to computerSelection

let playerSelection = prompt("Let's Play! Choose One: ROCK, PAPER, SCISSORS");
console.log(playerSelection);

//receive input from user of Rock Paper or Scissors
//assign user input to playerSelection
//make selection case-insensitive

//compare playerSelection to computerSelection

//return string declaring winner

//function game() to reset game 5 Time

//keep count of games won and lost
