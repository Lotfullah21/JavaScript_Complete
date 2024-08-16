// arrays
const array = ["hello", "salam", "bonjour", "Namasti"];
const countries = ["USA", "Afghanistan", "France", "India"];
const common = "سلام";

const elements = [array, countries]; // output: one array with two other arrays inside
const spreadArray = [...countries, common, ...array]; // output: one large array

console.log("No spread", elements);
console.log("With spread operator: ", spreadArray);

let numbers = [1, 2, 3, 10, 12, 18, 1000];
console.log(numbers);
numbers = [...numbers, 780];
console.log(numbers);
