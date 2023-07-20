// we can change the functionality of an element using events
/*   first: select the element
    second: addEventListener()
     third: which event to add.
*/

const btn = document.querySelector(".btn");
const heading = document.querySelector("#heading");
function changBackground() {
  let hasClass = heading.classList.contains("color");
  if (hasClass) {
    heading.classList.remove("color");
  } else {
    heading.classList.add("color");
  }
}

btn.addEventListener("click", changBackground);

// Mouse Events
