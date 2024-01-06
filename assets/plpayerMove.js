//* Add a slide in effect to show the player's move ( who's turn is it and what was theyr choice )

export function announcements(text) {
    const announcementsEle = document.createElement("p");
  announcementsEle.className = " font-josefin text-xl absolute top-32 right-14";
  announcementsEle.innerText = text;
    
}
