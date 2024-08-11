/* Arrow functions are shorter version of an anonymous function.
we do not need declare the "function" before the paramteres, and also we can omit the "{}" in certain
cases.

most of the time it has been used when we use the function as parameter to another function.

we can omit "{}" we have only one line of code

*/

function square(x) {
  console.log(x * x);
}
square(3);

const x = [2, 3, 211, 23];
const double = x.map((elem) => elem * elem);
console.log(double);

// (c) => c * 10;
// console.log(c);
