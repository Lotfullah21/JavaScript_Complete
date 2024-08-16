// First example
let age = 20;
if (age) {
	console.log("HELLO");
} else {
	console.log("NOT TRUE");
}
// Using ternary expression
age ? console.log("HELLLLLLLLO") : console.log("NOT TRUE");

// Second example

x = 10;
if (x > 2) {
	console.log("True");
} else {
	console.log("Not True");
}

// Using ternary
x > 2
	? console.log("x is greater than 10")
	: console.log("x is smaller than 10");

// Third example
function trinary(x) {
	return x > 0 ? (x += 100) : (x -= 100);
}
console.log(trinary(20));
