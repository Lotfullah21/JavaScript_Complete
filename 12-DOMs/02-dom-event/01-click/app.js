const btn = document.querySelector(".btn");
const windowBody = document.querySelector("#body");

function changeBackground() {
	let hasClass = windowBody.classList.contains("bg-color");
	if (hasClass) {
		windowBody.classList.remove("bg-color");
	} else {
		windowBody.classList.add("bg-color");
	}
}
// As you can see, the function is not called, otherwise the moment the document is loaded, the function gets executed and that is a behavior that I don't want.
btn.addEventListener("click", changeBackground);
