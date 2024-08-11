const items = document.getElementsByClassName("list-items");
const title = document.getElementById("title");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValTitle = title.className;
console.log("title class =", classValTitle);
title.classList.add("title");
title.className = "title";

// Get the class names
const classValue = first.className;

console.log("class value =", classValue);
first.classList.add("color");

// Since, by class list returns a collection of elements, we need to use indexing.
console.log(items);
for (var i = 0; i < items.length; i++) {
	const classValItems = items[i].className;
	console.log("class Value =", classValItems);
}
console.log(items.length);

// Look if font class is present
const contains = first.classList.contains("color");
if (contains) {
	console.log("font class is present");
} else {
	console.log("font class is not present.");
}
