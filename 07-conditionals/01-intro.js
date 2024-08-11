let a = 120;
if (a > 10) {
	console.log("a is greater than 10");
} else if (a == 10) {
	console.log("a is equal to 10");
} else {
	console.log("Non of the above condition is meet");
}

console.log("Next problem");

const x = 100;
if (typeof x === "number") {
	if (x < 20) {
		console.log(x, "is less than 20");
	} else if (x > 40) {
		console.log(x, "is greater than 40");
	} else {
		console.log("None of the above");
	}
} else {
	console.log("The input is not a number");
}
console.log("ALL GOOD");
