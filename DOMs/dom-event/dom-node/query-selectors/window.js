/* 
Window: it is an object that allows us to work with browser, we can call it browser API.
it is the current tab in the browser.
document: document is an object in window object, here document represents our current html structure.
inside window and document object we are having lots of properties that allows to interact with them.
*/
const heading = document.getElementById("heading");
const python = document.querySelector(".python");
heading.style.color = "red";
python.style.backgroundColor = "blue";
const subject = document.querySelector(".subject");
subject.style.color = "red";

// applying styles to all elements using forEach method
const subjects = document.querySelectorAll(".subject");
subjects.forEach(function (item) {
  console.log(item);
  item.style.color = "gold";
});
const lastItem = document.querySelector("li:last-child");
lastItem.style.color = "red";
console.log(lastItem);
