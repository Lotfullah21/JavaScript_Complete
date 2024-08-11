// regular function
function greeting() {
  console.log("Hello");
}
greeting();
// arrwo function, no name
const sayHi = () => {
  console.log("Hello");
};
sayHi();

const mul = (a) => {
  return a * 10;
};
console.log(mul(10));

// omit the return statement and {} if there is a single line
const add = (a) => a + 2;
console.log(add(9));
const say = () => console.log("hello there");
say();
// if multiple line of code, explicitly use return

const sub = (x, y) => {
  result = x - y;
  return result;
};
const res = sub(10, 9);
console.log(res);

// for returning object use {} inside ()

const object = () => ({
  name: "Apple",
  year: 1983,
});
console.log(object);
console.log(object.name);
console.log(object().name);
console.log(object().year);

// arrow functions as callback

const numbers = [1, 2, 12, 10, 120, 200];
const nums = numbers.filter((num) => num > 10);
console.log(nums);

// more line of codes
const number = numbers.filter((num, index) => {
  console.log(index + 1, index);
  return num > 10;
});

console.log(number);
