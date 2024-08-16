const btn = document.querySelector(".btn");
const url = "./api/colleges.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  // console.log(xhr);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      const displayData = data
        .map((university) => {
          return `<h4>${university.name} in ${university.location}</h4>`;
        })
        .join(" ");
      const article = document.createElement("article");
      article.innerHTML = displayData;
      document.body.appendChild(article);
    } else {
      console.log({
        status: xhr.status,
        readyState: xhr.readyState,
        text: xhr.statusText,
      });
    }
    console.log(xhr);
  };
  xhr.send();
}
