const myAge = 25;
const myWeight = 59.984934444444444444445555555555555555555555555433333333389439939;

console.log(myAge);
console.log(myWeight, typeof myAge);
const shorterMyWeight = myWeight.toFixed(5);
console.log(shorterMyWeight, typeof shorterMyWeight);

// Number() is constructor to change the values of other data types to Numbers

const numberShorterMyWeight = Number(shorterMyWeight);
console.log(numberShorterMyWeight, typeof numberShorterMyWeight);

const num1 = 2;
let num2 = 34;
const result = num1 + num2;
console.log(num1, num2, result, typeof result);
const myString2 = result.toString();
console.log(myString2, typeof myString2);

// Increment and Decrement

let num = 32;
num++;
num--;
console.log(num);
