// we have few other methods like childNodes(it returns all children including whitespace), children(returns all children)

const subjects = document.querySelector("#allSubjects");
console.log(subjects);
const allChildren = subjects.childNodes;
const children = subjects.children;
console.log(allChildren);
console.log(children);
console.log(subjects.firstChild);
console.log(subjects.lastChild);
console.log(subjects.thirdChild);

// Parent element: using parentElement method we can get the immediate parent.

const parent = document.querySelector("#python");
console.log(parent.parentElement);

const middle = document.querySelector(".middle");
const middleParent = middle.parentElement;
middleParent.style.color = "yellow";
middleParent.style.backgroundColor = "black";

// Previous sibling and Nextsibling
// 1. Next Sibling
const middleNextSibling = document.querySelector(".middle");
// why two nextSibling: to get rid of white space
const nextElement = middleNextSibling.nextElementSibling;
nextElement.style.color = "red";
console.log(nextElement);

// 1. Previous Sibling
const middlePrevSibling = document.querySelector(".middle");
// why two nextSibling: to get rid of white space
const prevElement = middlePrevSibling.previousSibling.previousSibling;
prevElement.style.color = "white";
console.log(nextElement);

// here we can directly use nextElementSibling and previousElementSibling

// Lets get the text content

const heading_1 = document.getElementsByTagName("h1");
// const heading_value = heading_1.firstChild.nodeValue;
const textContent = heading_1.textContent;
console.log(heading_1, textContent);
