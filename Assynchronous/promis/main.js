const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous task
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Fulfill the promise
    } else {
      reject("Promise rejected"); // Reject the promise
    }
  }, 1000);
});

// Handling the promise using "then"
myPromise.then(
  (result) => {
    console.log("Promise fulfilled with result: " + result);
  },
  (error) => {
    console.log("Promise rejected with error: " + error);
  }
);
