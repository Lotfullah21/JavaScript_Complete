## margin vs padding

margin controls space outside the element, while padding controls the space inside the element.

#### WRONG

```css
.form input {
	padding-left: 6px;
}
```

#### RIGHT

```css
.form input {
	margin-left: 6px;
}
```

## Default

By default, we try to submit the form data to a server and that is not what we want to do in this project, so avoid it.

```js
function addItem(e) {
	e.preventDefault();
}
```

## Truthy and falsy

```js
function addItem(e) {
	e.preventDefault();
	const value = item.value;
	const id = new Date().getTime().toString();
	console.log(value, id);
	if (value !== "" && editFlag === false) {
		console.log("add item to the list");
	} else if (value !== "" && editFlag === true) {
		console.log("editing");
	} else {
		console.log("empty value");
	}
}
```

```js
function addItem(e) {
	e.preventDefault();
	const value = item.value;
	const id = new Date().getTime().toString();
	console.log(value, id);
	if (value && !editFlag) {
		console.log("add item to the list");
	} else if (value && editFlag) {
		console.log("editing");
	} else {
		console.log("empty value");
	}
}
```

## setTimeout:

runs a function once for a specific duration.

Executes a function once after a specified delay (in milliseconds).

## setInterval:

it works the same as `setTimeout`, but it executes the reference function repeatedly after the given interval.

Repeatedly executes a function after a specified interval (in milliseconds) until clearInterval is called.

## Clearing setTimeout and setInterval

Both setTimeout and setInterval can be stopped by using clearTimeout() or clearInterval(), respectively, like this:

#### Stopping setTimeout:

```js
let timeoutId = setTimeout(function () {
	console.log("This will be stopped before running");
}, 5000);

// To stop the timeout
clearTimeout(timeoutId);
```

#### Stopping setInterval:

```js
let intervalId = setInterval(function () {
	console.log("This will repeat until cleared");
}, 2000);

// To stop the interval
clearInterval(intervalId);
```

## Local storage

When adding anything to the local storage, it should be in string format.

```js
localStorage.setItem("python", JSON.stringify(["intro", "django"]));

const items = localStorage.getItem("python");
// to get in array format
const a = JSON.parse(localStorage.getItem("python"));
```

```js
// To remove
// to remove
localStorage.removeItem("python");
console.log(localStorage.getItem("python")); // Null
```

## Function declaration

In JavaScript, it doesn't matter if you call a function before defining it, as long as the function is defined using a function declaration. This is because function declarations are "hoisted" to the top of their scope, meaning that the JavaScript engine moves the function declaration to the top of the file (or scope) before executing the code.
