const myAge = 25;
const myWeight = 59.984934444444444444445555555555555555555555555433333333389439939;

console.log(myAge);
console.log("longer number: ", myWeight, typeof myAge);
const shorterMyWeight = myWeight.toFixed(5);
console.log("fixed to 5: ", shorterMyWeight, typeof shorterMyWeight);

// Number() is constructor to change the values of other data types to Numbers

const numberShorterMyWeight = Number(shorterMyWeight);
console.log(
  "converted number: ",
  numberShorterMyWeight,
  typeof numberShorterMyWeight
);

const num1 = 2;
let num2 = 34;
const result = num1 + num2;
console.log("operation: ", num1, num2, result, typeof result);
const myString2 = result.toString();
console.log("converted to string: ", myString2, typeof myString2);

// Increment and Decrement

let num = 32;
num++;
num--;
console.log(num);
// in console, the result of these consoles will be black or white for string and a colorfull like blue or pink for number.
console.log("hello");
console.log("32");
console.log(32);

// Number operations

// +=,-=,++,--,/=,*=,%;
let num_1 = 10;
num_1 += 30; // num_1 = num_1 + 10
console.log("+=", num_1);

let num_2 = 20;
num_2 *= 2;
console.log("*=", num_2);

let num_3 = 30;
num_3 /= 10;
console.log("=/", num_3);

let num_4 = 10;
num_4++;
console.log("++", num_4);

let num_5 = 10;
num_5--;
console.log("--", num_5);

num_6 = 11;
modulo = num_6 % 3;
console.log("modulo", modulo);

// Implicit type conversion
let x = "20";
let y = "30";
let add = x + y;
let div = x / y;
let mul = x * y;
// we can do -,*,/ operations on two string which has value of a number.
// but for  addition, that would be a concatenation.
let sub = y - x;
console.log("x + y=", add);
console.log("x - y=", sub);
console.log("x * y=", div);
console.log("x / y=", mul);
