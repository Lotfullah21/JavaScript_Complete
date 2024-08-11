// Using createElement('element') we can create an element dynamically when javascript runs

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const color = document.getElementById("x");

const heading = document.createElement("h1");
const text = document.createTextNode("Hello, I am dynamic here");

// append the text to the heading,
// Using insertBefore("element","location")
// using inser brfore, we need two parameters here
// first one is which element to add
// second one is before which
heading.appendChild(text);
document.body.insertBefore(heading, color);
// with this method, the element will be added at the end of the body

const parent_1 = document.getElementById("parent");
const heading_2 = document.createElement("h1");
const headingText = document.createTextNode("Hello I am h1");
heading_2.appendChild(headingText);
heading_2.classList.add("color");
parent_1.appendChild(heading_2);
console.log(parent_1.children);

// Using replaceChild(new, old)

const para = document.createElement("p");
const paraText = document.createTextNode("I am a paragraph");
para.classList.add("color");
para.appendChild(paraText);
// document.body.appendChild(para);
document.body.replaceChild(para, heading_2);
