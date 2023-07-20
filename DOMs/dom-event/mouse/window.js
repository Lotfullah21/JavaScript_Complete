// we can change the functionality of an element using events
/*   first: select the element
    second: addEventListener()
     third: which event to add.
*/

const head = document.querySelector("h1");
head.addEventListener("click", function () {
  console.log("You cliced here");
});

head.addEventListener("mousedown", function () {
  console.log("mouse down");
});
head.addEventListener("mouseup", function () {
  console.log("Mouse mouseup");
});

head.addEventListener("mouseenter", function () {
  head.classList.add("red");
});

head.addEventListener("mouseleave", function () {
  head.classList.remove("red");
});
