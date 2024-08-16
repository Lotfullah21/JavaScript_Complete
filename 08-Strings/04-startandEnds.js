const age = "32 years old";
console.log(age.length);
console.log(age[4]);

if (age.includes("32")) {
	console.log("Hello king");
} else {
	console.log("Hello Shah");
}

if (age.startsWith("32")) {
	console.log("you are good to go");
} else {
	console.log("the age does not start with 32");
}

if (age.endsWith("32")) {
	console.log("YOU ARE GOOD TO GO!");
} else {
	console.log("It does not start with 32");
}
