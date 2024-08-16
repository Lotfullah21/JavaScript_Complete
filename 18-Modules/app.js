import { subjects } from "./utils/data.js";
import { getElement } from "./utils/getElement.js";
import showSubjects from "./utils/addSubjects.js";

const btn = getElement(".btn");
const container = getElement(".container");

btn.addEventListener("click", () => {
  container.innerHTML = showSubjects(subjects);
});
