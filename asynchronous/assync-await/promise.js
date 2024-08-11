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
// from async, we always return a promise

btn.addEventListener("click", async () => {
  try {
    await changeColor(2000, "gold", heading1);
    await changeColor(1200, "red", heading2);
    await changeColor(1234, "green", heading3);
  } catch (error) {
    console.log(error);
  }
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
