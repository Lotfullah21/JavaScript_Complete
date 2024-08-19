import fetchDrinks from "./utils/fetchDrinks.js";
import displayDrink from "./utils/displaySingleDrink.js";

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const presentDrink = async () => {
	const id = localStorage.getItem("drink");
	if (!id) {
		window.location.replace("index.html");
	} else {
		const drink = await fetchDrinks(`${url}i=${id}`);
		displayDrink(drink);
	}
};

// Once the content is loaded, invoke present drink.
window.addEventListener("DOMContentLoaded", presentDrink);
