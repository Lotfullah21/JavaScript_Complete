function getElement(selector) {
	const element = document.querySelector(`${selector}`);
	if (element) {
		return element;
	} else {
		throw Error(`${element} cannot be accessed at the moment`);
	}
}

const heading1 = getElement(".one");
const heading2 = getElement(".two");
const heading3 = getElement(".three");
const btn = getElement(".btn");
const body = getElement("body");

async function changeStyleAsync(element, style, value, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			element.style[style] = value;
			resolve();
		}, delay);
	});
}

btn.addEventListener("click", async () => {
	try {
		await changeStyleAsync(heading1, "background", "red", 2000);
		heading1.style.color = "yellow";
		await changeStyleAsync(heading3, "fontSize", "4rem", 3000);
		heading3.style.color = "green";
		await changeStyleAsync(heading2, "color", "gold", 2000);
		heading2.style.background = "white";
		await changeStyleAsync(body, "background", "black", 3000);
	} catch (error) {
		console.error(error);
	}
});

console.log("I am here");

console.log("I am here");
