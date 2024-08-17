const btn = document.querySelector(".btn");
const url = "./api/colleges.json";

btn.addEventListener("click", async () => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		displayData(data);
	} catch (error) {
		console.log(error);
	}
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
