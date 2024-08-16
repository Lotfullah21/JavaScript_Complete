const num = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums = num.filter(function (item) {
	return item > 4;
});
console.log("new array", newNums);

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

const lessThanTen = geography.filter(function (country) {
	return country.age < 80;
});

console.log(lessThanTen);
