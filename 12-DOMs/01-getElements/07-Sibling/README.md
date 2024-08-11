## 1.nextElementSibling:

Definition: This property returns the next sibling element of the current element that is an element node (i.e., it skips over text nodes, comment nodes, etc.).
Example: If first is a <div> and the next sibling in the DOM is another <div>, then nextElementSibling will return that <div> element.
Use Case: Use this when you want to get the next HTML element
sibling of an element.

## 2. nextSibling:

Definition: This property returns the next sibling node of the current node, regardless of its type (element, text, comment, etc.).
Example: If first is a <div> and it is followed by a text node (like whitespace or a newline), nextSibling will return that text node, not the next element.
Use Case: Use this when you want to navigate through all types of nodes in the DOM, not just elements.

```js
const first = document.querySelector(".first");
const nextEle = first.nextElementSibling;
const nextSibling = first.nextSibling;

console.log(first);
console.log(nextSibling);
console.log(nextEle);
```

As we chain and chain, we might cross the html root which is the most oldest ancestor and we will get null after `html`.
