//! Display the layout on the page.

(function () {
  const body = document.querySelector("body");

  const navBar = document.createElement("nav");
  const layout = document.createElement("div");
  const announcementsEle = document.createElement("p");

  announcementsEle.className =
    " font-josefin text-xl absolute top-32 right-14 slide-out-right";
  announcementsEle.id = "announcements";

  navBar.className =
    "container bg-gray-300 rounded-2xl mx-auto flex justify-between";

  navBar.innerHTML = `<nav class="container bg-gray-300 rounded-2xl mx-auto flex justify-between items-center">
    <div class="container flex justify-between">
        <img src="img/navImg.svg" alt="Logo" class="h-14 m-2 cursor-pointer">
        <div class="items-center flex">
            <button class="rounded-xl font-josefin bg-blue-400 m-3 hover:bg-blue-500 p-1" id='restartGame'>
                Reset game
            </button>
        </div>
    </div>
</nav>`;

  layout.className = "container mt-3 bg-gray-300 p-3 rounded-2xl mx-auto";

  layout.innerHTML = ` `;
  body.appendChild(navBar);
  body.appendChild(layout);
  body.appendChild(announcementsEle);
})();
