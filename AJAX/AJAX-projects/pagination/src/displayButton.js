const displayButton = (container, pages, inUseIndex) => {
  // for each pages array, give us a button,if inUseIndex === current index, add active class to it
  const btns = pages.map((_, currentIndex) => {
    return `<button class="page-btn ${
      currentIndex === inUseIndex ? "active" : "null"
    }" data-index=${currentIndex}>${currentIndex + 1}</button>`;
  });
  // still inside the button array,add next-btn to the end of the array
  btns.push('<button class="next-btn">next</button>');
  btns.unshift('<button class="prev-btn">prev</button>');
  // turn into a string
  container.innerHTML = btns.join("");
};

export default displayButton;
