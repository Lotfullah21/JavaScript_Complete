const input = document.getElementById("name");

// input.addEventListener("keypress", function () {
// 	console.log("key is pressed");
// });

// input.addEventListener("keydown", function () {
// 	console.log("key is down");
// });

input.addEventListener("keyup", function () {
	console.dir(input);
	console.log(input.value);
});
