const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("PROMISE FULFILLED");
  }
  reject("Prmoise Rejected");
});

// pass the result of the previous promise object here
const promis1 = new Promise((resolve, reject) => {
  console.log("Hello");
});
const promis2 = new Promise((resolve, reject) => {
  console.log("Lotfullah");
});
const promis3 = new Promise((resolve, reject) => {
  console.log("You");
});
const promis4 = new Promise((resolve, reject) => {
  console.log("Can Do it");
});

Promise.all([promis1, promis2, promis3, promis4]).then((words) => {
  console.log(words);
});

promise
  .then((result) => result + " CONGRATULATIONS")
  .then((result1) => result1 + " LOTFULLAH")
  .catch((err) => {
    console.log("Erros", err);
  })
  .then((getResponseFromresult1) => {
    console.log(getResponseFromresult1 + "!!!");
  });
