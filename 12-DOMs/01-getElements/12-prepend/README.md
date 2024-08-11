# Prepend

## 1. createElement("element)

```js
const newHeading = document.createElement("h2");
const text = document.createTextNode("Hello world");
newHeading.appendChild(text);
heading.appendChild(newHeading);
```

## 2. Using innerText

```js
const newHeading = document.createElement("h2");
newHeading.classList.add("underline");
newHeading.innerText = `Hello world`;
// prepend method add at the top of our dom
document.body.prepend(newHeading);
```
