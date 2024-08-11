const heading = document.querySelector("h1");
heading.addEventListener("click", function () {
	console.log("You clicked here");
});

heading.addEventListener("mousedown", function () {
	console.log("MouseDown");
});

heading.addEventListener("mouseup", function () {
	console.log("MouseUp");
});

// Once we click, add the red class
heading.addEventListener("mouseenter", function () {
	heading.classList.add("red");
});

// Once we move out of the heading, add green color
heading.addEventListener("mouseleave", function () {
	heading.classList.add("green");
});
