const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector(".container");
const colorText = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
	let color = "#";
	for (var i = 0; i < 6; i++) {
		// We are generating a new number at every iteration.
		let num = getRandom();
		color = color + colors[num];
	}
	// Crucial for debugging
	console.log(color);

	document.body.style.backgroundColor = color;
	colorText.textContent = color;
});

function getRandom() {
	const number = Math.floor(Math.random() * colors.length);
	return number;
}
