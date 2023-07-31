// it returns the index of an element if present in the array.

const countries = [
  { name: "India", population: 1332, region: "Asia" },
  { name: "Iran", population: 87, region: "Asia" },
  { name: "Iraq", population: 45, region: "Asia" },
];

const id = countries.findIndex((country) => country.name === "Iraq");
const newArray = countries.slice(0, id);
console.log(id);
console.log("new array", newArray);
