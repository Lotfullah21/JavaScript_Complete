document.write("Hello");

document.querySelectorAll(".btn").forEach((item) => {
	item.addEventListener("click", () => {
		alert("hello world");
	});
});
