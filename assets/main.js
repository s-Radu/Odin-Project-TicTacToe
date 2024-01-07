import "./layout.js";
import { _announcements } from "./plpayerMove.js";

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

  function _storePlayer(e) {
    const chosenMarker = e.target.textContent;
    if (!PLAYER1) {
      PLAYER1 = _createPlayer("Player 1", chosenMarker);
      PLAYER1.marker === "X"
        ? (PLAYER2 = _createPlayer("Player 2", "O"))
        : (PLAYER2 = _createPlayer("Player 2", "X"));
      PLAYNGPLAYER = PLAYER1;
      _announcements(
        `Player 1 is ${PLAYER1.marker} and Player 2 is ${PLAYER2.marker}`
      );
    } else {
      _announcements("You can't change your marker");
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
    _announcements(`${PLAYNGPLAYER.marker}'s turn`);
    console.log(PLAYNGPLAYER);
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
      _announcements("Please select a marker before making a move.");
      return;
    }

    const card = e.target;
    if (_isValidCard(card)) {
      _makeMove(card, PLAYNGPLAYER);
      if (_checkWin(PLAYNGPLAYER.marker)) {
        _announcements(`${PLAYNGPLAYER.marker} has won the game!`);
        _endGame();
      } else {
        _swapPlayer();
      }
    } else {
      _announcements("You can't park there mate");
    }
  }
  //* End Game
  function _endGame() {
    board.length = 0;
    PLAYER1 = "";
    PLAYER2 = "";
    PLAYNGPLAYER = null;

    gameCard.forEach((card) => {
      card.removeEventListener("click", _playerMove);
    });

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
    player.addEventListener("click", _storePlayer);
  });

  resetGame.addEventListener("click", () => {
    _endGame();
    _announcements("Game has been reset");
  });
})();
