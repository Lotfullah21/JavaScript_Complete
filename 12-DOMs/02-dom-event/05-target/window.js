const btns = document.querySelectorAll(".btn");
const btn_last = document.querySelector("#btn-last");
btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		// e.currentTarget.style.color = "green";
		console.log("current target", e.currentTarget);
		console.log("target", e.target);
		e.target.style.color = "red";
	});
});

btn_last.addEventListener("click", function (event) {
	console.log(event);
	console.log(event.currentTarget);
});
