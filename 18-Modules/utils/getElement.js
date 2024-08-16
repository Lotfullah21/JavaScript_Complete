export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("element does not exist");
  }
};
