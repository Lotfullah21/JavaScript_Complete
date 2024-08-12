In CSS, the inset property is a shorthand property that combines the top, right, bottom, and left properties to specify the placement of an element within its containing element. It's commonly used to set the positioning of absolutely or fixed positioned elements.

```css
element {
	inset: top right bottom left;
}
```

Here, top, right, bottom, and left are values representing the distance of the element from the respective edges of its containing element. Each value can be specified in pixels, em units, percentages, etc.

```css
element {
	inset: 0 0 0 0;
}
```

can be written as

```css
element {
	inset: 0;
}
```

which in turn covers the entire space of its parent

In fact, when we set the position to fixed, the dimensions also should be specified, where do we want to place them.

```css
.modal-overlay {
	position: fixed;
	background: linear-gradient(rgba(33, 39, 40, 0.216), rgba(39, 58, 61, 0.172));
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
```

```css
.modal-overlay {
	position: fixed;
	background: linear-gradient(rgba(33, 39, 40, 0.216), rgba(39, 58, 61, 0.172));
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
```

```css
.modal-overlay {
	position: fixed;
	background: linear-gradient(rgba(33, 39, 40, 0.216), rgba(39, 58, 61, 0.172));
	inset: 0;
}
```

## transition

It is crucial to have `transition: var(--transition);` either in `hover` or `close-btn` to get the rotate effect.

```css
.close-btn {
	transition: var(--transition);
}
.close-btn:hover {
	transform: rotate(360deg) scale(1.2);
}
```

## why not display:block

```css
.modal-overlay {
	position: fixed;
	background: linear-gradient(rgba(33, 39, 40, 0.216), rgba(39, 58, 61, 0.172));
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	transition: var(--transition);
	display: block;
}

.open-modal {
	display: grid;
}
```

If we add display, all the functionalities will be the same except the transition effect, it will not take place.

So, instead we use

```css
.modal-overlay {
	visibility: hidden;
	z-index: -10;
}
.open-modal {
	visibility: visible;
	z-index: 10;
}
```

## modal-overlay

responsible for having the overlay and the box, we are toggling this element using `open-modal` class.

```css
.modal-overlay {
	position: fixed;
	background: linear-gradient(rgba(33, 39, 40, 0.216), rgba(39, 58, 61, 0.172));
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	transition: var(--transition);
	visibility: hidden;
	z-index: -10;
}
```
