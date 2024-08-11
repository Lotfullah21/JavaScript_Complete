const first = document.querySelector(".first");
console.log("first =", first);
const value = first.nodeValue;
console.log("value =", value);
console.log("first child nodes =", first.childNodes);
console.log("using indexing =", first.childNodes[0].nodeValue);
console.log("using first child =", first.firstChild.nodeValue);
// For text content, simply we can use .textContent.
const textContent = first.textContent;
console.log("text content", textContent);
