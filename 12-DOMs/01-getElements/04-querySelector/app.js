const h1 = document.querySelector("h1");
// console.log(h1);
h1.style.color = "gold";

const h2 = document.querySelector("h2");
// console.log(h1);
h2.style.color = "red";

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);
lastItem.style.color = "green";

// querySelectorAll
const items = document.querySelectorAll(".list-item");
console.log(items); // a node list of all the items having class last-item
items.forEach(function (item) {
	item.style.color = "blue";
});
