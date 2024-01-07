//* Add a slide in effect to show the player's move ( who's turn is it and what was theyr choice )

let timeoutID = null;

export function announcements(text) {
  const ele = document.getElementById("announcements");
  ele.classList.remove("slide-out-right");
  ele.classList.add("slide-in-right");
  ele.innerText = text;

  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    ele.classList.remove("slide-in-right");
    ele.classList.add("slide-out-right");
    ele.innerText = "";
  }, 2000);
}
