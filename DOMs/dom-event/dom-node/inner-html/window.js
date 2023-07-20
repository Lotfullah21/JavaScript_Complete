// innerHTML
// textContent

const heading = document.getElementById("heading");
const div = document.getElementById("div");
const ul = document.getElementById("ul");

console.log(div.innerHTML); // it gives text the html content.
console.log(div.textContent); // it outputs only the text within an ele.

const ol = document.createElement("ol");
ol.innerHTML = `<li>hello iam list</li><li>hello iam list</li> <li>hello iam list</li> <li>hello iam list</li> `;
document.body.appendChild(ol);
