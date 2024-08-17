# XMLHttpRequest

### What is `XMLHttpRequest`?

**`XMLHttpRequest`** (XHR) is an API provided by web browsers that allows JavaScript to send HTTP requests and receive responses asynchronously. It is commonly used to request data from a server and update web pages dynamically without reloading them.

### How `XMLHttpRequest` Works

1. **Create an XMLHttpRequest Object**: Instantiate a new `XMLHttpRequest` object.

2. **Configure the Request**: Set up the request method (e.g., GET, POST) and the URL.

3. **Send the Request**: Send the configured request to the server.

4. **Handle the Response**: Define callbacks to handle the response from the server once it arrives.

### Example of Using `XMLHttpRequest`

Here's an example of how to use `XMLHttpRequest` to make a GET request:

```js
// Step 1: Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Step 2: Configure the request
xhr.open("GET", "./api/colleges.txt");
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
```

```js
const btn = document.querySelector(".btn");
const url = "./api/colleges.json";

btn.addEventListener("click", () => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			showNames(data);
		})
		.catch((err) => console.log(err));
});

const showNames = (colleges) => {
	const displayData = colleges
		.map((college) => {
			const { name, location } = college;
			return `<h5>${name} is located in ${location}</h5>`;
		})
		.join(" ");
	const ele = document.createElement("article");
	ele.innerHTML = displayData;
	document.body.appendChild(ele);
	console.log(displayData);
};
```

To prove that we are not refreshing the page every time we click the button, but in fact all the process is happening behind the scene.

```js
const btn = document.querySelector(".btn");
const url = "./api/sample.txt";
btn.addEventListener("click", () => {
	getData(url);
});

function getData(url) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	// console.log(xhr);
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(xhr.responseText);
			const text = document.createElement("p");
			text.textContent = xhr.responseText;
			document.body.appendChild(text);
		} else {
			console.log({
				status: xhr.status,
				readyState: xhr.readyState,
				text: xhr.statusText,
			});
		}
		console.log(xhr);
	};
	xhr.send();
}
```
