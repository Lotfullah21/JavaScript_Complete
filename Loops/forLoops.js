// const { ConnectionStates } = require("mongoose");

// for (var i = 0; i < 10; i++) {
//   console.log(
//     "You can be successful if keep in  \n Patience!\n HardWork!\n Consistency!"
//   );
// }
// console.log("YOU CAN DO IT!");

// for (Initial value; condition to keep executing; inc/dec after each iteration of the loop)

for (var i = 3; i >= 0; i -= 1) {
  console.log(i);
}
console.log("You did it");

const cities = ["Kabul", "Baghlan", "Kandahar", "Khost"];

for (city of cities) {
  console.log(city);
}

function upper(city) {
  return city.toUpperCase();
}

function kabul(city) {
  return city.startsWith("K");
}
const capitalCities = cities.map(upper);
const kabulCity = cities.filter(kabul);
console.log(capitalCities);
console.log(kabulCity);
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]

// The standard for loop

// for (initializer; condition; final - expression) {
//   // code to run
// }

const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
