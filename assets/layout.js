//! Display the layout on the page.

(function () {
  const body = document.querySelector("body");
  const layout = document.createElement("div");
  layout.className = "mt-3 bg-gray-500 p-3 rounded-2xl";

  layout.innerHTML = `<h1 class="font-josefin text-2xl underline text-center"> test </h1>`;
  body.appendChild(layout);
})();
