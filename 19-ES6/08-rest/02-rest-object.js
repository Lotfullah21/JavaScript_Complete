const countries = {
	name: ["Iran", "India", "Iraq"],
	location: "Asia",
	population: 20,
	oil: true,
};
// destructuring and using rest operator, but here the specific property we want to destructure should match with the property in origin object.
const { location, ...moreInfo } = countries;
console.log(countries);
console.log("Spread", moreInfo);
console.log(location);
