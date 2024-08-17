### Asynchronous

Asynchronous programming in JavaScript allows tasks to be executed in a non-blocking manner. JavaScript is single-threaded, meaning it can only execute one task at a time. However, asynchronous mechanisms let JavaScript handle tasks like fetching data from a server, reading files, or timers without freezing the UI or halting the execution of other tasks.

Key Concepts in Asynchronous JavaScript:
Synchronous vs Asynchronous:

## Synchronous:

Code is executed line by line, and each step must finish before the next one starts. This can lead to blocking, where long-running tasks like API requests or file reads freeze the main thread.

## Asynchronous:

Code allows the program to start a task and continue executing other tasks while waiting for the completion of the first task.

## Asynchronous Patterns in JavaScript:

Each of the given mechanisms will be discussed in details in later files, for now just use it as a reference.

### 1. Callbacks:

A callback is a function passed as an argument to another function and executed when the asynchronous task completes. However, using multiple callbacks can lead to callback hell, where the code becomes nested and hard to read.

```js
function getData(callback) {
	setTimeout(() => {
		callback("Data fetched");
	}, 2000);
}

getData((result) => {
	console.log(result); // Output: "Data fetched" after 2 seconds
});
```

### 2. Promises:

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, and rejected.

```js
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Data fetched");
	}, 2000);
});

promise
	.then((result) => {
		console.log(result); // Output: "Data fetched" after 2 seconds
	})
	.catch((error) => {
		console.error(error);
	});
```

### 3. Async/Await:

async/await is a modern and cleaner way to handle asynchronous code using Promises. It makes asynchronous code look synchronous and is easier to read.

```js
function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Data fetched");
		}, 2000);
	});
}

async function fetchData() {
	const result = await getData(); // Waits for the Promise to resolve
	console.log(result); // Output: "Data fetched" after 2 seconds
}

fetchData();
```

### 4. Event Loop:

The event loop is the mechanism that JavaScript uses to handle asynchronous tasks. It continuously checks the call stack (where synchronous code is executed) and the callback queue (where asynchronous callbacks wait to be executed). When the stack is clear, the event loop picks tasks from the queue and sends them to the stack.

- Call Stack: Where synchronous code is executed.
- Callback Queue: Holds callbacks from asynchronous functions like setTimeout.
- Micro-task Queue: Holds promises and async/await results.

## Common Asynchronous APIs in JavaScript:

`setTimeout / setInterval`: Delay execution of code.
`fetch`: Asynchronous HTTP requests.
`Event Listeners`: Handle events like button clicks.
`File I/O (Node.js)`: Read/write files asynchronously.

# Note:

Javascript is still a single-threaded language, it dees not become a multi-threaded language by using the above mechanisms, these are provided by the browser and javascript still runs the code in line by line, once the browser finish its work, it gives the result back to the browser.
