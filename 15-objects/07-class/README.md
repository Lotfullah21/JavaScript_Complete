## class

A class in JavaScript is a blueprint for creating objects. It is essentially a syntactic sugar over JavaScript’s prototype-based inheritance model. The class syntax simplifies the process of defining constructor functions and managing prototypes.

JavaScript classes were introduced in ECMAScript 2015 (ES6) to provide a more structured and object-oriented approach to programming in JavaScript.

<em>the whole point of having a class is to get a cleaner code instead of going for separate constructor, separate prototypes.(ALL IN ONE PLACE)</em>

### Key Points:

- Classes are templates for creating objects.
- Constructor functions are used to initialize new instances with properties.
- Methods can be defined directly within the class body.
- Inheritance can be implemented through classes to create subclasses.

```js
class MyClass {
	// Constructor method for initializing properties
	constructor(property1, property2) {
		this.property1 = property1;
		this.property2 = property2;
	}

	// Instance method
	method1() {
		// Code for the method
	}

	// Another instance method
	method2() {
		// Code for the method
	}
}
```

## What is a Constructor?

A constructor is a special method in JavaScript classes that is used for creating and initializing an object when the new keyword is used. It’s called automatically when a new instance of the class is created. The constructor usually takes arguments and assigns them to instance properties.

### Key Points:

- constructor() is automatically invoked when a new object (instance) is created from the class.
- It initializes the object’s properties.
- You can pass values to the constructor via arguments, which are then used to set the initial state of the instance.

A class is a cleaner and more modern way of creating objects in JavaScript, and it simplifies inheritance and object creation. The constructor method in the class is where you initialize the properties for each instance. Through prototypal inheritance, methods can be shared across all instances while properties are unique to each instance.

## class vs prototype

```js
class Country {
	constructor(name, population) {
		this.name = name;
		this.totalCount = population;
	}
	place = "on Earth";
	totalPopulation(currentCount) {
		this.totalCount += currentCount;
		return this.totalCount;
	}
}

const Afg = new Country("Afghanistan", 30);
console.log(Afg.name, Afg.totalCount, Afg.place);
Afg.totalPopulation(10);
console.log(Afg.name, Afg.totalCount);
```

### // Before classes (constructor function)

```js
function Country(name, population) {
	this.name = name;
	this.totalCount = population;
}

Country.prototype.place = "on Earth";
Country.prototype.totalPopulation = function (currentCount) {
	this.totalCount += currentCount;
	return this.totalCount;
};

const Afg = new Country("Afghanistan", 30);
console.log(Afg.name, Afg.totalCount, Afg.place); // Output: Afghanistan 30 on Earth
Afg.totalPopulation(10);
console.log(Afg.name, Afg.totalCount); // Output: Afghanistan 40
```
