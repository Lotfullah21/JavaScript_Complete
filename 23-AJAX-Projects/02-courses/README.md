## Fetching

While fetching, there are three possible states.

1. Loading
2. Success
3. Failure

```js
const start = async () => {
	const data = await fetchProducts();
	displayProducts(data);
};
```

An async function always returns a promise.

## Query string (window.location.search )

The window.location.search property returns the query string part of the URL, including the leading "?" character.

If you run console.log(window.location.search) in your code, it will log the part of the URL that comes after the "?" in the current page’s URL. For example:

If the URL of the current page is https://example.com/page?productId=123, then window.location.search will log ?productId=123.

### new URLSearchParams(window.location.search)

It creates a URLSearchParams object from the query string part of the current page's URL. This allows us to easily access, manipulate, or check the query parameters in the URL.

```js
const fetchProduct = async () => {
	const params = new URLSearchParams(window.location.search);
	const id = params.get("id");
	try {
		// We want to pull out all the information related to a single product only.
		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		course.innerHTML = `<p class="error-message">There was an error</p>`;
	}
};
```

<!-- Home page -->

```js
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
        <img src=${url} alt="" class="single-product-img" />
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
```

<!-- Single course -->

```js
const course = document.querySelector(".course");

const url = "https://www.course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
	course.innerHTML = `<div class="loading"></div>`;
	const params = new URLSearchParams(window.location.search);
	const id = params.get("id");

	console.log("search location =", window.location.search);
	console.log("id =", id);
	console.log(`${url}?id=${id}`);
	try {
		// We want to pull out all the information related to a single product only.
		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		course.innerHTML = `<p class="error-message">There was an error</p>`;
	}
	return "url";
};

const displayProduct = (data) => {
	const { id, fields } = data;
	const { company, price, name, description, image } = fields;
	const { url } = image[0];
	// Change the title of the page.
	document.title = name.toUpperCase();
	course.innerHTML = `<div class="course-wrapper">
  <img src=${url} alt="" />
  <div class="course-info">
    <h3 class="course-title">${name}</h3>
    <h5 class="college-name">${company}</h5>
    <span class="duration">${price}</span>
    <div class="colors">
      <span class="course-color" style="background-color: blue"></span>
      <span class="course-color" style="background: red"></span>
      <span class="course-color" style="background-color: green"></span>
    </div>
    <p class="course-info">
     ${description}
    </p>
    <button class="btn cart">add to cart</button>
  </div>
</div>`;
};

const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
};

start();
```
