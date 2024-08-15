## this

this is a keyword that refers to the object it belongs to.

Left of the dot should be an object so that this can point to that object.

## Method

When used inside a method, `this` refers to the object that owns the method.

```js
const afg = {
	name: "Afghanistan",
	region: "Asia",
	fullInfo: function () {
		return `${this.name} is located in ${this.region}`;
	},
};

afg.fullInfo(); // left of fullInfo is the object of `afg`.
```

## In a Constructor Function

When used in a constructor function, this refers to the newly created object.

```js
function Person(name) {
	this.name = name;
}
const bob = new Person("Bob");
console.log(bob.name); // Outputs: Bob
```

## In an Event Handler

In an event, this refers to the element that received the event.

```js
const button = document.querySelector("button");
button.addEventListener("click", function () {
	console.log(this); // Outputs: <button> element
});
```

## Regular function

In regular function, it depends on how the `this` is used.
is it object to the left of `this`, or `function`.

```js
function Hello() {
	console.log(this);
}

Hello(); // Output: Global object
```
