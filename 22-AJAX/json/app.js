const btn = document.querySelector(".btn");
const url = "./api/sample.txt";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  // console.log(xhr);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
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
