## Objects

Objects are collections of properties and represented using key-value pairs.

We can create objects using object literals, constructor functions, or the class keyword.

## 1. Object literals

```js
const info = {
	name: "HooshmanLab",
	foundedYear: 2022,
	purpose: "To provide best computer science materials for afghan students",
	age: 1.5,
};
```

## 2. Using bracket notations

```js
const lab = {};
lab["name"] = "Hooshmandlab";
lab["age"] = 1.5;
lab["foundedYear"] = 2022;
```

## 3. Using dot notation

```js
const myLab = {};
myLab.name = "HooshmandLab";
myLab.age = 1.5;
myLab.foundedYear = 2022;
```

## this

left of the dot should be an object so that this can point to that object.
in Regular functions not like arrow function, if this is called by an object, it will point to that object, if this called by a regular function, it will point to a global object which is the window object here.

function show(){
console.log(this)
}

const afg={
name:"Afghanistan",
region:"Asia",
show:show,
}
const ind={
name:"India",,
region:"South Asia",
show:show,
}

ind.show() // points to ind object.
afg.show() // points to afg object.

objects should be always on the left side of the function we are invoking.
show() // points to a global boject.
