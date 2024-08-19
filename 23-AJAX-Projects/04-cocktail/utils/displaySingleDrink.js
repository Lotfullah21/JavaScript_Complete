import { hideLoading } from "./toggle.js";
import get from "./getElement.js";

const drinkContainer = get(".single-drink");
const drinkName = get(".drink-name");
const drinkDesc = get(".drink-description");
const drinkIngredients = get(".drink-ingredients");

const displaySingleDrink = (drinkData) => {
	hideLoading();
	const drink = drinkData.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb,
		strInstructions,
		strDrinkThumb: imgSrc,
	} = drink;

	const ingredients = [
		drink.strIngredient1,
		drink.strIngredient2,
		drink.strIngredient3,
		drink.strIngredient4,
		drink.strIngredient5,
	];

	document.title = name;
	drinkContainer.innerHTML = `<img src=${imgSrc} alt="" class="img-drink" />
<article class="drink-info">
    <h2 class="drink-name">${name}</h2>
    <p class="drink-description">
       ${strInstructions}
    </p>
    <h3>Ingredients</h3>
    
      ${(drinkIngredients.innerHTML = ingredients
				.map((item) => {
					if (!item) {
						return;
					} else {
						return `<li>${item}</li>`;
					}
				})
				.join(""))}

    <a href="./index.html" class="btn btn-home">back home</a>
</article>`;
	console.log(drink);
};

export default displaySingleDrink;
