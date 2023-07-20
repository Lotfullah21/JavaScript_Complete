/*
three kind of key events
keypress: when key is pressed
keydown: when is down
keyup: when key is released
*/

const input = document.getElementById("name");

// input.addEventListener("keypress", function () {
//   console.log("key is pressed");
// });
// input.addEventListener("keydown", function () {
//   console.log("key is key is down");
// });
input.addEventListener("keyup", function () {
  console.dir(input);
  console.log(input.value);
});
