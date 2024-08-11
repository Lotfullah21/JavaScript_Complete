const { ConnectionStates } = require("mongoose");

`spread operators expands an array into its elements
`;

const array = [1, 3, 4, 3];
const newObject = { ...array };
console.log(newObject);

const nums = [1, 2, 3, 4, 5, 6];
function add(x, y, z, w, j, k) {
  return x + y + z + w + j + k;
}
// using apply to use elements of an array as argument
const addition = add.apply(null, nums);
console.log(addition);

const addSpread = add(...nums);
console.log(addSpread);

// Create a new array

const provinces = ["Baghlan", "kabul", "Herat"];
const addedProvinces = ["Paktia", ...provinces, "Nimroz"];
console.log(provinces, addedProvinces);

// Copy an array

const copiedProvinces = [...provinces];
console.log(copiedProvinces);

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [...array1, ...array2];
console.log(array3);
// append all items from array2 into array1
arr3 = array1.concat(array2);
console.log(arr3);

// Spread Operator in Objects

const pr = { name: "Baghlan", Country: "Afghanistan", Hobby: "Football" };
const ind = { name: "Hyderabad", Country: "India", Special: "technology" };
const merged = { ...ind, ...pr };
console.log(merged);
