function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    return new Error(`${element} does not exist`);
  }
}
// here we are just copying the original data,so that in later usecase should change the original dataset.
let productsData = [...products];

/* #######################3 get elements ########################*/
const producstsContainer = getElement(".courses-container");
const form = getElement(".input-form");
const searchInput = getElement("#search");

/* ####################### rendering the data ########################*/

const displayProducts = () => {
  if (productsData.length < 1) {
    producstsContainer.innerHTML = `<h3>No data matched your preference </h3>`;
    return;
  }
  producstsContainer.innerHTML = productsData
    .map((product) => {
      const { id, title, company, image, price } = product;
      return `   <article class="course" id=${id}>
          <img src=${image} alt="" class="course-img" />
          <footer>
            <h5 class="course-name">${title}</h5>
            <span class="course-duration">${price} months</span>
          </footer>
        </article>`;
    })
    .join(" ");
};

displayProducts();

/* ####################### Search based on text  ########################*/

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  // filter the main data based on title keyword and return the array as filter returns a new aray if the condition is meet.
  productsData = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

/* ####################### Filter Buttons  ########################*/

const schools = getElement(".schools");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(
      products.map((product) => {
        return product.company;
      })
    ),
  ];
  schools.innerHTML = buttons
    .map((company) => {
      return `<button class="university-btn img" data-id=${company}>${company}</button>`;
    })
    .join("");
  console.log(buttons);
};

displayButtons();

/* ####################### Filter Buttons  ########################*/
schools.addEventListener("click", (e) => {
  const ele = e.target;
  if (ele.classList.contains("university-btn")) {
    if (ele.dataset.id === "all") {
      productsData = [...products];
    } else {
      productsData = products.filter((product) => {
        // return those products that its company name = to the current ele id
        return product.company === ele.dataset.id;
      });
    }
    // once we click on btn, put the search bar value empty
    searchInput.value = "";
    displayProducts();
  }
});
