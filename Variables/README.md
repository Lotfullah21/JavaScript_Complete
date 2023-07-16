<h2>Variables</h2>
variables are the basic blocks of programming.
<ol>
they allow us to
<li>store values</li>
<li>Access them</li>
<li>and modify them if needed</li>
</ol>

<p>e can declare a variable  and assign values later<p>
<code>
let name, lastName, country
name = "me"
lastName = "ahmad"
country = "India"
</code>

<p>for better convention, user camelCase or underscore.</p>

<h4>let, const & var </h4>
<p>in the latest version of javascript, the var has been replaced by let and const</p>
<h5>let</h5>
we can re-assign the values,for instance
<code>
let name = "ahmad"
name = "mahmood"
console.log(name) // mahmood
</code>

<h5>const</h5>
once a value is assigned, we cannot change the value
<code>
const name = "ahmad"
name = "mahmood"
console.log(name) // Error
</code>

<h5>var</h5>
it is a general case of both, we can re-assign values to a variable
<code>
var name = "ahmad"
name = "mahmood"
console.log(name) // mahmood
</code>

<p>it is your choice,whichever you prefer</p>
<h2>Strings</h2>
strings are sequence of characters.
<h4>Concatenation</h4>
addition of two strings are known as concatenation.
<h5>syntax: string1 + string2</h5>
<h4>backticks</h4>
<p>an easy technique to use it with strings</p>
<h5>syntax: `{variable name}`</h5>
