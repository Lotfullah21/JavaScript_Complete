const items = document.querySelector(".list-items");

const classAtr = items.getAttribute("class");
const idAtr = items.getAttribute("id");
console.log("class attribute =", classAtr);
console.log("id attribute =", idAtr);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log("link value =", showLink);

const first = document.querySelector(".first");
const nextSibling = first.nextElementSibling;
console.log(nextSibling);
nextSibling.setAttribute("class", "last");
nextSibling.textContent = "Now, I got some value";
console.log(nextSibling);
