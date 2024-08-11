# Prepend

## 1. textContent

It returns the whole text content within the selected node element.

```js
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const courses = document.getElementById("courses");

console.log(courses.textContent);
console.log(container.textContent);
```

remove the node element with the class of container.

## 2. innerHTML

It returns the whole `HTML` elements within the selected node element

```js
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const courses = document.getElementById("courses");

console.log(courses.innerHTML);
console.log(container.innerHTML);
```

## use cases

Simply copy and add another list to our document.

```js
const newUl = document.createElement("ul");
newUl.innerHTML = `<li class="item">machine learning</li>
<li>deep learning</li>
<li>artificial intelligence</li>
`;
document.body.appendChild(newUl);
```
