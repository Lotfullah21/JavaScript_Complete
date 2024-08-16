// tradational
function addition(a, b) {
	return a + b;
}

// Arrow functions
(a, b) => {
	return a + b;
};

`Arrow function do not have names, if we want to access them later, we need to bind them to a variable`;

const add = (a, b) => {
	return a + b;
};
console.log(add(2, 3));

`if there is a single line, single return statement, we can omit {},()`;
const mu = (a) => a * 100;

(mul = (a) => a * 100)(3);

// console.log(mul(10));
console.log(mu(10));
