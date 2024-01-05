import "./layout.js";

const test = document.querySelectorAll(".gameCard");

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

test.forEach((card) => {
  card.addEventListener("click", toggleXO);
});
