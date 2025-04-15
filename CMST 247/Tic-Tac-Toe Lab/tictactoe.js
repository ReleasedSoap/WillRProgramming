let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
	// clear the timeout of the computer and set back to 0
	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;

	buttons = getGameBoardButtons();
	for(let gameButton of buttons){
	gameButton.innerHTML = "";
	gameButton.className="";
	gameButton.removeAttribute("disabled");
	}
	playerTurn = true;

	document.getElementById("turnInfo").innerHTML = "Your turn";
}

function boardButtonClicked(button) {
	// TODO: Complete the function
	// if playerTurn = true
	 if (playerTurn) {
		// button inner html = X
		button.innerHTML = "X";
		// add the class
		button.classList.add("x");
		// add the attribute (in the same section)
		// button node
		button.disabled = true;
	}
	switchTurn();
}

function switchTurn() {
// 	// TODO: Complete the function
// call the function 
   	checkForWinner();
	let gameState = checkForWinner();
	playerTurn=!playerTurn;
	// if more moves
  	if (gameState === gameStatus.MORE_MOVES_LEFT) {
	// if computers turn
		if (!playerTurn) {
	 	document.getElementById("turnInfo").innerHTML = "Computer's turn";
	  	makeComputerMove();
	 	} else if (playerTurn) {
	 		clearTimeout(computerMoveTimeout);
	 		computerMoveTimeout = 0;
	 		document.getElementById("turnInfo").innerHTML = "Your turn";
			}
	 	} else if (gameState === gameStatus.HUMAN_WINS) {
		playerTurn = false;
	 	document.getElementById("turnInfo").innerHTML = "You win!";
	 	// if the computer wins
	  } else if (gameState === gameStatus.COMPUTER_WINS) {
		clearTimeout(computerMoveTimeout);
		computerMoveTimeout = 0;
	 	document.getElementById("turnInfo").innerHTML = "Computer wins!";
	 	// if the game is a draw
	  } else if (gameState === gameStatus.DRAW_GAME) {
	 	document.getElementById("turnInfo").innerHTML = "Draw game";
	  
	}
}

function makeComputerMove() {
	//TODO: Complete the function
	// retrieve only the availible buttons
	clearTimeout(computerMoveTimeout);
	setTimeout(computerMoveTimeout,1000);
	let gameBoard = getGameBoardButtons();
	let availableButtons;
	let chosenButton;
	for(let buttons of gameBoard){
		if(!buttons.disabled){
			availableButtons = buttons;
		}
		if (computerMoveTimeout = 0){
			Math.random(availableButtons) = chosenButton;
			chosenButton.innerHTML = "O";
			chosenButton.classList.add("o");
			chosenButton.disabled = true;
		}
	}
 
 switchTurn();
}