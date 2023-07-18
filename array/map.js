/*
map:
it is method that iterates over the elements of an arrya
it returns a new array
it returns a new array by modifying the original array elements.
we pass a callback or anonymous function.
take this callback function and apply to each element in the array and return me a new array.
*/

const geography = [
  {
    name: "Afghanistan",
    population: 42.2 + "Million",
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

const newLocation = geography.map(function (country) {
  return country.location + " World";
});
// it returns a new array
// the whole idea in here is, the map function goes through all elements in array and apply that callback function.
const newInfo = geography.map(function (item) {
  return item.population;
});

const booleanConditon = geography.map(function (item) {
  return item.age > 10;
});

console.log(newLocation);
console.log(newInfo);
console.log(booleanConditon);
geography.map(function (item) {
  console.log(item.name);
});
