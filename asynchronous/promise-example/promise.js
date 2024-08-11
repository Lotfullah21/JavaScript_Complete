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
url =
  "https://images.unsplash.com/photo-1610295434404-8ea904930a12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80";
btn.addEventListener("click", () => {
  loadImage(url)
    .then((image) => container.appendChild(image))
    .catch((error) => {
      console.log(error);
    });
});

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    let image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
    image.addEventListener("error", () => {
      reject(`something wrong with your resources ${url}`);
    });
  });
  return promise;
}
