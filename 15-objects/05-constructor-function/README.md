## Constructor Function

In JavaScript, a constructor function is a special function that is used to create and initialize objects.
It serves as a blueprint for creating instances of a particular type of object with specific properties and methods.

A constructor function is a template for creating objects.

When called with the new keyword, it

- Creates a new empty object.
- Sets the this keyword to point to the new object.
- Initializes the object with properties and methods defined in the constructor.
- Implicitly returns the new object if no explicit return is provided.

#### capital letter

It is a common convection to use capital letter for the name of the name function to convey that it is a constructor function.

```js
function Hello(name) {
	this.name = name;
	console.log("Hello", this.name);
}
```

## new

The new keyword is essential for creating instances from a constructor function. It performs the following actions:

- Creates a new object.
- Sets up the prototype chain.
- Binds this to the newly created object.
- Returns the new object.

new keyword creates a new object, points the new object to the blue print and omits the return(no need to write explicitly return)

When a constructor function is called with the "new" keyword, it creates a new object and sets its prototype to the constructor function's prototype, allowing the newly created object to inherit properties and methods from the constructor's prototype.

```js
function hello() {
	console.log("hello");
}
```

```js
function Hello(name) {
	this.name = name;
	console.log("Hello", this.name);
}

greet = Hello("ahmad");
```

do not forget the new keyword before the constructor function name.
the key difference to the factory function here is it does not return the object inside the constructor

```js
const ahmad = {};
console.log("object constructor", ahmad.constructor);
```

the answer will be a [Function: Object] which means there is a constructor function called object that creates objects for us, created ahmad.

## Constructor Property:

In JavaScript, the constructor property is a property that exists on the prototype of an object. It references the constructor function that was used to create this object.

All objects have access to their own constructor function.

arrays and functions are objects.

All objects have access to their constructor,which can be accessed using constructor property.

### Few objects constructors

```js
const hello = function () {};
console.log("function constructor", hello.constructor);
```

function has a constructor function named `function`

```js
// array constructors
const subjects = [];
console.log("list constructor", subjects.constructor);
```

arrays have a constructor function named array.

Each of the objects created using constructor functions.

## constructor vs factory

#### 1. Constructor

```js
function GiveInfo(name, region) {
	// properties
	this.name = name;
	this.region = region;
	// methods
	this.info = function () {
		return `${this.name} is located in  ${this.region}`;
	};
	console.log("points to particular this object", this);
}
```

## Factory

```js
function givInfo(name, region) {
	const country = {
		name: name,
		region: region,
		fullIfo: function info() {
			return `${this.name} is located in ${this.region}`;
		},
	};
	return country;
}

const afg = givInfo("Afghanistan", "Asia");
const usa = givInfo("USA", "North America");
```
