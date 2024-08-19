import { showLoading } from "./toggle.js";

const fetchDrinks = async (url) => {
	showLoading();
	try {
		const response = await fetch(url);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default fetchDrinks;
