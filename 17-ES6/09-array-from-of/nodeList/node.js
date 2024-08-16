const paragraph = document.querySelectorAll("p");
const task = document.querySelector("#task");
const first = document.getElementById("first");

console.log(paragraph); // node list
console.log(task); // node list
console.log(first); // element itself

// Convert node list to an array
const ps = Array.from(paragraph);
console.log(ps);

// Create an array of <h1> elements as strings
const newPs = ps
	.map(function (item) {
		return `<h1>${item.textContent}</h1>`;
	})
	.join(""); // Join the array into a single string

// Update the content of the 'first' element
first.innerHTML = newPs;

// Shorter version, the second argument will a map method.
const newPsShorter = Array.from(paragraph, function (item) {
	return `<h3 style="color:red">${item.textContent}</h3>`;
}).join("");
console.log(newPsShorter);
task.innerHTML = newPsShorter;
