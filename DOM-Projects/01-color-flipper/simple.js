const colors = [
	"green",
	"yellow",
	"gold",
	"blue",
	"white",
	"red",
	"grey",
	"pink",
];

const container = document.querySelector(".container");
const colorText = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
	const num = getRandom();
	document.body.style.backgroundColor = colors[num];
	colorText.textContent = colors[num];
});

function getRandom() {
	let number = Math.floor(Math.random() * colors.length);
	return number;
}
