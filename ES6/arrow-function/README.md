<h2>Arrow Function(Fat arrow [=>])</h2>
<p>
Here, we can use arrow functions instead of tradation one where,we have name, body
(), {}, and so, we can ommit these elements in certain cases in arrow functions
but arrow functions also has their own limitation, for instance, it cannot be used as constructors, methods,
and also cannot use yield inside its body</p>
<p>`Arrow function do not have names, if we want to access them later, we need to bind them to a variable`;</p>
<p>`if there is a single line, single return statement, we can omit {},()`;</p>
<h5>Key Features</h5>
<ol>
<li>do not have name</li>
<li>set them as expression  unless using in callback(later)</li>
<li>assign them to a variable</li>
</ol>
<h3>Arrow function Scoping</h3>
<p>in regular function, this refers to what ever is there on the left side of the object<p>
<p>in arrow function, this refers to the surrounding scope which in most of the cases are global scope.</p>

<h3>Default Parameter</h3>
<p>if we do not pass any arguments, the default parameter will take precedence, if argument passed the default parameter will be over written.</p>
