const heading = document.querySelector(".heading");
heading.classList.add("title");

const newHeading = document.createElement("h2");
newHeading.classList.add("underline");
newHeading.innerText = `Hello world`;
document.body.prepend(newHeading);
