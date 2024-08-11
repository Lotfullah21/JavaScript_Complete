## 1. node.nodeValue

```js
const first = document.querySelector(".first");
console.log("first =", first);
const value = first.nodeValue;
```

The nodeValue property is used to get or set the value of a node. However, for element nodes (like <div>, <p>, etc.), nodeValue returns null because the value is not directly associated with the element node itself but with its child text nodes

We cannot use `node.nodeValue` directly, as the all attributes related to an element sits within `childNodes` attributes.
Either we have to use indexing `first.childNodes[0].nodeValue)` or directly `firstChild`, because the text content is at the first index in the `childNodes` node list.

```js
const first = document.querySelector(".first");
console.log("first =", first);
const value = first.nodeValue;
console.log("value =", value);
console.log("first child nodes =", first.childNodes);
console.log("using indexing =", first.childNodes[0].nodeValue);
console.log("using first child =", first.firstChild.nodeValue);
// For text content, simply we can use .textContent.
```

For text content only, we can use `element.textContent` as well.

```js
const textContent = first.textContent;
console.log("text content", textContent);
```
