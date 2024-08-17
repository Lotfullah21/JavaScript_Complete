const btn = document.querySelector(".btn");
const url = "./api/colleges.json";

btn.addEventListener("click", () => {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			displayData(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

function displayData(data) {
	newData = data
		.map((item) => {
			const { name, location } = item;
			return `<h3>${name} located in ${location}</h3>`;
		})
		.join("");

	const element = document.createElement("div");
	element.innerHTML = newData;
	document.body.appendChild(element);
}
