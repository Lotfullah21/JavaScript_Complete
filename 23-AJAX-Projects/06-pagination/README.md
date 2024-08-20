<h1>Lessons learned in this project</h1>

## JavaScript

### Setting up pages

<hr>

```js
const title = get(".section-title h1");
const init = async () => {
	const people = await fetchPeople();
	title.textContent = "Pagination";
};
```

Once we are done with fetching, change the title from "Loading..." to "Pagination".

```js
const people = Array.from({ length: numberOfPages }, (_, index) => {
	const start = index * itemsPerPage;
	return following.slice(start, start + itemsPerPage);
});
```

- `Array.from(iterable, mapFunction, thisArg);`
  - `iterable`: An iterable object (like an array, string, or other iterable) to be converted into an array.
  - `mapFunction (optional)`: A function that is called for each element in the iterable. It allows you to perform a transformation on each element before adding it to the new array.
  - `thisArg (optional)`: An optional value that will be used as the this value when executing the mapFunction.

### Step-by-Step Explanation:

### Purpose:

The goal is to create an array of arrays (sub-arrays), where each sub-array contains a slice of the original following array.

### { length: numberOfPages }:

This is a convenient way to tell Array.from() how many elements (i.e., pages) you want in the final array (people).
Mapping Function: The mapping function (\_, index) allows us to calculate which part of the following array should go into each sub-array.

### 1. { length: numberOfPages }:

This creates an object with a length property equal to numberOfPages.
Array.from() treats this as an array-like object and creates an array with numberOfPages elements, all initially undefined.

`length`: Is says how many elements this object will have.

`arr = [undefined, undefined, undefined]`

### 2. Mapping Function ((\_, index) => { ... }):

The mapping function is applied to each element in the newly created array.
The \_ is a placeholder for the value of each element, which is undefined in this case.
The index is the position of the current element in the array, ranging from 0 to numberOfPages - 1.

### 3. Creating Sub-Arrays:

For each index, the mapping function calculates the starting point (start) in the following array.
It then slices the following array to create a sub-array of itemsPerPage elements and adds this sub-array to the people array.

### Example: How an Integer Leads to Sub-Arrays

If numberOfPages is 3 and itemsPerPage is 9, here's what happens:

### Initial Step:

Array.from({ length: 3 }) creates [undefined, undefined, undefined].

### Mapping Function:

For index = 0: It creates the first sub-array by slicing the first 9 items from following.
For index = 1: It creates the second sub-array by slicing the next 9 items.
For index = 2: It creates the third sub-array by slicing the last 2 items (if there are fewer than 9 remaining).

### Result:

The resulting people array is an array of 3 sub-arrays, each containing items from the following array.
Visual Representation

## If following is [1, 2, 3, ..., 20]:

1. First Page: [1, 2, 3, 4, 5, 6, 7, 8, 9]
2. Second Page: [10, 11, 12, 13, 14, 15, 16, 17, 18]
3. Third Page: [19, 20]

## With length:

Array.from({ length: n }) creates an array with n elements, all initially set to undefined.

## Without length:

Array.from({}) creates an empty array because there's no length property to define how many elements the array should have.

`	return people` <P> one important parameter here is the length,which means how many arrays do you want.
we want based on our needs, and that is per page, one array ,which can be determine by the length of number of pages,the return value will be a whole number</P>

## btns

```js
const displayButtons = (container, pages, activeIdx) => {
	let btns = pages.map((item, pageIdx) => {
		return `<button class="page-btn ${
			activeIdx === pageIdx ? "active-btn" : "null"
		}" data-index=${pageIdx}>${pageIdx + 1}</button>`;
	});
	console.log(btns);
	// Our btns is still an array
	btns.push(`<button class="next-btn">next</button>`);
	btns.unshift(`<button class="prev-btn">prev</button>`);
	console.log("After adding btns", btns);
	container.innerHTML = btns.join("");
};

export default displayButtons;
```

```text
['<button class="page-btn active-btn" data-index=0>1</button>', '<button class="page-btn null" data-index=1>2</button>', '<button class="page-btn null" data-index=2>3</button>', '<button class="page-btn null" data-index=3>4</button>', '<button class="page-btn null" data-index=4>5</button>', '<button class="page-btn null" data-index=5>6</button>', '<button class="page-btn null" data-index=6>7</button>', '<button class="page-btn null" data-index=7>8</button>', '<button class="page-btn null" data-index=8>9</button>', '<button class="page-btn null" data-index=9>10</button>']
```

After adding the prev and next buttons.

```text
['<button class="prev-btn">prev</button>', '<button class="page-btn active-btn" data-index=0>1</button>', '<button class="page-btn null" data-index=1>2</button>', '<button class="page-btn null" data-index=2>3</button>', '<button class="page-btn null" data-index=3>4</button>', '<button class="page-btn null" data-index=4>5</button>', '<button class="page-btn null" data-index=5>6</button>', '<button class="page-btn null" data-index=6>7</button>', '<button class="page-btn null" data-index=7>8</button>', '<button class="page-btn null" data-index=8>9</button>', '<button class="page-btn null" data-index=9>10</button>', '<button class="next-btn">next</button>']0: "<button class=\"prev-btn\">prev</button>"1: "<button class=\"page-btn active-btn\" data-index=0>1</button>"2: "<button class=\"page-btn null\" data-index=1>2</button>"3: "<button class=\"page-btn null\" data-index=2>3</button>"4: "<button class=\"page-btn null\" data-index=3>4</button>"5: "<button class=\"page-btn null\" data-index=4>5</button>"6: "<button class=\"page-btn null\" data-index=5>6</button>"7: "<button class=\"page-btn null\" data-index=6>7</button>"8: "<button class=\"page-btn null\" data-index=7>8</button>"9: "<button class=\"page-btn null\" data-index=8>9</button>"10: "<button class=\"page-btn null\" data-index=9>10</button>"11: "<button class=\"next-btn\">next</button>"length: 12[[Prototype]]: Array(0)
```

## HTML

```css
main {
	padding: 5rem 0;
}

.followers {
	width: 90vw;
	margin: 0 auto;
	max-width: var(--max-width);
	border: 2px solid red;
}
```

Add a padding for the whole page and `width, max-width, margin:0 auto` for the section center to place them at the center.
Do not add any padding from left and right, we are already putting them at the center using `margin:0 auto`.
