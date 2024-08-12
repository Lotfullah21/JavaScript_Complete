const navLinks = document.querySelector(".nav-links");
const socialLinks = document.querySelector(".social-links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", function () {
	if (navLinks.classList.contains("show-links")) {
		navLinks.classList.remove("show-links");
	} else {
		navLinks.classList.add("show-links");
	}
});

toggleBtn.addEventListener("click", function () {
	if (socialLinks.classList.contains("show-social-links")) {
		socialLinks.classList.remove("show-social-links");
	} else {
		socialLinks.classList.add("show-social-links");
	}
});
