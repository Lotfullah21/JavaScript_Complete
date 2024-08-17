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
	loadImage(url)
		.then((data) => {
			container.appendChild(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

function loadImage(url) {
	const promise = new Promise((resolve, reject) => {
		// Create a new image
		let img = new Image();
		img.src = url;
		img.addEventListener("load", () => {
			// If image loaded, send the data
			resolve(img);
		});
		img.addEventListener("error", () => {
			reject(new Error("Image loading failed!!"));
		});
	});
	return promise;
}
