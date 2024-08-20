### Lessons learned

Get the center and bottom locations for each btn.
center, because we want to place the submenu at the center of the button
bottom, because we want to place it closer to the button.

```js
// Submenu
document.addEventListener("DOMContentLoaded", () => {
	linkBtns.forEach((btn) => {
		btn.addEventListener("mouseover", (e) => {
			const text = e.currentTarget.textContent;
			const btnArea = e.currentTarget.getBoundingClientRect();
			const bottom = btnArea.bottom - 3;
			// left + right//2
			const center = (btnArea.right + btnArea.left) / 2;
			console.log(e.currentTarget, text, btnArea);
		});
	});
});
```

Get

### Paths

Note down from where you are calling these paths, for instance, in this project i am calling the submenu from `index.html`, hence, the paths should be considered based on `index.html` location.

```js
const subLinks = [
	{
		page: "کورس ها",
		links: [
			{
				label: "پایتون",
				icon: "fab fa-python", // Correct icon for Python
				// Wrong paths
				url: "../pages/courses/python.html",
				category: "python",
			},
			{
				label: "الگوریتم ها با پایتون",
				icon: "fas fa-code", // A good general icon for algorithms
				// Correct Paths
				url: "./pages/courses/dsa.html",
				category: "python",
			},
		],
	},
];
```

## CSS

## CSS

- For button to respect the margin, add `display:block` as by default,they comes in inline form,one use case is we can put them in center `margin:0 auto`

- No need of adding padding to your individual nav links as it will cause other elements also to expand.

`btn-link{padding:1.2rem}` not recommended.

- In hero-center in bigger screen we have added`align-items:end` which means push the along vertical direction to the end, if we do not add `padding-bottom:(some-value)` the elements will stay in the bottom which does not look good
- we also have added `background-size:contain,height:100%` which means background can take 100% of the hero,but it should distort photo,so we added contain
- Contain ensures that the entire image is visible within the element, with potential empty space around the image.
  Cover scales the image to completely cover the element's content box, potentially cropping parts of the image.

<h4>Sidebar</h4>

- Add position fixed to the

```css
.sidebar-wrapper{position:fixed,
visibility:hidden,
z-index:-90
}

```

so that this is responsible for being visible once we clicked on the toggle btn.

- Keep all the functionality related to the links inside 'sidebar' and visibility functionality to the `sidebar-wrapper` like display mode, aligning items add position relative to the sidebar so that we can have

`close-btn{position:absolute} to the right hand side of links`

- The length of list index words matters if we look closer at them, for instance, if we add few more words in 2nd list,the last index word will looks like it has margin from the right, inface id does not have, and the length caused that look to that element.
- <strong>There is no better friend than the developer tools.</strong>

## JS

```js
const tempPage = sublinks.find(({ page }) => page === text);
```

- `find` method returns an object if exist, or undefined if the object does not exist.
- Here, we say while mouse moving on the elements, if the text inside the button === the page property inside the 'data.js' then shows us the sub
- We use the `tempPage` which has properties of {page,links}
- `if (tempPage)`,if tempPage exists, then change the context of the 'Submenu' to the page and its elements.
  `if (!e.target.classList.contains("btn-link"))` if the elements in the navbar we are hovering does not have class of `btn-link`, then remove the 'show' class from it.
