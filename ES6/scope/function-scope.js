// Global scope
var name = "Ahmad";
function hello() {
  name = 10;
  console.log(name);
}
console.log(name);
hello();
// we can see the value of var changed after invokation

let amount = 100;
const num1 = 230;
function count() {
  let amount = 22;
  const num1 = 1020;
  console.log("Local", amount, num1);
}
count();
console.log("Global", amount);
// we saw that let and const are local scoped
