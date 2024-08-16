# Arrow Function(Fat arrow [=>])

Here, we can use arrow functions instead of traditional one where,we have name, body
(), {}, and so, we can omit these elements in certain cases in arrow functions
,but arrow functions also have their own limitations, for instance, it cannot be used as constructors, or methods, and also it cannot use ` yield` inside its body.

Arrow function do not have names, if we want to access them later, we need to bind them to a variable;

If there is a single line, single return statement, we can omit {},();

Key Features

- do not have name
- set them as expression unless using in callback(later)
- assign them to a variable
- // traditional

```js


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

`if there is a single line, single return statement, we can omit {},() and return`;
const mu = (a) => a \* 100;

(mul = (a) => a \* 100)(3);

// console.log(mul(10));
console.log(mu(10));

```

### Arrow function Scoping

in regular function, this refers to what ever is there on the left side of the object
in arrow function, this refers to the surrounding scope which in most of the cases are global scope.

### Default Parameter

if we do not pass any arguments, the default parameter will take precedence, if argument passed the default parameter will be over written.

```

```

```js
btn.addEventListener("click", function () {
	console.log(this); // 'this' refers to 'btn'
	setTimeout(function () {
		this.style.color = "red"; // 'this' refers to 'window', not 'btn'
	});
});
```

Outer function (function() { console.log(this); }):

This is an event listener attached to the button (btn), so when the button is clicked, this refers to the button itself. That's why when you run console.log(this);, it logs the button element (btn).
Inner function (function() { this.style.color = "red"; } inside setTimeout):

The function inside setTimeout is not an event listener, it's a regular function. By default, in a regular function (not bound to an object or invoked in an event listener), this will refer to the global object (window in browsers).
Hence, the this inside the setTimeout function refers to the window object, not the button.

In JavaScript, the value of this depends on how the function is called, not where it is defined.
Inside the addEventListener callback, this is set to the button because the function is invoked as an event listener.
Inside the setTimeout, however, the function is invoked by the setTimeout mechanism, not in the context of the button. By default, this causes this to refer to the global object (window).

#### To ensure this inside the setTimeout still refers to btn, you can do one of the following:

### 1

```js
btn.addEventListener("click", function () {
	console.log(this); // 'this' is the button
	setTimeout(() => {
		this.style.color = "red"; // 'this' still refers to the button
	});
});
```

### 2

```js
btn.addEventListener("click", function () {
	console.log(this); // 'this' is the button
	setTimeout(
		function () {
			this.style.color = "red"; // 'this' now refers to the button
		}.bind(this)
	); // bind 'this' to the button
});
```
