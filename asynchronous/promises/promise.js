function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw Error("Something going wrong");
  }
}

const heading1 = getElement(".one");
const heading2 = getElement(".two");
const heading3 = getElement(".three");
const btn = getElement(".btn");

const promise = new Promise((resolve, reject) => {
  value = 2;
  if (value) {
    resolve("promise resolved,Congratulations !!!!!");
  }
  reject("OOPs,Promised denied as you did not wanted");
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
