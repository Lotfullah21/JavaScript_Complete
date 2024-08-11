const h1 = document.querySelector(".heading");
const parent = h1.parentElement;
console.log(h1);
console.log(parent);

console.log("ancestors =", h1.parentElement.parentElement);
console.log(
	"ancestors =",
	h1.parentElement.parentElement.parentElement.parentElement
);
