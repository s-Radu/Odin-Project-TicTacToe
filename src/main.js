import "./layout.js";
import { announcements } from "./plpayerMove.js";
import { updateScore } from "./score.js";

const game = (function () {
  //* cache DOM
  const gameCard = document.querySelectorAll(".gameCard");
  const players = document.querySelectorAll(".player");
  const resetGame = document.querySelector("#restartGame");

  //* create player

  function _createPlayer(name, marker) {
    return {
      name,
      marker,
    };
  }

  //* store player

  let PLAYER1 = "";
  let PLAYER2 = "";
  let PLAYNGPLAYER = null;

  function _setPlayerMarker(e) {
    const chosenMarker = e.target.textContent;
    if (!PLAYER1) {
      PLAYER1 = _createPlayer("Player 1", chosenMarker);
      PLAYER1.marker === "X"
        ? (PLAYER2 = _createPlayer("Player 2", "O"))
        : (PLAYER2 = _createPlayer("Player 2", "X"));
      PLAYNGPLAYER = PLAYER1;
      announcements(
        `Player 1 is ${PLAYER1.marker} and Player 2 is ${PLAYER2.marker}`
      );
    } else {
      announcements("You can't change your marker");
    }
  }

  //* Check card validity

  function _isValidCard(card) {
    return card.textContent.trim() === "";
  }

  //* Swap player

  function _swapPlayer() {
    PLAYNGPLAYER === PLAYER1
      ? (PLAYNGPLAYER = PLAYER2)
      : (PLAYNGPLAYER = PLAYER1);
    announcements(`${PLAYNGPLAYER.marker}'s turn`);
  }

  //* Store board and win condition

  const board = [];
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //* Check win conditions

  function _checkWin(player) {
    return winConditions.some((condition) =>
      condition.every((index) => board[index] === player)
    );
  }

  function _makeMove(card, player) {
    const element = document.createElement("p");
    element.innerText = player.marker;
    card.appendChild(element);

    //* get the index of the card
    // const index = [...card.parentNode.children].indexOf(card); //* One way of getting the index of the card, it seems a bit hard to read
    const index = parseInt(card.id, 10); //* This is a better way of getting the index of the card, it is easier to read and understand
    board[index] = player.marker;
  }

  function _playerMove(e) {
    if (!PLAYNGPLAYER) {
      announcements("Please select a marker before making a move.");
      return;
    }

    const card = e.target;
    if (_isValidCard(card)) {
      _makeMove(card, PLAYNGPLAYER);
      if (_checkWin(PLAYNGPLAYER.marker)) {
        announcements(`${PLAYNGPLAYER.marker} has won the game!`);
        updateScore(PLAYNGPLAYER);
        _endGame();
      } else {
        _swapPlayer();
      }
    } else {
      announcements("You can't park there mate");
    }
  }

  //* Reset Game

  function _resetGame(calledFromEndGame = false) {
    if (!calledFromEndGame) {
      const X = document.getElementById("X");
      const O = document.getElementById("O");
      X.textContent = 0;
      O.textContent = 0;
    }

    board.length = 0;
    PLAYER1 = "";
    PLAYER2 = "";
    PLAYNGPLAYER = null;
    _clearBoard();
  }

  //* End Game
  function _endGame() {
    _resetGame(true);

    gameCard.forEach((card) => {
      card.removeEventListener("click", _playerMove);
    });
    _clearBoard();
  }
  function _clearBoard() {
    setTimeout(() => {
      gameCard.forEach((card) => {
        card.textContent = "";
        card.addEventListener("click", _playerMove);
      });
    }, 2000);
  }

  // * bind events
  gameCard.forEach((card) => {
    card.addEventListener("click", _playerMove);
  });

  players.forEach((player) => {
    player.addEventListener("click", _setPlayerMarker);
  });

  resetGame.addEventListener("click", () => {
    _resetGame();
    announcements("Game has been reset");
  });
})();

console.log(`VH : ${window.innerHeight} VW : ${window.innerWidth}`);
console.log(
  `User's screen height is ${screen.height} and width is ${screen.width}`
);
