var subjects = ["Artificial Intelligence", "Machine Learning"];
console.log(subjects.length);
function getSubjects() {
  document.getElementById("subject").innerHTML = subjects;
}

function addSubject() {
  let subject = prompt("Enter your favorite subjects: ");
  // as we start indexing from 0, we can use arr.length method to add elements to the end of an array
  subjects[subjects.length] = subject;
  document.getElementById("subject").innerHTML = subjects;
  console.log(subjects.length);
}
