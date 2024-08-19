import getElement from "./getElement.js";

const container = getElement(".container");
const userInfo = getElement(".user-info");
const userValue = getElement(".user-value");
const btn = getElement(".random-user-btn");
const icons = [...document.querySelectorAll(".icon")];
const img = getElement(".user-img");

const displayUser = (person) => {
	img.src = person.img;
	userValue.textContent = person.name;
	// Before displaying new user, remove the active from all other users.
	icons.forEach((icon) => {
		icon.classList.remove("active");
	});
	icons[0].classList.add("active");
	icons.forEach((icon) => {
		const label = icon.dataset.label;
		icon.addEventListener("click", () => {
			userInfo.textContent = `my ${label} is `;
			userValue.textContent = person[label];
			icons.forEach((icon) => {
				icon.classList.remove("active");
			});
			icon.classList.add("active");
		});
		console.log(label);
	});
};

export default displayUser;
