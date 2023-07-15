const courses = document.body.querySelector(".lab");
const putCourses = document.body.querySelector("#set-text");

putCourses.addEventListener("click", () => {
  courses.textContent =
    "Artificial Intelligence, Deep Learning, Machine Learning";
});

const removeCourses = document.body.querySelector("#clear-text");
removeCourses.addEventListener("click", () => {
  courses.textContent = "";
});
