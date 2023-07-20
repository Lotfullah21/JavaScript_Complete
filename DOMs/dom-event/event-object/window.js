/*
Event-object: we can write as e,evt
it gives information about Triggered event.
Methods:
event.type
event.currentTarget
preventDefault() => it prevents default behavior
*/

const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  console.log("form submitted");
  e.preventDefault();
  console.log(password.value);
  console.log(name.value);
});
