## 1. document.getElementsByClassName("class name");

It will return a HTML collection, not a single object, hence we cannot directly target it and apply styles to it.
We need to use indexing to target a specific element.

```js
const h2 = document.getElementsByClassName("info");

console.log("h1 =", h2); // HTMLCollection [h1.info]

h2[0].style.color = "red";

console.log(h1.length);
```

It returns a HTML collection which is array like object.
We can use length property, and indices but not array methods like `map, reduce, ...`
