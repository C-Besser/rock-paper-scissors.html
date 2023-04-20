const gameChoices = ['rock', 'paper', 'scissors'];
//create function for getComputerChoice
//assign getComputerChoice to computerSelection

function getComputerChoice(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

let computerSelection = getComputerChoice(gameChoices);

console.log(computerSelection);

//receive input from user of Rock Paper or Scissors
//assign user input to playerSelection
//make selection case-insensitive
  

let playerSelection = prompt("Let's Play! CHOOSE ONE: rock, paper, or scissors");
console.log(playerSelection);

playerSelection = playerSelection.toLowerCase();

console.log(playerSelection);


//compare playerSelection to computerSelection

function playRound(playerSelection, computerSelection) {
  if playerSelection === computerSelection {
    return `${playerSelection} ties with ${computerSelection}!`;
  } else if playerSelection = 'rock' {
    if computerSelection = 'scissors' {
      return "You lose! Scissors beats rock!";
    }
    else computerSelection = 'paper'{
      return "You win! Rock beats paper!";
    }
} else if playerSelection = 'paper' {

}

if playerSelection === 'rock' {
  playRound();
} else if playerSelection === 'paper' {
  playRound();
} else if playerSelection === 'scissors' {
  playRound();
} else {
  alert("You did not enter a valid choice.")
}

//return string declaring winner

//function game() to reset game 5 Time

//keep count of games won and lost
