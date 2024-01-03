//! Display the layout on the page.

(function () {
  const body = document.querySelector("body");
  const navBar = document.createElement("nav");
  const layout = document.createElement("div");

  layout.className = "container mt-3 bg-gray-300 p-3 rounded-2xl mx-auto";
  navBar.className =
    "container bg-gray-300 rounded-2xl mx-auto flex justify-between";

  navBar.innerHTML = `<nav class="container bg-gray-300 rounded-2xl mx-auto flex justify-between items-center">
    <div class="container flex justify-between">
        <img src="img/navImg.svg" alt="Logo" class="h-14 m-2 cursor-pointer">
        <div class="items-center flex">
            <button class="rounded-xl font-josefin bg-blue-400 m-3 hover:bg-blue-500 p-1 ">
                Start game
            </button>
            <button class="rounded-xl font-josefin bg-blue-400 m-3 hover:bg-blue-500 p-1 ">
                Reset game
            </button>
        </div>
    </div>
</nav>`;

  layout.innerHTML = `<h1 class="font-josefin text-2xl underline text-center"> test </h1>`;
  body.appendChild(navBar);
  //   body.appendChild(layout);
})();
