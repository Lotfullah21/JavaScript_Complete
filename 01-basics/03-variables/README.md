\*\*<h2>Variables</h2>
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
we can re-assign the values later and also declare and assign values later,for instance
<code>
let name = "ahmad"
name = "mahmood"
console.log(name) // mahmood
</code>

<h5>const</h5>
once a value is assigned, we cannot change the value, and also in the initialization phase, the value should be decalred.
<code>
const namel >wrong, the value must be assigned
const name = "ahmad"
name = "mahmood"
console.log(name) // Error
</code>

<h5>var</h5>
it is a general case of both, we can re-assign values to a variable
<code>
var name = "ahmad"
name = "mahmood"****
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

<h2>Numbers</h2>
while declaring numbers in Javascript,we do not declare the type of number, whether it be a decimal or an integer, Javascript will figure out that one.

<p> we can do -,*,/ operations on two string which has value of a number.
but for  addition, that would be a concatenation.</p>

<h2>Data Types</h2>
<h3>data type of a value can specifiy which kind of operation can be done on that data</h3>
<p>in javascript we have total of 7 different data types</p>
<ol>
  <li>Primitives</li>
  <li>Object</li>
</ol>
<h5>Primitives</h5>
<ol>
  <li>Number</li>
  <li>String</li>
  <li>Boolean</li>
  <li>Undefined</li>
  <p>Represents an uninitialized or undeclared variable. If a variable is declared but not assigned a value, it is automatically assigned the value undefined,or object cannot find a value for the present variable</p>
  <li>Null</li>
  <p>Represents the intentional absence of any object value, or developer assigned a null value</p>
  <li>Symbol</li>
  
</ol>

<h5>Object</h5>
<ol>
  <li>Array</li>
  <p> Represents an ordered list of values, which can be of any type. Arrays are created using square brackets ([]). For example: [1, 2, 3], ['apple', 'banana', 'orange'].</p>
  <li>Function</li>
  <p>Represents a reusable block of code that can be invoked by its name. Functions are objects in JavaScript and can be assigned to variables, passed as arguments, and returned from other functions.</p>
  <li>Objects</li>
  <p> Represents a collection of key-value pairs, where values can be of any type. Objects can be created using object literals ({}) or using the new keyword and a constructor function.</p>
</ol>

<h3>Falsy and Truthy</h3>
<p>all values except " ",' ',0,-0,NAN,undefined,false,null are truthy which means even if the boolean condition is not there, they will return true or evaluates to true.</p>
<code>
text = "salam"
if (text){
  console.log("truthy value")
}else{
  console.log("Flsey value")
}

the above piece of code evaluates to True.

text = ""
if (text){
console.log("truthy value")
}else{
console.log("Falsy value")
}
evaluates to Falsy and will print "Falsy value"
</code>

<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<ul>
  <li></li>
</ul>
<span></span>
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<ul>
  <li></li>
</ul>
**
