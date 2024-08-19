const course = document.querySelector(".course");

const url = "https://www.course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
	course.innerHTML = `<div class="loading"></div>`;
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

const displayProduct = (data) => {
	const { id, fields } = data;
	const { company, price, name, description, image, colors } = fields;
	const { url } = image[0];
	// Change the title of the page.

	const colorsList = colors
		.map((color) => {
			return `<span class="course-color" style="background-color: ${color}"></span>`;
		})
		.join(" ");

	document.title = name.toUpperCase();
	course.innerHTML = `<div class="course-wrapper">
  <img src=${url} alt="" />
  <div class="course-info">
    <h3 class="course-title">${name}</h3>
    <h5 class="college-name">${company}</h5>
    <div class="colors">
    ${colorsList}
  </div>
 
    <span class="duration">${price}</span>
    <div class="colors">


  
    
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
