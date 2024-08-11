## bubbling

If we target an element that lives at the bottom of our document, the event will bubble up to the top.

## propagation

If we target an element that lives on the top, the event will propagate to the elements that are at the bottom.

## event capturing

fires at the root and continue until reaches to the target.

```js
function stopPropagation(e) {
	console.log("You clicked on the link");
	e.stopPropagation();
}

list.addEventListener("click", stopPropagation);
container.addEventListener("click", showBubbling);
window.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
```

`stopPropagation(e)` allows us to stop propagation to container, window and document.
