const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
	const hasClass = sidebar.classList.contains("show-sidebar");
	if (hasClass) {
		sidebar.classList.remove("show-sidebar");
	} else {
		sidebar.classList.add("show-sidebar");
	}
});

closeBtn.addEventListener("click", function () {
	sidebar.classList.remove("show-sidebar");
});
