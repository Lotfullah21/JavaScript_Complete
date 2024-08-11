window.addEventListener("load", function () {
	console.log("I AM FROM LOAD");
	const img = this.document.querySelector("img");
	console.log(img);
	console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
	console.log("I AM FROM DOMContetLoaded");
	const img = this.document.querySelector("img");
	console.log(img);
	console.log(img.width);
});
