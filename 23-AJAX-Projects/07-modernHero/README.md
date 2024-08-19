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
