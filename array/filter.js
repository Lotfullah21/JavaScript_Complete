/*
it iterates over the elements of an array
returns a new array
it can change the size of the original array.
it returns an array based on a condition.

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

const lessThanTen = geography.filter(function (country) {
  return country.age < 80;
});

console.log(lessThanTen);
