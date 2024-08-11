const image = document.querySelector("img");
const buttton = document.querySelector("button");
const container = document.querySelector(".container");

buttton.addEventListener("click", container.classList.remove("hidden"));
image.addEventListener("click", image.blur());
container.addEventListener("click", container.classList.add("hidden"));
