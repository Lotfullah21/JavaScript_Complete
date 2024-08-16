let name = "Ahmad";
let lastName = "Wali";
let fullName = name + " " + lastName;
console.log(fullName);

// If even one of them are string, using + operator causes to do the concatenation
let num1 = 10;
let num2 = "21";
console.log(num1 + num2);

// Implicit conversion

// If even one of them are string, using *,-,/ operator does not result to a concatenated string, but rather if values are convertable to a number, arithmetic operation will be performed.
let a = 10;
let b = 5;
console.log(a - b);
console.log(a * b);
console.log(a / b);

// If one is a number and the other one is a string which is not convertible to a number,  then we will get NaN (not a number)
let d = 10;
let c = "hi";
console.log(d - c);
console.log(d * c);
console.log(d / c);
