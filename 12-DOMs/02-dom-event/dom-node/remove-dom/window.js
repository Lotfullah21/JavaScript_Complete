// we can remove elements from using two methods
// remove()
// removeChild()

const heading = document.getElementById("heading");
// heading.remove();

// removing from parent
const div = document.getElementById("div");
const result = div.querySelector("h2");
div.removeChild(result);
