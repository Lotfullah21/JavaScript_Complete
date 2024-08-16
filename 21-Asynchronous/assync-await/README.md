<h3>Promise</h3>
<p>Promises are the foundation of asynchronous programming in modern JavaScript. A promise
is an object returned by an asynchronous function,</p>
<h5>Syntax: <code>new Promise((resolve, reject) => {})</code></h5>.
<p>a promise object constructor has a callback function inside, which inside that callback function has two other function to handle what to do with resolved promise or rejected promise, commonly the function names are (resolved, reject)</p>
<p>a promise has two states</p>
<ol>
<li>resolved: which means fulfilled, our request has been accepted,for instance if we ask some data through API and we get the data</li>
<li>rejected: means our promise failed or rejected, for instance if we ask some data and data provider did not provide the data to us.</li>
<ol>
<p>in the promise block, we have our answer,either promise fulfilled or rejected, by using then we can do something with the accepted promise and with catch we can do something with rejected promise, and we do this throug chaining.
Remember to have catch statement at the end of the chain.</p>
<p>inside each of then and catch we would be having another callback to deal with the returned value from resolved promise and inside each catch block a callback which inside that callback we have a parameter which is returned value after our promise rejected.</p>
<p> parameters
<ul>
<li>callback: the function that will be executed after specified time</li>
<li>delay: time in milli seconds</li>
<ul>
once setTimeout is given to the browser,javascript will continute to exectute the rest of the code, if those lines of code takes longer than delay, still it will continue to execute those lines of code, after finishing the execution of the code, then callback funciton will be called, that's why the delay time is min time, which means that can take longer than that.
The delay represents the minimum amount of time that the callback will be delayed,but it is not guaranteed to run exactly after that time. The actual delay depends on various factors, including the browser or environment in which the code is running and the workload of the event loop.
</p>
