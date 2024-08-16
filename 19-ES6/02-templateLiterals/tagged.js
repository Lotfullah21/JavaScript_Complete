const quote = document.querySelector(".quote");

const jobs = "Think different";
const jobsQuote = "Only the crazy ones can change the world";
const message = highlight`Steve jobs said ${jobs} He also added that ${jobsQuote}`;
quote.innerHTML = message;

function highlight(text, ...vars) {
	const newText = text.map(function (item, idx) {
		return `${item} <strong>${vars[idx] || ""}</strong>`;
	});
	return newText.join("");
}
