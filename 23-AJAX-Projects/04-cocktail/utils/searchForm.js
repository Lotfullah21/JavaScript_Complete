import get from "./getElement.js";
import showDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".cocktail-form");
// Give me the attribute that has the name of drink
const input = get('[name="drink"]');

form.addEventListener("keyup", function (e) {
	// By default we are submitting the form
	e.preventDefault();
	const value = input.value;
	if (!value) {
		return;
	} else {
		// Attaching the dynamic id to the base url
		showDrinks(`${baseURL}${value}`);
	}
	console.log(input.value);
});
