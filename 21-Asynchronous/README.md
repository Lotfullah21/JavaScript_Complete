## Few Key Concepts About Asynchronous and Synchronous

### 1. Single-Threaded

JavaScript is a **single-threaded** language, meaning it executes one command at a time in a single call stack. This design simplifies coding but can lead to issues if long-running tasks (e.g., fetching data from an API) block the main thread, preventing other code from executing.

### 2. Synchronous

In **synchronous** programming, operations are performed one after the other, with each operation waiting for the previous one to complete before proceeding. While this model is simple, it can cause performance issues when handling tasks like network requests, as they block the entire process.

### 3. Callback

A **callback** is a function passed into another function as an argument, which is invoked after the completion of the asynchronous operation. Callbacks are a core feature in JavaScript to handle asynchronous behavior but can lead to "callback hell" if nested deeply.

Example:

```js
function fetchData(callback) {
	setTimeout(() => {
		callback("Data fetched");
	}, 2000);
}

fetchData((data) => {
	console.log(data); // Output: "Data fetched"
});
```

### 4. Promises

A Promise is an object that represents the eventual completion or failure of an asynchronous operation. Promises allow you to handle asynchronous operations in a more manageable and readable way through .then(), .catch(), and .finally().

```js
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Success");
	}, 2000);
});

promise.then((result) => {
	console.log(result); // Output: "Success"
});
```

### 5. Asynchronous

Asynchronous programming allows multiple operations to occur without waiting for each one to finish before starting the next. This is useful for handling tasks like I/O operations, API requests, or timers, allowing other code to run in the meantime. Common approaches to asynchronous programming include callbacks, promises, and async/await.

```js
async function fetchData() {
	const result = await new Promise((resolve) => {
		setTimeout(() => resolve("Data fetched"), 2000);
	});
	console.log(result); // Output: "Data fetched"
}
fetchData();
```
