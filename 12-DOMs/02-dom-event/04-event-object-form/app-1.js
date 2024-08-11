const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

heading.addEventListener("click", function (event) {
	// console.log(event);
	// Current target lives inside event object
	console.log(event.currentTarget);
});

btn.addEventListener("click", function (event) {
	console.log(event.currentTarget);
	event.currentTarget.classList.add("red");
	console.log("type", event.type);
});
