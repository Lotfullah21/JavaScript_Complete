const h1 = document.querySelector("h1");
// console.log(h1);
h1.style.color = "gold";

const allChildren = document.getElementById("list-items");
console.log(allChildren.childNodes);

const onlyChildren = document.getElementById("list-items");
console.log(onlyChildren.children);

console.log(allChildren.firstChild);
console.log(allChildren.lastChild);
