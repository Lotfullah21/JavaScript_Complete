const names = ["Ahmad", "IRAN", "Mahmoodi"];

function sayHi(fName, lName) {
	console.log("Hello", fName, lName);
}

const normal = sayHi(names[0], names[2]);
const spread = sayHi(...names);
