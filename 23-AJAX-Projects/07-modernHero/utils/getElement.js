const getElement = (selector) => {
	const element = document.querySelector(selector);

	try {
		if (element) {
			return element;
		}
	} catch (error) {
		console.log(error);
	}
};

export default getElement;
