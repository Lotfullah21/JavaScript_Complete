const arr = [1, 2, 3, 4, 5];
newArr = arr.map(function (item) {
	return item * 2;
});
console.log("new array = ", newArr);

const geography = [
	{
		name: "Afghanistan",
		population: 42.2 + " Million",
		location: "South Asia",
		age: 90,
	},
	{
		name: "India",
		population: 1.435 + " Billion",
		location: "South Asia",
		age: 43,
	},
	{
		name: "Iran",
		population: 87.9 + " Million",
		location: "West Asia",
		age: 40,
	},
];

// the whole idea in here is, the map function goes through all elements in array and apply that callback function.
const newInfo = geography.map(function (item) {
	return item.population;
});

const booleanCondition = geography.map(function (item) {
	return item.age > 10;
});

console.log(newInfo);
console.log(booleanCondition);
