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
