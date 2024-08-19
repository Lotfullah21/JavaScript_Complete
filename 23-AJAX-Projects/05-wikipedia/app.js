import get from "./src/getElement.js";
const url =
	"https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDom = get(".form-search");
const inputForm = document.getElementById("input-form");
const answer = get(".results");
const inputValue = get(".input-value");
console.log(formDom, inputForm, answer);

formDom.addEventListener("submit", (e) => {
	e.preventDefault();
	const value = inputValue.value;
	if (!value) {
		answer.innerHTML = `<div class="error">please enter some value</div>`;
		return;
	}
	fetchPages(value);
});

const fetchPages = async (searchValue) => {
	// if we are still loading display, the loading spinner
	answer.innerHTML = `<div class="loading"></div>`;
	try {
		const response = await fetch(`${url}${searchValue}`);
		const data = await response.json();
		const foundData = data.query.search;
		if (foundData.length === 0) {
			answer.innerHTML = `<div class="error">سوال شما پیدا نشد</div>`;
			return;
		}
		renderAnswers(foundData);
		console.log("data", data);
		console.log("found data", foundData);
	} catch (error) {
		console.log(error);
	}
};

const renderAnswers = (answers) => {
	const cardData = answers
		.map((data) => {
			const { title, snippet, pageid } = data;
			return `
          <a href="https://en.wikipedia.org/?curid=${pageid}" target="_blank">
          <h4>${title}</h4>
          <p>
  ${snippet}
          </p>
        </a>`;
		})
		.join("");
	answer.innerHTML = ` <article class="articles">
  ${cardData}
  </article>`;
};
