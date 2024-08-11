const form = document.querySelector("form");
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
  if (firstName.value === "" || lastName.value === "") {
    event.preventDefault();
    para.textContent = "enter your first and last name";
  }
});
