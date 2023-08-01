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
btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "gold";
      setTimeout(() => {
        heading3.style.color = "red";
        setTimeout(() => {
          btn.style.background = "blue";
          btn.style.color = "white";
        }, 2000);
      }, 1000);
    }, 2000);
  }, 1000);
});

console.log("I am here");
