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
// Applying map and filter methods
const capitalCities = cities.map(upper);
const kabulCity = cities.filter(kabul);

console.log(capitalCities);
console.log(kabulCity);

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);

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
