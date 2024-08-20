<h1>Lessons learned in this project</h1>

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

## JavaScript

<hr>

- `Array.from(iterable, mapFunction, thisArg);`
  - iterable: An iterable object (like an array, string, or other iterable) to be converted into an array.
  - mapFunction (optional): A function that is called for each element in the iterable. It allows you to perform a transformation on each element before adding it to the new array.
  - thisArg (optional): An optional value that will be used as the this value when executing the mapFunction.
    <code>data.js</code>

```js
const people = Array.from({ length: numberOfPages }, (_, index) => {
	const start = index * itemsPerPage;
	return following.slice(start, start + itemsPerPage);
});
```

`	return people;` one important parameter here is the length,which means how many arrays do you want.
we want based on our needs, and that is per page, one array ,which can be determine by the length of number of pages,the return value will be a whole number

```js
const tempPage = sublinks.find(({ page }) => page === text);
```

- `find` method returns an object if exist, or undefined if the object does not exist.
- Here, we say while mouse moving on the elements, if the text inside the button === the page property inside the 'data.js' then shows us the sub
- We use the `tempPage` which has properties of {page,links}
- `if (tempPage)`,if tempPage exists, then change the context of the 'Submenu' to the page and its elements.
  `if (!e.target.classList.contains("btn-link"))` if the elements in the navbar we are hovering does not have class of `btn-link`, then remove the 'show' class from it.
