/*
we have two kind of web storage API which is provided by browser
session storage, local storage
 */

sessionStorage.setItem("name", "ahmad");
localStorage.setItem("name", "lotfullah");
localStorage.setItem("job", "cashier");
localStorage.setItem("sport", "football");
localStorage.setItem("location", "Nepal");
// get the item
const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("job");
console.log(localStorage.getItem("job"));
// clear whole local storage
localStorage.clear();

// pass the data using JSON.stringify() and access it using JSON.parse()

const subjects = ["AI", "ML", "PYthon"];
localStorage.setItem("subject", JSON.stringify(subjects));
const subject = JSON.parse(localStorage.getItem("subject"));
console.log(subject[0]);

// add an a new item
let colleges;
if (localStorage.getItem("colleges")) {
  colleges = JSON.parse(localStorage.getItem("colleges"));
} else {
  colleges = [];
}
colleges.push("MIT");
colleges.push("CMU");
localStorage.setItem("colleges", JSON.stringify(colleges));
