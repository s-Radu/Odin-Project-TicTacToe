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
    }

    alert(`Player 1 is ${PLAYER1.marker} and Player 2 is ${PLAYER2.marker}`);
  }

  //* Announce player choice and player turn
  // > Needs improving with text from from selected player's markers and when each turn is
  //< Chould add an effect for stacking text ( as notifications ) for each movement, or just add notifications like event if the function is triggered many times

  //* cache DOM
  const test = document.querySelectorAll(".gameCard");
  const players = document.querySelectorAll(".player");
  const resetGame = document.querySelector("#restartGame");

  // * bind events
  test.forEach((card) => {
    card.addEventListener("click", _toggleXO);
  });

  players.forEach((player) => {
    player.addEventListener("click", _storePlayer);
  });

  resetGame.addEventListener("click", () =>
    _announcements("sarmale prajite sa ma cac pe mine")
  );

  function _toggleXO(e) {
    const card = e.target;
    //   if (!card.hasChildNodes()) { //* Both of these conditions work, initially tried with reverse condition on hasChildNodes, but encountered an error where I had empty spaces in HTML and it would not work, because hasChildNodes checks for empty spaces as well ( white space ).
    if (card.textContent.trim() === "") {
      const element = document.createElement("p");
      element.innerText = "X";
      card.appendChild(element);
    } else {
      console.log("You can't park there mate");
    }
  }
})();
