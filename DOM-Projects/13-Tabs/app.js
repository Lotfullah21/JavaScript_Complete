const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about-info");

about.addEventListener("click", function (e) {
	const id = e.target.dataset.id;
	if (id) {
		btns.forEach(function (btn) {
			// Remove the active btns from all btns
			btn.classList.remove("active");
			// Add the active class to the btn we clicked on
			e.target.classList.add("active");
		});
		// Hide other articles
		articles.forEach(function (article) {
			article.classList.remove("active");
		});
		// Get the element with the tab-btn id, as the ids are same as the content
		const element = document.getElementById(id);
		element.classList.add("active");
	}
});
