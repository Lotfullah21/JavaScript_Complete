const url = "https://randomuser.me/api/";

function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    return `${selector} does not exist`;
  }
}

const userName = getElement(".user-name");
console.log(userName);
