import getElement from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = getElement(".random-user-btn");

const showUser = async () => {
	const user = await fetchUser();
	displayUser(user);
	console.log(user);
};

document.addEventListener("load", () => {
	showUser();
});

btn.addEventListener("click", () => {
	showUser();
});

showUser();
