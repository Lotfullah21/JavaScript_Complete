const countries = {
  name: ["Iran", "India", "Iraq"],
  location: "Asia",
  population: 20,
  oil: true,
};
// destructuring and using rest operator.
const { location, ...moreinfo } = countries;
console.log(countries);
console.log("Spread", moreinfo);
console.log(location);
