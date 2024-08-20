import fetchPeople from "./src/fetchPeople.js";
import displayButtons from "./src/displayButton.js";
import displayFollowers from "./src/displayFollowers.js";
import paginate from "./src/paginate.js";
import get from "./src/getElement.js";

const title = get(".section-title h1");
const btnContainer = get(".btn-container");

let pages = [];
let idx = 0;

const setUpUI = () => {
	displayFollowers(pages[idx]);
	displayButtons(btnContainer, pages, idx);
};

const init = async () => {
	const people = await fetchPeople();
	pages = paginate(people);
	setUpUI();
	title.textContent = "Pagination";
};

// Adding functionality for btns

btnContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("btn-container")) {
		return;
	}
	if (e.target.classList.contains("page-btn")) {
		idx = parseInt(e.target.dataset.index);
	}
	if (e.target.classList.contains("next-btn")) {
		idx++;
		if (idx > pages.length - 1) {
			idx = 0;
		}
	}
	if (e.target.classList.contains("prev-btn")) {
		idx--;
		if (idx < 0) {
			idx = pages.length - 1;
		}
	}
	setUpUI;
});

window.addEventListener("load", init);
