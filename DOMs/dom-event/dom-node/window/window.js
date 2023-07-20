/* 
Window: it is an object that allows us to work with browser, we can call it browser API.
it is the current tab in the browser.
document: document is an object in window object, here document represents our current html structure.
inside window and document object we are having lots of properties that allows to interact with them.
*/

console.log(window);
console.log(document);
console.dir(document);

// get element by ID, choose the id and decide which kind of changes you want to bring there.

const button = document.getElementById("btn");
const heading = document.getElementById("heading");

button.style.background = "transparent";
heading.style.color = "red";
button.style.color = "red";
button.style.background.hover = "red";
button.style.fontSize = "3rem";
console.log(button);

/* By Tag Name: it gives us an array like object, but we cannot use array methods on them, we have access to indexing and length property
 */

const headings = document.getElementsByTagName("h1");
console.log(headings);
console.log(headings.length);

headings[2].style.color = "blue";
// in order turn this object into array and apply array methods, we will us espread operator.
const arrayHeadings = [...headings];
arrayHeadings.forEach(function (item) {
  console.log(item);
});

// get element by tag name, it returns an HTML collection.
console.log(arrayHeadings);
const classTag = document.getElementsByClassName("title");
classTag[1].style.color = "green";
console.log(classTag);

const tagName = document.getElementsByClassName("first");
tagName.style.color = "green";
