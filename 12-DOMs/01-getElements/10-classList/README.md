# classList

## 1. element.classList.add("class-name")

1. Get the element
2. Add the class name

`
`class list`can be added manually to our elements using`element.classList.add("class-name") --> title.classList.add("title");`

```js
const items = document.getElementsByClassName("list-items");
const title = document.getElementById("title");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValTitle = title.className;
console.log("title class =", classValTitle);
title.classList.add("title");

// Get the class names
const classValue = first.className;
console.log("class value =", classValue);
first.classList.add("color");

// Since, by class list returns a collection of elements, we need to use indexing.
console.log(items);
for (var i = 0; i < items.length; i++) {
	const classValItems = items[i].className;
	console.log("class Value =", classValItems);
}

console.log(items.length);
```

We can use `element.className = "class name"` as well.

```js
const classValTitle = title.className;
console.log("title class =", classValTitle);
title.classList.add("title");
title.className = "title";
```

We can alas add as many classes as we want just by putting a "," between the class names.

```js
title.classList.add("title", "font", "color");
```

## 2. Element.classList.remove("class-name")

We can remove the classes using `.remove` method.

```js
const classValTitle = title.className;
console.log("title class =", classValTitle);
title.classList.remove("title");
title.className = "title";
```

## 3. Look for a class if exists or not?

```js
const items = document.getElementsByClassName("list-items");
const title = document.getElementById("title");
const first = document.getElementById("first");

// Loop if font class is present
const contains = first.classList.contains("color");
if (contains) {
	console.log("font class is present");
} else {
	console.log("font class is not present.");
}
```
