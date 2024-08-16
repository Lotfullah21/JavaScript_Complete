const products = document.querySelector(".products");
const filterContainer = document.querySelector(".filters-container");
const productsContainer = document.querySelector(".products-container");

let filteredProducts = [...productsItem];

console.log(products, filterContainer, productsContainer, productsItem);

const displayProducts = () => {
	if (filteredProducts.length < 1) {
		productsContainer.innerHTML = `<h2>No Item matched</h2>`;
		// Crucial to add return here, otherwise js will keep reading the code
		return;
	}

	productsContainer.innerHTML = filteredProducts
		.map(({ id, title, company, image, price }) => {
			return `<article class="product">
    <img
      src=${image}
      alt=""
      class="prodcut-img img" />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
    </footer>
  </article>`;
		})
		.join("");
};

displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

console.log(form, searchInput);

form.addEventListener("keyup", () => {
	let inputVal = searchInput.value;
	console.log(inputVal);
	filteredProducts = productsItem.filter((item) => {
		return item.title.toLowerCase().includes(inputVal);
	});
	displayProducts();
});

// Filtered buttons

const companies = document.querySelector(".companies");
const displayButtons = () => {
	const buttons = ["all", ...new Set(productsItem.map((item) => item.company))];
	console.log(buttons);

	companies.innerHTML = buttons
		.map((button) => {
			return `<button class="company-btn" data-id=${button}>${button}</button>`;
		})
		.join(" ");
};

displayButtons();

companies.addEventListener("click", (e) => {
	const ele = e.target;
	if (ele.classList.contains("company-btn")) {
		if (ele.dataset.id === "all") {
			filteredProducts = [...productsItem];
		} else {
			filteredProducts = productsItem.filter((item) => {
				return item.company == ele.dataset.id;
			});
		}
	}
	searchInput.value = "";
	displayProducts();
});
