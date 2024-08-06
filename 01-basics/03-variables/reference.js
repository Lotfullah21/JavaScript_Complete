/*
when dealing with primitive data types like nummbers, null, or any other kind of this family, if we assign a value to them and later change the value, we can re-assign that value to other variables without affecting the original value.

for non-primitive data types, assigning non-primitive data type value to a variable is done by referencing,if any change occurrs, it weill change all the references.
*/

// primitive data types
let a = 12;
let b = a;
console.log(a);
console.log(b);
b = 10;
console.log(a);
console.log(b);

// non-primitve data type
let name = { name: "ahmad" };
let lName = name;

console.log(name.name);
console.log(lName.name);

lName.name = "Jacob";

console.log(lName.name); // Jacob
console.log(name.name); // Jacob
