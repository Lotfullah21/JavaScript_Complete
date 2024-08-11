console.log("height", window.innerHeight);
console.log("width", window.innerWidth);

// getBoundingClientRect()
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
	const values = btn.getBoundingClientRect();
	console.log(values);
});

// Resize
window.addEventListener("resize", function () {
	console.log("new width after resizing", window.innerHeight);
});
