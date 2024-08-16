// we can check equality of our data by == or ===.
// by '==' we can check the value.
// by '===' check the value and type.

const num1 = 32;
const num2 = 32;
const checkValues = num1 == num2;
const checkData = num1 === num2;
console.log(checkData);
console.log(checkValues);

const number1 = 32;
const str1 = "32";
const check_values = number1 == str1;
const check_data = number1 === str1;
console.log("check only values =", check_values);
console.log("check values and data type =", check_data);
