const array = [1, 4, 6, 8];
const newObject = { ...array };
console.log("new object =", newObject);

const numbers = [1, 2, 3, 4, 5, 6];

function add(x, y, z, w, j, k) {
	return x + y + z + w + j + k;
}

// using apply to use elements of an array as argument
// fnc.apply(object, args)
const addition = add.apply(null, numbers);
console.log("total =", addition);

const addSpread = add(...numbers);
console.log("total with spread =", addSpread);

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
console.log("new array =", array3);

// append all items from array2 into array1
arr3 = array1.concat(array2);
console.log("new array with concat =", arr3);

// Spread Operator in Objects
const pr = { name: "Baghlan", Country: "Afghanistan", Hobby: "Football" };
const ind = { name: "Hyderabad", Country: "India", Special: "technology" };
const merged = { ...ind, ...pr };

console.log("new object", merged);

// Inside an object the property name should be unique, otherwise, it will be over written by other same property names that comes later.
