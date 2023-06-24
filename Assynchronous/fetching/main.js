const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

setTimeout(() => {
  console.log("WAIT FOR TWO SECONDS");
}, 2000);

// Chaining
fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ERROR, ${response.status}`);
    }
    return response.json();
  })
  .then((data) =>
    console.log(data[0].price, data[0].name, data[0].type, data[0].image)
  )
  .catch((err) => {
    console.log(err);
  });

// call back hell
// fetchPromise.then((response) => {
//   const request = response.json();
//   console.log(request);
//   request.then((data) => {
//     console.log(data);
//     console.log(data[2].price);
//     console.log(data[3]["type"]);
//   });
// });
