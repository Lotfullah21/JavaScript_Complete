const btn = document.querySelector(".btn");
const url = "./api/colleges.json";

btn.addEventListener("click", async () => {
  try {
    // what ever value you are getting after fulflilling the promise,save it in response
    const response = await fetch(url);
    // data you are getting from response save it in data
    const data = await response.json();
    showNames(data);
  } catch (error) {
    console.log("error");
  }
});

const showNames = (colleges) => {
  const displayData = colleges
    .map((college) => {
      const { name, location } = college;
      return `<h5>${name} is located in ${location}</h5>`;
    })
    .join(" ");
  const ele = document.createElement("article");
  ele.innerHTML = displayData;
  document.body.appendChild(ele);
  console.log(displayData);
};

// fetch(url)
//   .then((respon) => {
//     return respon.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
