## 1. getAttribute()

To get attributes of a node element, we can use `.getAttribute` to a specific attribute related to that element.

#### Steps

1. First, select the node element you want to dig on.
2. use `nodeElement.getAttribute("class,id ,...")`

```js
const items = document.querySelector(".list-items");

const classAtr = items.getAttribute("class");
const idAtr = items.getAttribute("id");
console.log("class attribute =", classAtr);
console.log("id attribute =", idAtr);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log("link value =", showLink);
```

## 2. setAttribute()

To set an attribute for an element, get the node element and set the attribute using
`nodeElement.setAttribute("attribute Name", "attribute value") => nextSibling.setAttribute("class", "last");`

```js
const first = document.querySelector(".first");
const nextSibling = first.nextElementSibling;
console.log(nextSibling);
nextSibling.setAttribute("class", "last");
nextSibling.textContent = "Now, I got some value";
console.log(nextSibling);
```
