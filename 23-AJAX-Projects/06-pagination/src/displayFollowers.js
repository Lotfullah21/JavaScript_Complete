import get from "./getElement.js";
const container = get(".container");

const displayFollowers = (people) => {
	const followers = people
		.map((person) => {
			const { login, avatar_url, html_url: profile_url } = person;
			return `<article class="card">
    <img src="${avatar_url}" alt="${login}">
    <h4>${login}</h4>
    <a href="${profile_url}" class="btn">view profile</a>
    </article>`;
		})
		.join("");

	container.innerHTML = followers;
};

export default displayFollowers;
