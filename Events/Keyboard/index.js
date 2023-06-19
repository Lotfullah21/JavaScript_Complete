const inputText = document.querySelector(".textBox");
const writeHere = document.querySelector(".write");

inputText.addEventListener("keydown", (event) => {
  writeHere.textContent = ` Pressed "${event.key}" key`;
});
