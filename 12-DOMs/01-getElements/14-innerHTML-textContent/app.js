const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const courses = document.getElementById("courses");

console.log(courses.innerHTML);
console.log(courses.textContent);

console.log(container.textContent);
console.log(container.innerHTML);

const newUl = document.createElement("ul");
newUl.innerHTML = `<li class="item">machine learning</li>
<li>deep learning</li>
<li>artificial intelligence</li>
`;

document.body.appendChild(newUl);
