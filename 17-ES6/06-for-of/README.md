## for of

- loops through values of iterable objects
- we can use break and continue here unlike forEach loop

If we do not specify a variable declaration (var, let, or const) in a for...of loop, JavaScript will treat it as an implicit global variable, which behaves similarly to using var.

```js
for (country of countries) {
	console.log(country); // country becomes a global variable
}
```

```js
for (let country of countries) {
	console.log(country); // 'country' is block-scoped within the loop
}
```

## for in

- iterates over object properties
- use it with objects, as order does not make much difference, but for arrays go for for of

## Methods to convert objects into arrays

- Object.keys(): convert object property name to arrays
- Object.values(): convert object property values to arrays
- Object.keys(): convert object property name and values to arrays
