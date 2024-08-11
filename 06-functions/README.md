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
