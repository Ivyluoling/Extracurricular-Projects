const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById(
  "configuration-overlay"
);
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("active-game");
const gameOverElement = document.getElementById("game-over");

//button variables
const nameCancelButton = document.getElementById("cancelbutton");
const editPlayerButton1 = document.getElementById("edit-player-1-btn");
const editPlayerButton2 = document.getElementById("edit-player-2-btn");
const startGameButton = document.getElementById("startgame");
const nameErrorButton = document.getElementById("name-error-button");

editPlayerButton1.addEventListener("click", openPlayerConfig);
editPlayerButton2.addEventListener("click", openPlayerConfig);

nameCancelButton.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameButton.addEventListener("click", startNewGame);
nameErrorButton.addEventListener("click", backToConfigName);

//game board
// const gameFieldElements = document.querySelectorAll("#game-board li");

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }
//alternative way
const gameBoardElement = document.getElementById("game-board");

gameBoardElement.addEventListener("click", selectGameField);

const activePlayerNameElement = document.getElementById("active-player-name");
