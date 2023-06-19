/*
Event bubbling describes how browser handles events targeted on nested elements, if multiple events targeted, 
then it will start from inner motst to outer most

children > parent > grandparent > grandgranparent
button> Div > Body > window


*/

const container = document.querySelector(".container");
const para = document.querySelector("p");
const button = document.querySelector("button");
function handleClick(e) {
  para.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

container.addEventListener("click", handleClick);

// adding more event listener
button.addEventListener("click", handleClick);
document.body.addEventListener("click", handleClick);
