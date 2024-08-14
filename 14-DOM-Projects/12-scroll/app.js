// ******************** SET DATE ************************

const date = new Date().getFullYear();
const footerDate = document.getElementById("date");

footerDate.innerHTML = date;

// ******************** CLOSE NAVBAR ************************

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const socialIcons = document.querySelector(".social-icons");
const navContainer = document.querySelector(".navlinks-container");

// we dynamically finding the height of the links and adding them while toggling
navToggle.addEventListener("click", function () {
	const containerHeight = navContainer.getBoundingClientRect().height;
	const linksHeight = navLinks.getBoundingClientRect().height;
	console.log(linksHeight);
	if (containerHeight === 0) {
		navContainer.style.height = `${linksHeight}px`;
	} else {
		navContainer.style.height = 0;
	}
});

// ******************** FIXED NAVBAR ************************
const navbar = document.getElementById("navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
	const navHeight = navbar.getBoundingClientRect().height;
	const scrollHeight = window.scrollY;
	if (scrollHeight > navHeight) {
		navbar.classList.add("fixed-navbar");
	} else {
		navbar.classList.remove("fixed-navbar");
	}

	if (scrollHeight > 510) {
		topLink.classList.add("show-top-link");
	} else {
		topLink.classList.remove("show-top-link");
	}
});

// ******************** Scroll ************************

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		//   navigate to specific href
		console.log(e.currentTarget);
		//   slice gives as a new string,here starting from 0th index of each href.
		const id = e.currentTarget.getAttribute("href").slice(1);
		const ele = document.getElementById(id);
		//   ********* get the height *************
		const navHeight = navbar.getBoundingClientRect().height;
		const navContainerHeight = navContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains("fixed-navbar");
		//   how much distance from top begining in pixels.
		let topPosition = ele.offsetTop - navHeight;
		//   hide the links once we click on them
		navContainer.style.height = 0;
		if (!fixedNav) {
			topPosition = topPosition - navHeight;
		}
		//   it  means we have opened the links in smaller screen
		if (navHeight > 82) {
			topPosition = topPosition + navContainerHeight;
		}
		//  where to scroll.
		window.scrollTo({ left: 0, top: topPosition });
		console.log("href", id);
		console.log("element", ele);
		console.log("top-position", topPosition);
		console.log(navHeight, navContainerHeight, fixedNav);
	});
});
