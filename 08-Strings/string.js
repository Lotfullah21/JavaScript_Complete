const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"



const output1 = `I like the song.
I gave it a score of 90%.`;
console.log(output1);

// String Methods



// if char not present, it will return -1
console.log(age.indexOf("32"));
console.log(age.indexOf("32 year"));
console.log(age.slice(1, 3));

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
