const link = document.getElementById("link");
const linkValue = link.getAttribute("href");
console.log(linkValue);
const nextEle = link.nextElementSibling;
nextEle.setAttribute("class", "heading");
nextEle.textContent = "I have a class attribute";
