let firstName = "Ahmad";
console.log(firstName);
function hello() {
	const firstName = "John";
	console.log(firstName);
	globalVar = "I AM GLOBAL VAR";
	var lastName = "John";
}
// error, because it is inside a function and it is in local scope.
// console.log(lastName);

// console.log(globalVar);
hello();
console.log(globalVar);
console.log(firstName);

console.log("\nSECOND EXAMPLE\n");
// code blocks can be a simple curly braces
{
	firstName = "Bob";
	var lastName = "John";
}
console.log(firstName);
console.log(lastName);
