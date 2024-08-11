const container = document.querySelector(".list-items");
const list = document.querySelector(".list-items");

function showBubbling(e) {
	console.log("current Target", e.currentTarget);
	console.log("target", e.target);
	if (e.target.classList.contains("link")) {
		console.log("you clicked on the link");
	}
}

function stopPropagation(e) {
	console.log("You clicked on the link");
	e.stopPropagation();
}

list.addEventListener("click", stopPropagation);
container.addEventListener("click", showBubbling);
window.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
