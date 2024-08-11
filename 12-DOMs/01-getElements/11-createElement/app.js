const container = document.querySelector(".container");

// Create an empty div
const newEle = document.createElement("div");
// Create text node
const newText = document.createTextNode("A paragraph for div");
// Append to the newEle
newEle.appendChild(newText);
// Append div to the body
document.body.appendChild(newEle);

// Creating a new heading
const heading = document.createElement("h2");
const textNode = document.createTextNode("I am added");
heading.appendChild(textNode);
heading.classList.add("color");
container.appendChild(heading);

// Creating a anchor element
const anchorTag = document.createElement("a");
const anchorText = document.createTextNode("Click here");
anchorTag.appendChild(anchorText);
anchorTag.classList.add("underline");
document.body.insertBefore(anchorTag, container);
