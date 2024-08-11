## Scroll

This event can be triggered on document or element.

### ScrollY

Returns number of pixels that the document is currently scrolled along vertical axis (pageYOffset).

### ScrollX

Returns number of pixels the document is currently scrolled along horizontal axis (pageXOffset).

```js
window.addEventListener("scroll", function () {
	console.log(window.scrollY);
	console.log(window.scrollX);
});
```

It returns the number of pixels scrolled along x-axis or y-axis
