import showDrinks from "./utils/presentDrinks.js";
import "./utils/searchForm.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const id = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";

window.addEventListener("DOMContentLoaded", showDrinks(url));
