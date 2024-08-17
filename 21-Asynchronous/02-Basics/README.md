<h2>setTimeout</h2>

<p>It is a built-in function in javascript where we can execute a block of code after a minimum time which is in milliseconds.</p>
In fact, `setTimeout` is not part of javascript, but it is part of browser API, browser runs the setTimeOut behind the scene.

Browser also provides `setTimeout, setInterval, fetch`, These are part of the Web APIs in the browser.

Why browser does this?

Javascript is a single threaded language, one operation at a time, but there number of scenarios that we cannot wait until the prior codes gets executed, we need a way to simulate `Asynchronous` behavior and this is what our browser tries to provide by giving us these functions.
For instance, we want to get some data from external `APIs`, but we cannot wait until the provider sends us those data, Here comes the role of browser, it takes responsibility for doing the request, getting the response and all and lets us to run rest of our code, once the browser gets the response, it will provide us and we will do something with ti.

<code>setTimeout(callback, delay, arg1, arg2, ...)</code>

<p> parameters
<ul>
<li>callback: the function that will be executed after specified time</li>
<li>delay: time in milliseconds</li>
<ul>

```js
setTimeout(function () {
	console.log("This message will be logged after 2 seconds");
}, 2000);
```

```js
setTimeout(() => {
	console.log("This message will be logged after 1 second");
}, 1000);
```

## How it works?

- Call to setTimeout: When you call setTimeout, the function and delay are sent to the browser's Web API environment, which is responsible for managing asynchronous tasks.

- Timer Starts: The browser starts the timer for the specified delay in the background, while the main JavaScript code continues executing.

- Callback Queue: Once the timer expires, the provided callback function (the first argument of setTimeout) is placed in the callback queue.

- Event Loop: The event loop in JavaScript continuously checks whether the main thread is free. If the call stack is empty (i.e., all synchronous code has finished executing), the event loop picks tasks from the callback queue and sends them to the main thread for execution.

once setTimeout is given to the browser,javascript will continue to execute the rest of the code, if those lines of code takes longer than delay, still it will continue to execute those lines of code, after finishing the execution of the code, then callback function will be called, that's why the delay time is min time, which means that can take longer than that.
The delay represents the minimum amount of time that the callback will be delayed,but it is not guaranteed to run exactly after that time. The actual delay depends on various factors, including the browser or environment in which the code is running and the workload of the event loop.
