## fetch

The `fetch()` function is used to make asynchronous HTTP requests, typically to retrieve data from APIs or other web resources.
It returns a Promise that resolves to the Response object representing the response to the request. Here's a basic example of how it works:

```js
const response = fetch(url, options);
console.log(response); // response
```

```js
fetch(url).then((response) => {
	console.log(response); // Properties and methods like status, type, body, headers
});
```

```js
fetch(url, options)
	.then((response) => {
		// Handle the response
	})
	.catch((error) => {
		// Handle any errors
	});
```

## Parameters

`url`: The resource you want to fetch.
`options`: Optional. Additional parameters like HTTP method (GET, POST, etc.), headers, body, etc.

## Functions used

`then()`: Used to process the response.
`catch()`: Handles errors.
`response.json()`: Converts the response to JSON format.

### Execution Explanation

1. fetch(url): Sends an HTTP request to the given URL (./api/colleges.json in this case). This returns a Promise that resolves to a Response object.

2. response.json(): Extracts the JSON data from the response body and converts it into a JavaScript object. Since it's an asynchronous operation, it returns a Promise.

3. Second then((data) => {...}): The parsed JSON data (now a JavaScript object) is passed to this function. The data represents the content of colleges.json in object form, and it's logged to the console.

```js
const url = "./api/colleges.json";

fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});
```

## How to catch Errors

Use `try-catch` block, add the code you want to run inside the try block and the error inside the catch block.
