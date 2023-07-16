// Strings
const bigmouth = "I've got no right to take my place…";
console.log(bigmouth);
// concatenation: adding two strings

const country = "Afg";
const province = "Baghlan";
const address = country + " " + province;
console.log("Address:", address);

const name_ = "Lotfullah";
const greeting = "Hello, " + name_;
console.log(greeting);

// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const output = "I like the song.\nI gave it a score of 90%.";
console.log(output);

const output1 = `I like the song.
I gave it a score of 90%.`;
console.log(output1);

// String Methods

const age = "32 years old";
console.log(age.length);
console.log(age[4]);

if (age.includes("32")) {
  console.log("Hello king");
} else {
  console.log("Hello Shah");
}

if (age.startsWith("32")) {
  console.log("you are good to go");
} else {
  console.log("the age does not start with 32");
}

if (age.endsWith("32")) {
  console.log("YOU ARE GOOD TO GO!");
} else {
  console.log("It does not start with 32");
}

// if char not present, it will return -1
console.log(age.indexOf("32"));
console.log(age.indexOf("32 year"));
console.log(age.slice(1, 3));
// everything starting from here
console.log(age.slice(1));
console.log(age.toUpperCase());
console.log(age.toLowerCase());

const updateAge = age.replace("32", "25");
console.log(updateAge);

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote);

const greet = "He".concat("ll").concat("o");
console.log(greet);
"ho-ho-ho".indexOf("-"); // 2

// slit method chops the string into array
const arr = "ho-ho-ho".split("-"); // 2
console.log(arr);

console.log(greet.charAt(0));
// CONVERTING THE BASE OF NUMBERS
console.log((10).toString(2)); // '1010'
console.log((2).toString(10));
