const geography = [
	{
		name: "Afghanistan",
		population: 42.2 + "Million",
		location: "South Asia",
		age: 10,
	},
	{
		name: "India",
		population: 1.435 + " Billion",
		location: "South Asia",
		age: 20,
	},
	{
		name: "Iran",
		population: 87.9 + " Million",
		location: "West Asia",
		age: 30,
	},
];

const totalAge = geography.reduce(function (accumulator, currentIteration) {
	console.log(`total age  ${accumulator}`);
	console.log(`current iteration ${currentIteration.age}`);
	accumulator = accumulator + currentIteration.age;
	console.log("total age: ", accumulator);
	console.log("\n");
	return accumulator;
}, 0);

console.log(totalAge);
