## 1. document.querySelector("any-css");

It returns the first element within the document that matches the specified CSS selector. If no match is found, it returns null.

It returns a single Element object, not a NodeList.

```js
const h1 = document.querySelector("h1");
// console.log(h1);
h1.style.color = "gold";

const h2 = document.querySelector("h2");
// console.log(h1);
h2.style.color = "red";

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);
lastItem.style.color = "green";
```

## 1. document.querySelectorAll("any-css");

It returns a NodeList containing all the elements within the document that match the specified CSS selector. If no matches are found, it returns an empty NodeList.

It returns a NodeList which is collection nodes that unlike HTML collection, we can apply `forEach` method.

```js
// querySelectorAll
const items = document.querySelectorAll(".list-item");
console.log(items); // a node list of all the items having class last-item
items.forEach(function (item) {
	item.style.color = "blue";
});
```
