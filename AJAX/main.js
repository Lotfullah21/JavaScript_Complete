// const btn = document.querySelector(".btn");
// const countriesContainer = document.querySelector(".countries");

// const request = new XMLHttpRequest();
// request.open(
//   "GET",
//   "https://countries-api-836d.onrender.com/countries/portugal"
// );
// request.send();
// console.log(this.responseText);
// request.addEventListener("load", function () {
//   console.log(this.responseText);
// });

const request = fetch("https://countries-api-836d.onrender.com/countries");

console.log(request);

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data);
  });
});
