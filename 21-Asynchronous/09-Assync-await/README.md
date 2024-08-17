## Async/Await

### What is Async/Await?

**Async/Await** is syntactic sugar built on top of Promises, making it easier to work with asynchronous operations. It allows us to write asynchronous code that looks and behaves like synchronous code, while still being non-blocking.

- **`async`**: Declares a function as asynchronous. This function always returns a promise.
- **`await`**: Pauses the execution of an `async` function and waits for the promise to resolve or reject.

Whether it is a regular function, or an arrow function, always use `async` keyword before the name of the function if you are using `await` in that function.

<!-- Regular function -->

```js
async function functionName() {
await
}
```

```js
btn.addEventListener("click", async function handler() {
	await changeColor(2000, "red", heading1);
});
```

<!-- Arrow function -->

```js
const handler = async () => {
    await
};
```

```js
btn.addEventListener("click", async () => {
	await changeColor(2000, "red", heading1);
});
```

We can save the result of the promise in a variable, but in our code we are returning anything so it would be undefined.

```js
btn.addEventListener("click", async function handler() {
	x = await changeColor(2000, "red", heading1);
	await changeColor(3000, "green", heading2);
	await changeColor(1000, "gold", heading3);
	console.log(x); // Undefined
});

function changeColor(time, color, element) {
	const promise = new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve();
			}, time);
		} else {
			reject(new Error(`the ${element} does not exist`));
		}
	});
	return promise;
}
```

## How to Manage Errors

Use try-catch block

```js
btn.addEventListener("click", async function handler() {
	try {
		await changeColor(2000, "red", heading1);
		await changeColor(3000, "green", heading2);
		await changeColor(1000, "gold", heading3);
	} catch (error) {
		console.log(error);
	}
});
```

### Benefits of Async/Await

- **Cleaner Syntax**: It eliminates the need for `.then()` and `.catch()` chaining, making the code more readable.
- **Error Handling**: Errors can be caught using `try...catch` blocks, which are familiar from synchronous programming.
- **Sequential Operations**: Using `await`, you can handle asynchronous operations in sequence, even though they are non-blocking.
