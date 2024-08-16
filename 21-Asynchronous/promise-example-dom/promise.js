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
const container = getElement(".image-container");

btn.addEventListener("click", () => {
  changeColor(2000, "gold", heading1)
    .then(() => changeColor(1200, "red", heading2))
    .then(() => changeColor(12334, "green", heading3))
    .catch((error) => {
      console.log(error);
    });
});

function changeColor(time, color, element) {
  const promise = new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`the ${element} does not exist`));
    }
  });
  return promise;
}
