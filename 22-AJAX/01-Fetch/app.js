// Step 1: Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Step 2: Configure the request
xhr.open("GET", "./api/colleges.json");
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status === 200) {
		console.log("done");
		console.log(xhr.responseText);
		const text = document.createElement("p");
		text.textContent = xhr.responseText;
		document.body.appendChild(text);
	} else {
		console.log({
			status: xhr.status,
			text: xhr.statusText,
			state: xhr.readyState,
		});
	}
	// console.log(xhr);
};

// Step 4: Send the request
xhr.send();
