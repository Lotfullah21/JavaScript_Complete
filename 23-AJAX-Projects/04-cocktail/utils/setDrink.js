//
const setDrink = (section) => {
	section.addEventListener("click", function (e) {
		// e.preventDefault();
		// We are looking for id of the img in the article.
		const id = e.target.parentElement.dataset.id;
		localStorage.setItem("drink", id);
		console.log(e.target, id);
	});
	console.log(section);
};

export default setDrink;
