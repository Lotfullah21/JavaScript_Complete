/*Events are the things happen in browser by the user and there is a reaction to them by the system we write our code in

to react to an event, we attach to an Event Listener to that event.

this EventListener can have two arguments,
1. the event to listen to,like onclick,focus,blur,dblclick,mouseover.
2. response to these events.
*/

const bttn = document.querySelector("button");

function rand(num) {
  return Math.floor(Math.random() * num);
}

// Event on button: mouseover,focus,blur,dblclick,mouseover,mouseout.
bttn.addEventListener("mouseover", () => {
  const rndCol = `rgb(${rand(321)},${rand(31)},${rand(341)})`;
  document.body.style.backgroundColor = rndCol;
});

// Another way to add function to eventListener
function changeColor() {
  const randColor = `rgb(${rand(111)},${rand(101)},${rand(221)})`;
  document.body.style.backgroundColor = randColor;
}

// We can remove eventlistener
bttn.removeEventListener("mousover", changeColor);

// Another method for event handling, but the above one is the best practice

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.onclick = () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// };

// 3rd way(Never do this)
// {
/* <button onclick="bgChange()">Press me</button>; */
// }
