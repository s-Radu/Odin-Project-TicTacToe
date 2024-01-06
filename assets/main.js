import "./layout.js";
import { _announcements } from "./plpayerMove.js";

const game = (function () {
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
  // let playerAsigned = false;

  function _storePlayer(e) {
    const chosenMarker = e.target.textContent;
    if (!PLAYER1) {
      PLAYER1 = _createPlayer("Player 1", chosenMarker);
      PLAYER1.marker === "X"
        ? (PLAYER2 = _createPlayer("Player 2", "O"))
        : (PLAYER2 = _createPlayer("Player 2", "X"));
      alert(`Player 1 is ${PLAYER1.marker} and Player 2 is ${PLAYER2.marker}`);
    } else {
      alert("Players already chosen");
    }
  }

  //* Announce player choice and player turn
  //< Chould add an effect for stacking text ( as notifications ) for each movement, or just add notifications like event if the function is triggered many times

  //* cache DOM
  const gameCard = document.querySelectorAll(".gameCard");
  const players = document.querySelectorAll(".player");
  const resetGame = document.querySelector("#restartGame");

  // * bind events
  gameCard.forEach((card) => {
    card.addEventListener("click", _toggleXO);
  });

  players.forEach((player) => {
    player.addEventListener("click", _storePlayer);
  });

  //> Add hover effect for game card with player's choice
  gameCard.forEach((card) => {
    card.addEventListener("mouseenter", _hoverEffect);
  });
  //> Remove hover effect from game card

  //* Hover effect for player choice

  function _hoverEffect(e) {
    e.textContent = PLAYER1.marker;
    console.log("something is off boss");
  }

  function _toggleXO(e) {
    const card = e.target;
    //   if (!card.hasChildNodes()) { //* Both of these conditions work, initially tried with reverse condition on hasChildNodes, but encountered an error where I had empty spaces in HTML and it would not work, because hasChildNodes checks for empty spaces as well ( white space ).
    if (card.textContent.trim() === "") {
      const element = document.createElement("p");
      if (PLAYER1.marker === undefined) {
        alert("Please choose a marker");
      } else {
        element.innerText = PLAYER1.marker;
      }
      card.appendChild(element);
    } else {
      console.log("You can't park there mate");
    }
  }
})();
