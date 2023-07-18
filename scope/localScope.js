/*
Local Scope: for having a local scope we have to declare a keyword inside  a code block.
we cannot access or modify that variable outside of teh code block.

if we do not put a keyword like 'let' or 'const' before a variable name, first we have to invoke that function and later we can access that variable
*/

let name = "Ahmad";
console.log(name);
function hello() {
  const name = "Mahmood";
  console.log(name);
  globalVar = "I AM GLOBAL VAR";
}
// console.log(globalVar);
hello();
console.log(globalVar);
console.log(name);

// code blocks can be a simple culry braces

{
  const lName = "Bob";
  const fName = "John";
}

console.log(lName);
console.log(fName);
