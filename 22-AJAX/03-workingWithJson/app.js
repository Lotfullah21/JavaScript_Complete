// Step 1: Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();
url = "./api/colleges.json";
// Step 2: Configure the request
xhr.open("GET", url);
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status === 200) {
		// Convert to object
		const data = JSON.parse(xhr.response);
		const displayData = data
			.map((item) => {
				return `<p>${item.name}</p>`;
			})
			.join("");
		const element = document.createElement("div");
		element.innerHTML = displayData;
		document.body.appendChild(element);
		console.log(typeof data);
	} else {
		console.log({
			status: xhr.status,
			text: xhr.statusText,
			state: xhr.readyState,
		});
	}
};
// Step 4: Send the request
xhr.send();
