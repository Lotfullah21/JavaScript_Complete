```css
.social-links {
	display: none;
	height: 0;
	overflow: hidden;
}

.social-links a {
	margin-left: 4rem;
}

.nav-links {
	margin: 0;
	height: 0;
	overflow: hidden;
	/* To do for height 224.6px */
}

.show-links {
	height: 200.6px;
}
.show-social-links {
	display: flex;
	justify-content: space-evenly;
	justify-content: center;
	margin-bottom: 2rem;
	padding-right: 1rem;
	height: 40px;
}
```

## Javascript code that adds two different classes.

```js
const navLinks = document.querySelector(".nav-links");
const socialLinks = document.querySelector(".social-links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", function () {
	if (navLinks.classList.contains("show-links")) {
		navLinks.classList.remove("show-links");
	} else {
		navLinks.classList.add("show-links");
	}
});

toggleBtn.addEventListener("click", function () {
	if (socialLinks.classList.contains("show-social-links")) {
		socialLinks.classList.remove("show-social-links");
	} else {
		socialLinks.classList.add("show-social-links");
	}
});
```

If there are two container you want hide, add two separate show-classes.

After adding height zero and adding show-classes, do not forget to add `heigh=auto` for bigger screen after adding media queries.

```css
@media screen and (min-width: 768px) {
	.nav-links {
		padding: 0;
		display: flex;
		height: auto;
	}

	.social-links {
		display: flex;

		height: auto;
	}
}
```
