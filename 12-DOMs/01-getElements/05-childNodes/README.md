## 1. allChildren.childNodes

If a css property or element have children, using `childNodes` and `children` we can get access to those children.

`childNodes`: This property returns a NodeList of all child nodes, including elements, text nodes (which include whitespace), and comment nodes.

whitespace" refers to spaces, tabs, newlines, and other non-visible characters that are used to format the HTML document for readability. These characters are part of the text content between HTML elements and can be considered as text nodes when the DOM is parsed.

`children`: This property returns an HTMLCollection of only the child elements (ignoring text nodes, including those that are whitespace).

```js
const h1 = document.querySelector("h1");
h1.style.color = "gold";

const allChildren = document.getElementById("list-items");
console.log(allChildren.childNodes); //
NodeList(9)[
	(text,
	li.list - item,
	text,
	li.list - item,
	text,
	li.list - item,
	text,
	li.deep,
	text)
];
```

## 1. onlyChildren.children

```js
const onlyChildren = document.getElementById("list-items");
console.log(onlyChildren.children);
// HTMLCollection(4)[(li.list - item, li.list - item, li.list - item, li.deep)];
```
