const courses = document.querySelector(".courses");
const coursesCenter = document.querySelector(".courses-center");
const coursesContainer = document.querySelector(".course-container");

url = "https://www.course-api.com/javascript-store-products";

const fetchProducts = async () => {
	// Put the loading before fetching the data
	coursesCenter.innerHTML = `<div class="loading"></div>`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		courses.innerHTML = `<p class="error-message">There was an error</p>`;
	}
};

const displayProducts = (items) => {
	const list = items
		.map((item) => {
			const { id, fields } = item;
			console.log(id);
			const { company, name, price, image } = fields;
			const { url } = image[0];
			return `<a href="./public/home.html?id=${id}" class="single-course">
        <img src=${url} alt="" class="single-course-img" />
        <footer>
            <h5 class="course-title">${name}</h5>
            <span class="duration">${price}</span>
        </footer>
    </a>`;
		})
		.join("");
	// Because we have added loading in center div, we need to contents there as well.
	coursesCenter.innerHTML = `<div class="course-container">${list}</div>`;
};

const start = async () => {
	// an async
	const data = await fetchProducts();
	displayProducts(data);
};

start();
