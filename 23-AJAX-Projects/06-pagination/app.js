import fetchPeople from "./src/fetchPeople.js";
import displayButton from "./src/displayButton.js";
import displayFollowing from "./src/displayPeople.js";
import paginate from "./src/paginate.js";
import getlement from "./src/getElement.js";

const title = getlement(".section-title h1");
const btnContaier = getlement(".btn-container");

// set up a function to display items dynamically
let index = 3;
let pages = [];
const setPages = () => {
  console.log("idnex", pages[index]);
  displayFollowing(pages[index]);
  displayButton(btnContaier, pages, index);
  console.log("pages in setPAGES", pages, index);
};

const show = async () => {
  const following = await fetchPeople;
  title.textContent = "Pagination";
  // in pages we have 5 arrays,display pages[0] means first array.
  pages = paginate(following);
  console.log("pages", pages);
  setPages();
};

btnContaier.addEventListener("click", function (e) {
  // if it contains btn-container, return from the function and do nothing
  if (e.target.classList.contains("btn-container")) {
    return;
  }
  if (e.target.classList.contains("page-btn")) {
    // console.log(e.target.dataset.index);
    // change the index to the current target
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index++;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  // when index changes, display different page.
  setPages();
});
window.addEventListener("load", show);
