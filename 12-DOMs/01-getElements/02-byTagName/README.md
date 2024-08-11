## 1. getElementByTagName("tag name")

```js
const h1 = document.getElementsByTagName("h1");
console.log(h1); // HTMLCollection(3) [h1#title, h1#title, h1#title, title: h1#title]
console.log(h1.length); // 3
```

It returns a HTML collection which is array like object.
We can use length property, and indices but not array methods like `map, reduce, ...`
