<h2>Functions</h2>
<p>functions are first class citizens which have the following poperties</p>
<ol>
  <li>can be stored in a variable (expressions)</li>
  <li>passed as an argument to another function</li>
  <li>return from the function (closure)</li>
</ol>

<h2>Higher Order functions</h2>
<p>a function that accepts a function as an argument or returns a another function.</p>
<h2>Callback functions</h2>
<p>the function we pass in as an argument to another function and gets executed inside that function is called callback function.</p>

<h3>IIFE (Immediately-Invoked function expression)</h3>
<p>it helps us to protect our function and variable from global scoping pollution,we can invoke them immediately.</p>
<ol>
<li>the variables outside the IIFE is not accessible</li>
<li>function will be invoked immediately</li>
</ol>
<h3>Hoisting</h3>
<p>functions and var declaration are hoisted which means they can be accesses before initialization, for var we can access it but not the values.
for functions, if we do not use the variables which has not been initiated before declaring them inside the function, we can access the function before initialization</p>
<p>it is better to call the function or declare the variables after initialization.</p>
<h3>Closure</h3>
<p>it gives access to the outer functions scope</p>
<p>from an a function inside a function we can have access to the variables declared inside the outer function.</p>
