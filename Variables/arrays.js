// Arrays are list-like object which contains mutiple values inside a single list

const numbers = [1, 2, 3, 45, 6, 2];
console.log(numbers);
const random = ["hello", 1, 2, 3, "12", [21, 112, 121, ""]];
console.log(random[2]);
console.log(random[5]);
console.log(random[5][2]);
console.log("length", random.length);

random[0] = "Good Bye";

console.log(random);

console.log(random.indexOf("Good Bye"));
console.log(random[4].indexOf("21"));

const cities = ["Kabul", "Baghlan", "Herat"];
console.log(cities);
cities.push("'Balkh");
cities.push("Khost");
console.log(cities);

// the new length of the array will return when the method call is complete
// const newLength = cities.push("Panjshir");

// console.log(newLength);

// concat method

// pop() removes last element of the array
cities.pop();
console.log(cities);
const newLength = cities.pop("Panjshir");
console.log(newLength);

// The pop() method returns the item that was removed.
// to remove the first element use the shift method
cities.shift();

console.log(cities);

const city = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = city.indexOf("Liverpool");
if (index !== -1) {
  city.splice(index, 1);
}
console.log(city); // [ "Manchester", "Edinburgh", "Carlisle" ]

const ind = cities.indexOf("Baghlan");

if (ind !== -1) {
  cities.splice(ind, 1);
}

console.log(cities);
const newCities = ["Kabul", "Baghlan", "Herat"];

for (const city of newCities) {
  console.log(city);
}

// map function

function triple(num) {
  return num ** 3;
}

const number = [2, 3, 4, 5, 6, 7, 8, 9];
const tripleNumbers = number.map(triple);
console.log(number);
console.log("Initial numbers", number);
console.log("Mapped numbers", tripleNumbers);

// Filter
function isLong(city) {
  return city.length > 8;
}
// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
// const longer = cities.filter(isLong);
// console.log(longer); // [ "Liverpool", "Edinburgh" ]

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// string to array
const newSeperatedCities = data.split(",");
console.log(newSeperatedCities);

// array to string
const joinedCities = newSeperatedCities.join(",");
console.log(joinedCities);

console.log(newSeperatedCities[2]);
console.log(joinedCities[2]);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(dogNames);
