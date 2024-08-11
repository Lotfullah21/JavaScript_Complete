// Function to change the content of t2
function changeSubject() {
  const col2 = document.getElementById("c2");
  const isML = col2.firstChild.nodeValue === "Machine Learning";
  col2.firstChild.nodeValue = isML ? "Deep Learning" : "Machine Learning";
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", changeSubject);
