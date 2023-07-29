<h2>Constructor Function</h2>
<p>In JavaScript, a constructor function is a special function that is used to create and initialize objects. 
It serves as a blueprint for creating instances of a particular type of object with specific properties and methods. 
When a constructor function is called with the "new" keyword, it creates a new object and sets its prototype to the constructor function's prototype, allowing the newly created object to inherit properties and methods from the constructor's prototype.</p>
do not forget the <code>new</code> keyword before the constructor function name.
<p>the key difference to the factory fucntion here is it does not return the object inside the constructor</p>
<h3>Construtor Property</h3>
<p>In JavaScript, the constructor property is a property that exists on the prototype of an object. 
It references the constructor function that was used to create the object. 
When you create an object using a constructor function or the "new" keyword, the construct</p>

<p>arrays and functions are objects in JavaScript</p>

<code>
const ahmad = {};
console.log("object constructor", ahmad.constructor);
<p>the answer will be an [Function: Object] which means there is a constructor function called object that creates objects for us, in here created ahmad.</p>
</code>
