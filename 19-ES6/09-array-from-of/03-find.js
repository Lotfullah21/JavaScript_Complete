const countries = [
	{ name: "India", population: 1332, region: "Asia" },
	{ name: "Iran", population: 87, region: "Asia" },
	{ name: "Iraq", population: 45, region: "Asia" },
];
const iran = countries.find((country) => {
	return country.name == "Iran";
});

console.log(iran);

// we can do the same thing with filter, but filter returns an array and find returns a single object
const india = countries.filter(function (country) {
	if (country.name === "Iran") {
		return country;
	}
});
console.log(india);
