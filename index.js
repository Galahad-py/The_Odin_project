const randomArray = [`rock`, `paper`, `scissors`];


//this generates a random choice for the computer
function getComputerChoice() {
	return randomArray[Math.floor(Math.random() * randomArray.length)];
}

let playerScore;
let computerScore;
let playerSelection;
let computerSelection;

game();

//this creates a 5 round game that stores the rounds palyed and then declares the winner
function game() {
	computerScore = 0
	playerScore = 0
	for (let i = 0; i < 5; i++) {
		onUserInput();
	}
	console.log (declareWinner());

	function declareWinner() {
		if (playerScore === computerScore) {
			alert (`${playerScore} - ${computerScore} 
			tie Game!`)
			return `${playerScore} - ${computerScore} 
			tie Game!`
		} else if (playerScore > computerScore) {
			alert (`${playerScore} - ${computerScore} 
			You WIN!`)
			return (`${playerScore} - ${computerScore} 
			You WIN!!`)
		} else {
			alert (`${playerScore} - ${computerScore} 
			You LOST! Better luck Next time.`)
			(`${playerScore} - ${computerScore} 
			You LOST! Better luck Next time.`)
		}
	}
}

//this function gets the input from the user and checks if it is a valid entry
function onUserInput() {
	playerSelection = prompt(`Rock, Paper or scissors?`, );
	if ((playerSelection.toLowerCase() == `rock`) 
	|| (playerSelection.toLowerCase() == `paper`) 
	|| (playerSelection.toLowerCase() == `scissors`)) {
		console.log(playRound(playerSelection, computerSelection));
	} else {
		alert(`That is not a valid choice`)
		onUserInput();
	}
}

//this line takes the 2 parameters and returns the winner
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = getComputerChoice().toLowerCase();

	if (playerSelection == computerSelection) {
		alert(`Tie Game!`);
		return (`Tie Game!
		Computer Score: ${computerScore}
		Player Score: ${playerScore} Play again`)
    } else if ((playerSelection == `rock` && computerSelection == `scissors`) 
	|| (playerSelection == `scissors` && computerSelection == `paper`) 
	|| (playerSelection == `paper` && computerSelection == `rock`)) {
		alert(`You win! ${playerSelection} beats ${computerSelection}`)
		return `Computer Score: ${computerScore}
		Your Score: ${playerScore}`
	} else {
		alert(`You LOSE! ${computerSelection} beats ${playerSelection}`)
		return `Computer Score: ${computerScore}
		Your Score: ${playerScore}`
	}
}



