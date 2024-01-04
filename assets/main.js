import "./layout.js";

const test = document.querySelectorAll(".gameCard");

function toggleXO(e) {
  const card = e.target;
  if (card.classList.contains("after:content-['X']")) {
    card.classList.remove("after:content-['X']");
    card.classList.add("after:content-['O']");
  } else {
    card.classList.remove("after:content-['O']");
    card.classList.add("after:content-['X']");
  }
}

test.forEach((card) => {
  card.addEventListener("click", toggleXO);
});
