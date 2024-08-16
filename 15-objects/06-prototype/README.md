### Prototype

Every built-in object in javaScript has a property called "Prototype".

the Prototype itself is an object, so it creates a chain of Prototype and return an object.

in fact prototypes are the mechanism by which javascript objects inherits property from each other
every constructor(function/class) has a prototype property that is shared among all instance of that constructor.

object instance has the property which also defined by prototype,it will take the one which has been defined inside the object, if not, it will look outside if it is there in property.

Methods and properties of arrays or objects are stored in their prototype, not in the instances, everything in javascript is constructed using object constructor.
In prototype, usually we add common methods for objects and inside the constructor we add the data property.

## Constructor Function

<p>In JavaScript, a constructor function is a special function that is used to create and initialize objects. 
It serves as a blueprint for creating instances of a particular type of object with specific properties and methods. 
When a constructor function is called with the "new" keyword, it creates a new object and sets its prototype to the constructor function's prototype, allowing the newly created object to inherit properties and methods from the constructor's prototype.</p>
<h5>Do not forget the <code>new</code></h5> before the constructor function name.

## Constructor Property

<p>In JavaScript, the constructor property is a property that exists on the prototype of an object. 
It references the constructor function that was used to create the object. 
When you create an object using a constructor function or the "new" keyword, the construct</p>

### Object.getPrototypeOf(afg):

This method retrieves the actual prototype of a specific object instance, i.e., the object from which the instance inherits.

```js
object.getPrototypeOf(myObject); // is the end of prototype chain where there is no method and the value is null.
```

### Property Lookup

If the instance has a property and we have the same property in our prototype, the instance property will overwrite the prototype property, because once we execute the program, javascript engine will first look into instance, if it does not have that property,then it will lookup in Prototype chain.

```js
function Country(name, population) {
	this.name = name;
	this.pastCal = population;
	this.place = "Asia";
	this.present;
}

Country.prototype.place = "on Earth";

const afg = new Country("Afghanistan", 12000);
console.log(afg.place); // Asia.
```

### Prototype property

For arrays for instance, once we instantiate an array object, we have access to its properties through prototypes.

in javascript, everything leads back to object.

```js
function University(name, location, students) {
	this.name = name;
	this.location = location;
	this.students = students;
}
```

<!-- Add the prototype -->

```js
University.prototype.region = "North America";
```

We are adding this property (`region`) to the University prototype to avoid adding it every time as a property and hard coding it inside the constructor.

Now, the `region` property will be added to all instances of `University` object.

```js
University.prototype.numStudent = function (num_student) {
	this.students = this.students + num_student;
	return `${this.name} have ${this.students} students`;
};
const MIT = new University(
	"Massachuset Institute of technology",
	"Boston USA",
	11376
);
```

## Methods in objects

Methods and properties of arrays or objects are stored in their prototype, not in the instances.
We can find them in `__proto__.`

```js
console.log({});
```

- This logs an empty object literal {}.
- The object doesn't have any properties or methods by itself. However, it inherits methods and properties from `Object.prototype`.
- Methods like `toString(), hasOwnProperty(), and valueOf()` are not stored directly in the instance, but they are available through the object's prototype

```js
console.log([]);
```

- This logs an empty array literal [].
- Like objects, arrays also have no methods or properties stored directly on the array itself. They are inherited from Array.prototype.
- Methods like push(), pop(), map(), forEach(), etc., are defined on the Array.prototype and are available to all arrays through prototypal inheritance.

```js
// Gets Array.prototype
const arrayPrototype = Object.getPrototypeOf([]);
// lists methods available on prototypes.
console.log(Object.getOwnPropertyNames(arrayPrototype));
```

<!-- Output -->

```list
[
  'length',        'constructor',    'at',
  'concat',        'copyWithin',     'fill',
  'find',          'findIndex',      'findLast',
  'findLastIndex', 'lastIndexOf',    'pop',
  'push',          'reverse',        'shift',
  'unshift',       'slice',          'sort',
  'splice',        'includes',       'indexOf',
  'join',          'keys',           'entries',
  'values',        'forEach',        'filter',
  'flat',          'flatMap',        'map',
  'every',         'some',           'reduce',
  'reduceRight',   'toLocaleString', 'toString',
  'toReversed',    'toSorted',       'toSpliced',
  'with'
]
```
