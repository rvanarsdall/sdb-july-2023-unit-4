// Game Initial Setup
let player1Total;
let player2Total;
let isPlayer1Turn;

// Grabbing Elements

// buttons
let closeButton = document.getElementById("close-btn");
let rulesButton = document.getElementById("show-rules");
let rollButton = document.getElementById("rollBtn");
let resetButton = document.getElementById("resetBtn");
// game and rules div
let infoDiv = document.getElementById("info-div");
let gameContainer = document.getElementById("container");
// dice boxes
let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");

// scoreboard
let player1score = document.getElementById("player1Scoreboard");
let player2score = document.getElementById("player2Scoreboard");

// message
let message = document.getElementById("message");

// Event Listeners
resetButton.addEventListener("click", start);

closeButton.addEventListener("click", () => {
  /* 
  - hide the info section
  - display the game container
  */
  infoDiv.style.display = "none";
  gameContainer.style.display = "block";
});

rulesButton.addEventListener("click", () => {
  /* 
    -hide the game container
    -display the info section
*/
  infoDiv.style.display = "block";
  gameContainer.style.display = "none";
});

rollButton.addEventListener("click", () => {
  //   Randomize the dice roll
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  //   Based on who's turn it is...
  /* 
- apply the random number to the player's current total
- display the dice roll to the dom for that player
- update player scoreboard with their total
- update the message on who's turn it is
- remove the active class from the player that just rolled and apply it to the player that is next
*/
  if (isPlayer1Turn) {
    player1Total += randomNumber;
    player1Dice.textContent = randomNumber;
    player1score.textContent = player1Total;
    message.textContent = "Player 2's Turn";
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    // isPlayer1Turn = false;
  } else {
    player2Total += randomNumber;
    player2Dice.textContent = randomNumber;
    player2score.textContent = player2Total;
    message.textContent = "Player 1's Turn";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    // isPlayer1Turn = true;
  }

  //   Check to see if we have a winner
  /* 
- Display the proper message "Player ___ wins"
- display the reset button and hide the roll button
*/

  if (player1Total >= 20) {
    message.textContent = "Player 1 has won!";
    resetButton.style.display = "block";
    rollButton.style.display = "none";
  } else if (player2Total >= 20) {
    message.textContent = "Player 2 has won";
    resetButton.style.display = "block";
    rollButton.style.display = "none";
  }

  isPlayer1Turn = !isPlayer1Turn;
});

function start() {
  player1Total = 0;
  player2Total = 0;
  isPlayer1Turn = true;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1score.textContent = player1Total;
  player2score.textContent = player2Total;
  message.textContent = "Player 1's Turn";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  resetButton.style.display = "none";
  rollButton.style.display = "block";
}

start();
