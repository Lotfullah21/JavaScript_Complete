## Math.random()

It always gives us a number between 0 and 1.

## Math.floor()

It reduces the number to an integer.

```
Math.floor(12.3) = 12
Math.floor(12.1234) = 12
Math.floor(12.93232) = 12
Math.floor(12.83932) = 12

```

## Math.floor(Math.random()\*3)

It gives a number between 0 to 2. (0,1,2), why not 3?
Because we do not need them and we are indexing from 0.

# !Important

Use a variable and keep the value that is generated by getRandom, because of the fact that every time we call the function, we are getting a new number.
For the below code, you might get different number, one for text content and the other one for backgroundColor.

##### No variable used

```js
btn.addEventListener("click", function () {
	console.log(getRandom());
	document.body.style.backgroundColor = colors[getRandom()];
	colorText.textContent = colors[getRandom()];
});

function getRandom() {
	let number = Math.floor(Math.random() * colors.length);
	return number;
}
```

##### Correct Way

A variable is used.

```js
btn.addEventListener("click", function () {
	const num = getRandom();
	document.body.style.backgroundColor = colors[num];
	colorText.textContent = colors[num];
});

function getRandom() {
	let number = Math.floor(Math.random() * colors.length);
	return number;
}
```