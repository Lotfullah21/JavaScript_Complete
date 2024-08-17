## Promise

Promises are the foundation of asynchronous programming in modern JavaScript.
A promise represents a value that may be available now, in the future, or never.

A Promise in JavaScript is an `object` representing the eventual completion (or failure) of an asynchronous operation. Promises provide a way to work with asynchronous code that is more manageable than using callbacks, helping avoid issues like callback hell.

##### Syntax:

```js
new Promise((resolve, reject) => {});
```

A promise object constructor has a callback function inside, which inside that callback function has two other function to handle what to do with resolved promise or rejected promise, commonly the function names are (resolved, reject)</>

### States

A promise can be in three states

<ol>

<li>Pending: The initial state, where the promise has not yet been fulfilled or rejected.</li>

<li>`resolved`: It means promise is fulfilled, our request has been accepted. </li>

<li>`rejected`: It means the promise is failed or rejected. For instance if we ask some data from external resources through an API, They do not send us the data.</li>

<ol>

#### parameters

<ol>
<li>callback: the function that will be executed after specified time</li>
<li>delay: time in milliseconds</li>
</ol>

## Creating a Promise:

A `Promise` is created using the Promise constructor, which takes a function as an argument. The function itself takes two parameters, `resolve` and `reject`, which are used to either fulfill or reject the promise.

```js
const myPromise = new Promise((resolve, reject) => {
	// Simulate an asynchronous operation
	const success = true;

	if (success) {
		resolve("The operation was successful!");
	} else {
		reject("The operation failed.");
	}
});
```

## Parameters of the Executor Function:

`resolve`: A function that is called when the operation is successful.
`reject`: A function that is called when the operation fails.

## Remember

We are not eliminating the callbacks using promises, but making it more readable and cleaner using promises.

#### Handling Promises

A promise’s result can be handled by chaining .then() and .catch(). Each then method takes a callback function to deal with the resolved value, and catch takes a callback to handle the rejected promise.

<p>Inside each of <em>then<em> and <em>catch</em> we would be having another callback to deal with. inside <em>then</em> the returned value from resolved promise and inside <em>catch</em> block a callback to handle the rejected promise.</p>

Promises are handled using `.then()` for fulfilled values and `.catch()` for rejected values. You can also use `.finally()` for cleanup code that should run regardless of the outcome.

```js
myPromise
	.then((result) => {
		console.log(result); // Output: "The operation was successful!"
	})
	.catch((error) => {
		console.log(error); // Output: "The operation failed." (if rejected)
	})
	.finally(() => {
		console.log("Promise finished."); // This runs no matter the outcome.
	});
```
