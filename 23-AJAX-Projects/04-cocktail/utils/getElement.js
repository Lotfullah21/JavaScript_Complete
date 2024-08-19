const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) {
		return element;
	} else {
		throw Error(`${element} does not exist`);
	}
};

export default getElement;
