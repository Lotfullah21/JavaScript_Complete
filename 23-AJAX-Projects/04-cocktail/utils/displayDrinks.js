import get from "./getElement.js";
import { hideLoading } from "./toggle.js";
const displayDrinks = ({ drinks }) => {
	const section = get(".section-center");
	const title = get(".title");
	// console.log(drinks);
	if (!drinks) {
		hideLoading();
		title.textContent = `Sorry, no coffee matches your preference.`;
		section.innerHTML = null;
		return;
	} else {
		const newDrinks = drinks
			.map((drink) => {
				const { idDrink: id, strDrink: name, strDrinkThumb: imageSrd } = drink;
				return `<a href="./drink.html">
            <article class="cocktail-container" data-id=${id}>
                <img src=${drink.strDrinkThumb} alt="dark coffee image" />
                <h3>${drink.strDrink}</h3>
            </article>
        </a>`;
			})
			.join("");
		hideLoading();
		title.textContent = ``;
		section.innerHTML = newDrinks;
		return section;
	}
};

export default displayDrinks;
