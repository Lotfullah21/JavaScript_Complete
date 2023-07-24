const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const socialIcons = document.querySelector(".social-icons");
navToggle.addEventListener("click", function () {
  if (navLinks.classList.contains("show-links-nav")) {
    navLinks.classList.remove("show-links-nav");
    socialIcons.classList.remove("show-links-icons");
  } else {
    navLinks.classList.add("show-links-nav");
    socialIcons.classList.add("show-links-icons");
  }
});
