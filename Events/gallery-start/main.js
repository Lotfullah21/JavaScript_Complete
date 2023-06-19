const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
];
/* Declaring the alternative text for each image file */
const alt = [
  "an eye",
  "a beautiful fllower",
  "an old painting",
  "pattoni fllowers",
  "a hero",
];
/* Looping through images */

for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", images[i]);
  newImage.setAttribute("alt", alt[i]);
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

function handleClick(e) {
  overlay.style.backgroundColor = "rgba(0.1,0.5,0,0.5)";
  e.currentTarget.style.backgroundColor = "blue";
  document.body.style.backgroundColor = "red";
}

btn.addEventListener("click", handleClick);
