/* every time we create a string, javascript create a wraper object, a wrapper object is an object that is created to wrap a primitive value
 The wrapper objects provide methods and properties that allow you to perform operations on the wrapped primitive values.

*/

let str = "Hello"; // primitive string value
let strObject = new String(str); // String wrapper object
console.log(str);
console.log(strObject);

let home = "love Afghanistan and kabul";
let upperCase = home.toUpperCase();
console.log(home);
console.log(upperCase);
console.log(home.toLowerCase());

/*
 if you are working with strings that involve characters specific to a particular language or region, or if you want to ensure proper case conversion based on the user's locale, toLocaleLowerCase().
*/

console.log(upperCase.charAt(0));
console.log(home.charAt(home.length - 1));
console.log(home.indexOf("a"));
console.log(home.indexOf("y")); // returns -1 if not present
console.log(home.trim()); // trim the wide space from the end and begining of a string
console.log(home.startsWith("love"));
console.log(home.trim().toUpperCase().startsWith("LOVE"));
console.log(home.includes("kab"));

/* template literals
introduced in ES6, 
syntax: `${expression}`
*/

const name = "Ahmad";
console.log(`he is ${name}`);

function helloParam(lName, fName) {
  fullName = `${fName} ${lName}`.toUpperCase();
  console.log(fullName);
  return fullName;
}

helloParam("obama", "Barak");

// if we use objects, the order does not matter,the key-value pairs matter. pass the function parameter as object.

function hello({ lName, fName }) {
  fullName = `${fName} ${lName}`.toUpperCase();
  console.log(fullName);
  return fullName;
}

// In JavaScript, the slice() method is used to extract a portion of an array or a string and returns a new array or string containing the extracted elements.
// slice returns the grabbed or cutted elements of the string.
let house = "abcdefghijklmnopqr";

console.log("SLICING STARTED FROM HERE");
console.log(house.slice(0, 10)); // slice the string starting from 0th index and remove 10 elements
console.log(house.slice(7)); // slice the string starting from 7th index and grab it.
console.log(house.slice(0, 10)); // slice the string starting from 0th index and remove 10 elements
console.log(house.slice(-5)); // take from last indices.
