const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) {
		return element;
	} else {
		throw Error(`${element} is not found`);
	}
};

export default getElement;



