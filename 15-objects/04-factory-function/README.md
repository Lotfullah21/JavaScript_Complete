## Factory functions

A function that returns an object and creates all functionality in one place.
Once created, build as many objects as you want from that template.

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
```

In JavaScript, a factory function is a design pattern used to create and return objects. It is a way to encapsulate object creation within a function, providing a simplified and controlled way to generate instances of objects with certain properties and behaviors.

Factory functions are an alternative to using constructors and the "new" keyword for object creation.

`Objects`: provide a public interface to other code that wants to interact.

Objects in javascript are collection of properties.they are key-value pairs.
