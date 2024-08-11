# Prepend

## 1. Element.remove()

It removes the respective element

```js
const container = document.querySelector(".container");
container.remove();
```

remove the node element with the class of container.

## 2. .removeChild

It does removes the child node only.

```js
const container = document.querySelector(".container");
// Run the query selector on container and select the headings-2 inside it.
const heading2 = container.querySelector("h2");
// Remove the heading from container
container.removeChild(heading2);
```
