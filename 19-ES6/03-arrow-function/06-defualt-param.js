// if we do not pass any arguments, the default parameter will take precedence, if argument passed the default parameter will be over written.

function greeting(country = "Iran") {
	console.log(`Hello ${country}`);
}

const hello = (country) => console.log(`Hello ${country}`);

greeting("China");

const afg = "Afghanistan";
const ind = "India";

hello(ind);

// Hoisting

function greeting(country = "Iran") {
	console.log(`Hello ${country}`);
}
// bonjour(ind); // Reference error for arrow functions unlike regular functions.
const bonjour = (country) => console.log(`Hello ${country}`);

greeting();
bonjour(ind);
