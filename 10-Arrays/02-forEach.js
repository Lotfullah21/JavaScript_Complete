const geography = [
	{
		name: "Afghanistan",
		population: 42.2 + " Million",
		location: "South Asia",
	},
	{ name: "India", population: 1.435 + " Billion", location: "South Asia" },
	{ name: "Iran", population: 87.9 + " Million", location: "West Asia" },
];

// passing this callback as reference
function lookUp(geo) {
	// console.log(geo);
	console.log(geo.name, geo.population);
	//   return geo.location;
}

// Pass the callback as a reference and do not invoke it immediately.
// It takes each element of the array as a reference.
geography.forEach(lookUp);
// We pass each element of our array to the callback function as a parameter

// We can pass anonymous function as well.
geography.forEach(function (item) {
	console.log(item.name);
});
