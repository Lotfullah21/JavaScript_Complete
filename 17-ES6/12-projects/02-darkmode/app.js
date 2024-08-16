const theme = document.querySelector(".theme");
const articleContainer = document.querySelector(".articles");

theme.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark-theme");
});

const renderData = articles
	.map((item) => {
		const { title, date, length, content } = item;

		// const formatDate = date.toLocaleDateString("en-US", {
		// 	year: "numeric",
		// 	month: "long",
		// 	day: "numeric",
		// });
		const formatDate = moment(date).format("MMMM Do, YYYY");
		return `<article class="post">
	<h2 class="post-title">${title}</h2>
	<div class="post-info">
		<span class="date">${formatDate}</span>
		<span class="read-time">${length} mins</span>
	</div>
	<p class="content">
	${content}
	</p>
</article>`;
	})
	.join("");

articleContainer.innerHTML = renderData;
