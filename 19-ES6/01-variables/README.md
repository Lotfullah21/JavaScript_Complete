## var

- It defines a variable
- It updates the variable value
- It redefine the variable
- It is function scope (We do not have access to it outside the function)
- It can be redefined inside a block

```js
var num = 10;
num = 20;
var num = 100;
```

For var, anything inside a block of code is globally scoped, which means it can be changed unlike `let` and `const` which are locally scoped which means cannot be changed or accessed outside of the block.

```js
var const x = 10
if (true){
    x = "king"
}
console.log(x) // king
```

````js
var x = 10;
function hello() {
	// local scope
	var y = "king";
}
console.log(y); // y is not defined


## let

- It defines a variable
- It updates a variable value
- It cannot redefine the variable
- It is block scoped

```js
let num = 10;
num = 20;
let num = 30; // Error
````

## const

- It can define a variable
- It cannot update the primitive type variable (numbers,strings,boolean)
- It cannot redefine the primitive type variables
- It is block scoped

```js
const num = 10;
num = 20; // Error
```

```js
let w = 10;
function hello() {
	// local scope
	let w = "king";
}
console.log(w); // 10, not 10
```

When we are using `let` and `const`, we do not need to worry about name collisions in different blocks as the variables are not connected across blocks.
