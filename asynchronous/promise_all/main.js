const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

const fetchAll = Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]);

fetchAll
  .then((responses) => {
    for (response of responses) {
      console.log(response);
    }
  })
  .catch((error) => {
    console.log("Failed", error);
  });

//   USING Promise.any()
// even though the first one is wrong address, but still it will be fulfilled
const fetchPromise4 = fetch(
  "htssstps://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
const fetchAny = Promise.any([fetchPromise1, fetchPromise2, fetchPromise4]);

fetchAll
  .then((responses) => {
    for (response of responses) {
      console.log(response);
    }
  })
  .catch((error) => {
    console.log("Failed", error);
  });
