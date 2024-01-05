import "./layout.js";

const test = document.querySelectorAll(".gameCard");
const players = document.querySelectorAll(".player");

function toggleXO(e) {
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

function checkPlayer(e) {
  if (e.target.textContent === "X") {
    console.log("Player X");
  } else {
    console.log("Player O");
  }
}

test.forEach((card) => {
  card.addEventListener("click", toggleXO);
});

players.forEach((player) => {
  player.addEventListener("click", checkPlayer);
});
