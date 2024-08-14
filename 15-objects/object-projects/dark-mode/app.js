function getElement(selector) {
  element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    return `${element} does not exist`;
  }
}

const btn = getElement(".btn ");
const articleContainer = getElement(".articles");
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const importedArticles = articles
  .map((article) => {
    const { date, snippet, title, length } = article;
    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `<section class="articles">
      <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span class="date">${formatDate}</span>
          <span class="read-time">${length} min read</span>
        </div>
        <p class="post-content">
         ${snippet}
        </p>
      </article>`;
  })
  .join(" ");

articleContainer.innerHTML = importedArticles;
// console.log(importedArticles);
