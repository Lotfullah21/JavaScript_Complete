```js
function getElement(selector) {
	const element = document.querySelector(selector);
	if (element) {
		return element;
	} else {
		throw Error("Something going wrong");
	}
}

const btn = getElement(".btn");
const container = getElement(".image-container");
url =
	"https://images.unsplash.com/photo-1610295434404-8ea904930a12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80";

btn.addEventListener("click", () => {
	console.log(loadImage(url));
	loadImage(url).then((data) => console.log(data));
});

function loadImage(url) {
	const promise = new Promise((resolve, reject) => {
		// Create a new image
		let img = new Image();
		img.addEventListener("load", () => {
			console.log("Image is created");
		});
		img.addEventListener("error", () => {
			console.log("There was an error");
		});
		img.src = url;
	});
	return promise;
}
```
