What we are saying is add the slide class.

```js
const btnContainer = document.querySelector(".switch-btn");
const switchMode = document.querySelector(".switch");
const video = document.querySelector(".video-container");

btnContainer.addEventListener("click", function (e) {
	if (!btnContainer.classList.contains("slide")) {
		btnContainer.classList.add("slide");
		video.pause();
	} else {
		btnContainer.classList.remove("slide");
		video.play();
	}
});
```

in css, we have specified that if slide class is present,then move the switch 40% to the left

```css
.slide .switch {
	left: 40%;
}
```

## position:fixed

position: fixed property is used to position an element relative to the viewport, which is the visible area of the browser window. Here’s a breakdown of how it works:

### 1. Position Relative to Viewport:

An element with position: fixed is positioned relative to the browser window (the viewport), not to its containing block or parent element. This means it will stay in the same place on the screen even if the user scrolls the page.

### 2. Fixed Positioning:

The element’s position is specified using the top, right, bottom, and left properties, which define its distance from the respective edges of the viewport. In your example, top: 0, left: 0, right: 0, and bottom: 0 ensure that the element covers the entire viewport.

### 3. Layering with z-index:

The z-index property specifies the stack order of the element. Elements with a higher z-index appear above those with a lower z-index. In your code, the preloader is set with a high z-index of 999 to ensure it appears above other elements.

### 4. Visibility and Transition:

The visibility property controls whether the element is visible or hidden. transition allows for smooth changes between visibility states, making it fade out or in when switching between classes.
