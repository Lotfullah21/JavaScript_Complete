const subjects = ["AI", "PY", "ML", "DL", "ALGO"];
subjects.splice(8, 2); // starting from index 5, remove two elements
console.log("starting from index 5", subjects);

const city = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = city.indexOf("Liverpool");
// If liverpool index is found, starting from that, remove one element which is itself.
if (index !== -1) {
	city.splice(index, 1);
}
console.log(city); // [ "Manchester", "Edinburgh", "Carlisle" ]
