## Scroll

this event can be triggered on document or element.

```js
window.addEventListener("scroll", function () {
	console.log(window.scrollY);
	console.log(window.scrollX);
});
```

it returns the number of pixels scrolled along x-axis or y-axis

## Tips

Add a parent container to the `ul` for navbar links to get the over all height of the links.

```css
 <div class="navlinks-container">
            <ul class="nav-links">
```

## Element.getBoundingClientRect()

It returns the size of an element and its position relative to the view port.
