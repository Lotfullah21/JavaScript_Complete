/* it does not return a new array
in forEach method, we pass a callback function.
 in two ways we can do this, one is directrly passing as an anonymous function and the 2nd way is passing from outside.
 this methods allows us to iterate over an array
*/

const geography = [
  { name: "Afghanistan", population: 42.2 + "Million", location: "South Asia" },
  { name: "India", population: 1.435 + " Billion", location: "South Asia" },
  { name: "Iran", population: 87.9 + " Million", location: "West Asia" },
];

// passing this callback as reference
function lookUp(geo) {
  console.log(geo.name, geo.population);
  //   return geo.location;
}

geography.forEach(lookUp);
// we pass each element of our array to the callback function as a prameter
// we can pass anonymous function as well.
geography.forEach(function (item) {
  console.log(item.name);
});
