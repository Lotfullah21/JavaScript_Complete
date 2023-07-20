const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

// we can use className and classList properties to see and add class names to our elements.

const className = first.className;
console.log(className);
// if we use className property, we will over-ride the other class
first.className = "color";
first.className = "fontSize";
first.className = "color capitalize";
// better solution is to use classList property. it allows multiple classes to be added on a an element.
third.classList.add("color");
third.classList.add("fontSize");
second.classList.add("capitalize", "fontSize", "color");
console.log(third.classList);

// remove a class
second.classList.remove("capitalize");
