const age = 20;
const name = "Ahmad";

const info = "Hello, I am " + name + "and I am " + age + " years old";
console.log(info);

const tempLiterals = `Hello, I am ${name} and I am ${age} years old`;
console.log(tempLiterals);

const ops = `addition of 4+2 = ${4 + 2}`;
console.log(ops);

function hello({ lName, fName }) {
	fullName = `${fName} ${lName}`.toUpperCase();
	console.log(fullName);
	return fullName;
}
