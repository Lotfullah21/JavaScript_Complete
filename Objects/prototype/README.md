<h2>Prototypep</h2>
<p>every built-in object in javaScript has a property called "Prototype".
the Prototype itself is an object, so it creates a chain of Prototype and return an object.
in fact prototypes are the mechanism by which javascript objects inherits property from each other</p>
<p>every constructor(function/class) has a prototype property that is shared among all instance of that costructor.</p>
<p>object instance has the property which also defined by prototype,it will take the one which has been difined inside the object, if not there then it will look outside if it is there in property
</p>
<p>methods and properties of arrays or objects are stored in their prototype, not in the instances, everything in javascript is constructed using object constructor.</p>
<code>Object.getPrototypeOf(myObject)</code> <p> is the end of prototype chain where there is no method and the value is null</p>
<h2>Constructor Function</h2>
<p>In JavaScript, a constructor function is a special function that is used to create and initialize objects. 
It serves as a blueprint for creating instances of a particular type of object with specific properties and methods. 
When a constructor function is called with the "new" keyword, it creates a new object and sets its prototype to the constructor function's prototype, allowing the newly created object to inherit properties and methods from the constructor's prototype.</p>
<h5>Do not forget the <code>new</code></h5> before the constructor function name.

<h3>Construtor Property</h3>
<p>In JavaScript, the constructor property is a property that exists on the prototype of an object. 
It references the constructor function that was used to create the object. 
When you create an object using a constructor function or the "new" keyword, the construct</p>

<p>arrays and functions are objects in JavaScript</p>
