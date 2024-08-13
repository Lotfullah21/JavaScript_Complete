const btnContainer = document.querySelector(".switch-btn");
const switchMode = document.querySelector(".switch");
const video = document.querySelector(".video-container");

// What we are saying is add the slide class.
// But in css, we have specified that if slide class is present, then move the switch 40% to the left
btnContainer.addEventListener("click", function (e) {
	if (!btnContainer.classList.contains("slide")) {
		btnContainer.classList.add("slide");
		video.pause();
	} else {
		btnContainer.classList.remove("slide");
		video.play();
	}
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
	preloader.classList.add("hide-preloader");
});
