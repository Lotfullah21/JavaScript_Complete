const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
	console.log("form submitted");
	// e.preventDefault();
	console.log(password.value);
	console.log(nameInput.value);
});
