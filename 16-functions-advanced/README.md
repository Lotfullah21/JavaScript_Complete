## Functions

Functions are first class citizens which have the following properties

- can be stored in a variable (expressions)
- passed as an argument to another function
- return from the function (closure)

## Declaring a function

```js
function mod(a, b) {
	console.log(a % b);
}
mod(10, 2); // 0
```

## Declaring a function using an expression

It is also called an anonymous function

```js
// Function expression
const mod = function (a, b) {
	console.log(a % b);
};
mod(10, 2); // 0
```

## Higher order functions

Accepts another function as an argument or return another function as a result.

## Callback Functions

A function we pass in as an argument to another function and gets executed inside that function is called callback the function.

## Arrow functions

Arrow functions are shorter version of an anonymous function.
we do not need declare the "function" before the parameters, and also we can omit the "{}" in certain
cases.

most of the time it has been used when we use the function as parameter to another function.

## Immediately Invoked function expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed right after it is defined.

It allows us to immediately invoke a function.

The syntax of an IIFE looks like this:

```js
(function () {
	// Code that gets executed immediately
	console.log("This function is executed immediately!");
})();
```

### Advantages

- Immediately invoked: The function runs as soon as the browser encounters it.
- Function expression: It is enclosed within parentheses to ensure the function is treated as an expression, not a declaration.
- Scope: Variables inside an IIFE cannot be accessed from outside, making it useful for avoiding global namespace pollution.

```js
function sum(a, b) {
	console.log(a + b);
}
sum(12, 12);

(function (a, b) {
	console.log(a + b);
})(12, 12);

res = (function sum(a, b) {
	return a + b;
})(12, 12);
console.log(res);
```

## Hoisting

In JavaScript, hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope (either the global scope or the local function scope) during the compilation phase. This allows you to use functions and variables before they are declared in the code.

`Functions` and `var` declarations are hoisted in javascript, that means that we can access to them before their initialization. But always it would be a good practice to use them after initializing them.

Even though for `var` we have hoisting, but it will returns as `undefined` when accessing them before initialization.

#### 1. Variables

In JavaScript, variable declarations using var are hoisted, but the initialization is not. Variables declared with let and const are hoisted too, but they are not initialized and will throw an error if accessed before the declaration.

```js
console.log(c); // Undefined
console.log(a); //  Cannot access 'a' before initialization
console.log(b); //  Cannot access 'a' before initialization
const a = 10;
let b = 20;
var c = 30;

console.log(a, b, c);
```

#### Functions

Function declarations are fully hoisted, meaning the entire function can be used before its definition.

For functions it does not matter, where ever you call, it can be accessed and invoked if the function is defined somewhere in the code.

```js
sum(); // 30
function sum() {
	console.log(10 + 1);
}
sum(); // 30
```

- var declarations are hoisted but initialized to undefined.
- let and const declarations are hoisted but remain uninitialized, causing a ReferenceError if accessed before declaration.
- Function declarations are fully hoisted, so they can be invoked before their definition.
- Function expressions are treated like variables and are not fully hoisted.

## Closure

It gives access to an outer function's scope from an inner function.

A closure in JavaScript is a feature where an inner function has access to variables from its outer (enclosing) function, even after the outer function has returned. This allows the inner function to "remember" and access the variables from the outer function's scope, even after the outer function has finished executing.

### Advantages

- Lexical Environment: A closure captures the lexical environment (i.e., the variables and functions) of the outer function at the time the closure is created.
- Persistence: Variables used in the closure are preserved, meaning the inner function retains access to the outer function's variables even after the outer function has returned.
- Private Data: Closures are often used to create private variables or to control access to certain data.

```js
function outer() {
	function inner() {
		console.log("Hello From inner");
	}
	inner();
}
outer(); // Hello From inner
```

It can be used to return a function

```js
function outer() {
	function inner() {
		console.log("Hello From inner");
	}
	return inner;
}
const greet = outer();
greet();
```

The inner function can access both its own variable (innerVariable) and the outer function's variable (outerVariable).

### Benefits of Closures:

- Data hiding: Can be used to create private variables and functions.
- Stateful functions: Functions can "remember" the state between invocations, which is useful for things like maintaining counters or managing UI states.
- Callbacks: Commonly used in event handlers, timers, and asynchronous code like promises.

##### Closure Examples

```js
function newAccount(name, savings) {
	let balance = savings;
	function showBalance() {
		console.log(`Hello ${name}, you have ${balance}$ in your account`);
	}
	return showBalance;
}

const joseph = newAccount("Joseph", 400);
const ahmad = newAccount("Ahmad", 300);
console.log(joseph); // [Function: showBalance]
console.log(ahmad); // [Function: showBalance]

joseph();
ahmad();
```

Return an object

```js
function newAccount(name, savings) {
	let balance = savings;
	function showBalance() {
		console.log(`Hello ${name}, you have ${balance}$ in your account`);
	}
	return { getBalance: showBalance };
}
const joseph = newAccount("Joseph", 400);
const ahmad = newAccount("Ahmad", 300);

joseph.getBalance();
ahmad.getBalance();
```

Complete Example

```js
function newAccount(name, savings) {
	let balance = savings;
	function showBalance() {
		console.log(`Hello ${name}, you have ${balance}$ in your account`);
	}

	function deposit(money) {
		balance += money;
		return showBalance();
	}

	function withdraw(money) {
		if (money > balance) {
			console.log("withdrawing money is higher than your balance");
		} else {
			balance -= money;
		}
		showBalance();
	}

	return { getBalance: showBalance, deposit: deposit, withdraw: withdraw };
}
const joseph = newAccount("Joseph", 400);
const ahmad = newAccount("Ahmad", 300);

joseph.getBalance();

ahmad.getBalance();
ahmad.deposit(400);
ahmad.withdraw(200);
ahmad.getBalance();
```
