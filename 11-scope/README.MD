## Scope

in general we have two kind of scope, one is global and the other one is local scope.

### Global Scope

Any thing outside the code block, or {} are said to be in global scope.
we have access to them inside our conditional statements, functions.

Global scope variables can create two major problems.

1. Name Collisions
2. By mistake changing the values

We can change the variables which are in global scope any where in our program.

### Local Scope

For having a local scope we have to declare a keyword inside a code block.
we cannot access or modify that variable outside the code block.

if we do not put a keyword like 'let' or 'const' before a variable name, first we have to invoke that function and later we can access that variable

In a block of code, if we need a variable, first we will look if that variable is defined within the block of code and take the value,
if the value is not defined inside the block,then we can go outside of the block and look if the variable is defined there.
so the look up hierarchy is from bottom to top.
We can look from inside to outside for a variable, but not from outside to inside

```js
// code blocks can be a simple curly braces
{
	firstName = "Bob";
	var lastName = "John";
}
console.log(firstName); // Bob
console.log(lastName); // John
```

When we do not specify the type or use `var` inside a simple block or `conditional statements`, we can have access and modify the variable value.
But if we use `let` or `const`, we will get the reference error

```js
// code blocks can be a simple curly braces
{
	let firstName = "Bob";
	const lastName = "John";
}
console.log(firstName); // Reference error
console.log(lastName); // Reference error
```
