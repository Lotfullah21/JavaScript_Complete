<h3>setTimeout</h3>
<p>it is a built-in function in javascript wehre we can execute a block of code after a minimum time which is in milli seconds.</p>
<code>setTimeout(callback, delay, arg1, arg2, ...)</code>
<p> parameters
<ul>
<li>callback: the function that will be executed after specified time</li>
<li>delay: time in milli seconds</li>
<ul>
once setTimeout is given to the browser,javascript will continute to exectute the rest of the code, if those lines of code takes longer than delay, still it will continue to execute those lines of code, after finishing the execution of the code, then callback funciton will be called, that's why the delay time is min time, which means that can take longer than that.
The delay represents the minimum amount of time that the callback will be delayed,but it is not guaranteed to run exactly after that time. The actual delay depends on various factors, including the browser or environment in which the code is running and the workload of the event loop.
</p>
<ol>
<li>. </li>
<li>.</li>
</ol>
