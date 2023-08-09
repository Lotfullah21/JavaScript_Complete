import getlement from "./getElement.js";
const container = getlement(".container");

const displayFollowing = (people) => {
  const followingPoeple = people
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `<article class="card">
      <img src="${avatar_url}" alt="${login}">
      <h4>${login}</h4>
        <a href="${html_url}" class="btn">visit profile</a>
      </article>`;
    })
    .join("");
  container.innerHTML = followingPoeple;
};

export default displayFollowing;
