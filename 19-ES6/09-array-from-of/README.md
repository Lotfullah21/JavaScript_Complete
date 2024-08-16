## Array from

This method returns array object from any kind of object with a length property.
It returns an array from an array like objects(string, nodeList, set)

```js
const lab = "HooshmndLab";
console.log(Array.from(lab));

Output: ["H", "o", "o", "s", "h", "m", "n", "d", "L", "a", "b"];
```

## Accessing

```js
const subs = {
	age: 2,
	field: "technology",
};

for (let pro in subs) {
	console.log(pro); // Logs "age", then "field"

	// This won't work as "pro" is a variable, not a literal key
	console.log(subs.pro); // Logs undefined because there is no "pro" property in subs

	// This works because it accesses the property dynamically using the variable pro
	console.log(subs[pro]); // Logs 2 for "age" and "technology" for "field"
}
```

### Dot notation (subs.pro):

When you use dot notation like subs.pro, JavaScript looks for a property literally named "pro" in the subs object.
Since your object doesn't have a property called "pro", subs.pro is undefined.

### Bracket notation (subs[pro]):

Bracket notation allows you to access properties dynamically using a variable.
In your loop, pro is a variable that takes the value of each key (property name) in the subs object. So when you do subs[pro], JavaScript looks up the value of the property with the name stored in pro.
In your case, pro will be "age" and "field" during the loop iterations. So subs[pro] becomes subs["age"] and subs["field"], which correctly access the values 2 and "technology".

Even though pro holds values like "age" and "field" during the loop, dot notation (subs.pro) does not look at the value of pro. Instead, it literally looks for a property called "pro".
