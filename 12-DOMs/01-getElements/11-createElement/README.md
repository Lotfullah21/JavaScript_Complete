# Create element

## 1. createElement("element)

We can create elements dynamically using `document.createElement("element");`

```js
// Create an empty div
const newEle = document.createElement("div");
```

## 2.createTextNode("text content")

Add the content using `document.createTextNode("A paragraph for div");`

```js
// Create text node
const newText = document.createTextNode("A paragraph for div");
```

## 3. element.appendChild(childElement)

Add the newly created element to the body or the element nodes we are choosing, but It will add at the end of the element.

```js
// Adding to our container
const heading = document.createElement("h2");
const textNode = document.createTextNode("I am added");
heading.appendChild(textNode);
heading.classList.add("color");
container.appendChild(heading);
```

## Note:

Since an element can't exist in two places simultaneously, it only remains in the last place where it's appended.
and we cannot add the same element to different places.

```js
const container = document.querySelector(".container");

// Create an empty div
const newEle = document.createElement("div");
// Create text node
const newText = document.createTextNode("A paragraph for div");
// Append to the newEle
newEle.appendChild(newText);
// Append div to the body
document.body.appendChild(newEle);

// Adding to our container
const heading = document.createElement("h2");
const textNode = document.createTextNode("I am added");
heading.appendChild(textNode);
heading.classList.add("color");
// Wrong, we cannot add same element.
container.appendChild(newEle);
```

## 4. insertBefore("element", "location")

Using `insertBefore`, the newly created elements can be added before another element.

```js
// Creating a anchor element
const anchorTag = document.createElement("a");
// Create a text node
const anchorText = document.createTextNode("Click here");
// add the text node
anchorTag.appendChild(anchorText);
// Add the class
anchorTag.classList.add("underline");
// Insert it before container element.
document.body.insertBefore(anchorTag, container);
```
