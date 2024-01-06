//* Add a slide in effect to show the player's move ( who's turn is it and what was theyr choice )

export function _announcements(text) {
  const ele = document.getElementById("announcements");
  ele.classList.remove("slide-out-right");
  ele.classList.add("slide-in-right");
  ele.innerText = text;

  setTimeout(() => {
    ele.classList.remove("slide-in-right");
    ele.classList.add("slide-out-right");
    ele.innerText = "";
  }, 2000);
}
