import fetchPeople from "./src/fetchPeople.js";
import displayButton from "./src/displayButton.js";
import displayFollowing from "./src/displayPeople.js";
import paginate from "./src/paginate.js";
import getlement from "./src/getElement.js";

const title = getlement(".section-title h1");
const btnContaier = getlement(".btn-container");

// set up a function to display items dynamically
let index = 1;
let pages = [];
const setPages = () => {
  console.log("idnex", pages[index]);
  displayFollowing(pages[index]);
  displayButton(btnContaier, pages, index);
};

const show = async () => {
  const following = await fetchPeople;
  title.textContent = "Pagination";
  // in pages we have 5 arrays,display pages[0] means first array.
  pages = paginate(following);
  console.log("pages", pages);
  setPages();
};

window.addEventListener("load", show);
