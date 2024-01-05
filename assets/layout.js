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
            <button class="rounded-xl font-josefin bg-blue-400 m-3 hover:bg-blue-500 p-1" id='restartGame'>
                Reset game
            </button>
        </div>
    </div>
</nav>`;

  layout.innerHTML = `<div class="container bg-gray-300 rounded-2xl mx-auto flex flex-col justify-between m-3">
  <div class="flex flex-col justify-between mx-auto m-3 items-center">
      <h1 class="font-josefin text-2xl">Player?</h1>

      <div class="">
          <button
              class="player bg-transparent w-20 border-2 border-black rounded-xl m-3 hover:bg-gray-200 ease-in duration-300 shadow-btn">X</button>
          <button
              class="player bg-transparent w-20 border-2 border-black rounded-xl m-3 hover:bg-gray-200 ease-in duration-300 shadow-btn">O</button>
      </div>

  </div>

  <div class="container mx-auto w-2/4 p-3 h-3/4 flex items-center justify-center">
      <div class="grid grid-cols-3 place-items-center">
          <button class="gameCard border-4 border-l-0 border-t-0 text-9xl min-h-36 min-w-32"></button>
          <button class="gameCard border-4 border-l-0 border-r-0 border-t-0 text-9xl min-h-36 min-w-32 "></button>
          <button class="gameCard border-4 border-r-0 border-t-0 text-9xl min-h-36 min-w-32"></button>
          <button class="gameCard border-4 border-l-0 text-9xl min-h-36 min-w-32 "></button>
          <button class="gameCard border-4 border-l-0 border-r-0 text-9xl min-h-36 min-w-32 "></button>
          <button class="gameCard border-4 border-r-0 text-9xl min-h-36 min-w-32"></button>
          <button class="gameCard border-4 border-l-0 border-b-0 text-9xl min-h-36 min-w-32"></button>
          <button class="gameCard border-4 border-l-0 border-r-0 border-b-0 text-9xl min-h-36 min-w-32"></button>
          <button class="gameCard border-4 border-r-0 border-b-0 text-9xl min-h-36 min-w-32"></button>
      </div>
  </div>
</div>`;
  body.appendChild(navBar);
  body.appendChild(layout);
})();
