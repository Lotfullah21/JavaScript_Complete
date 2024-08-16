# Loop

Using loops, we can repeatedly execute a block of code while the condition is true.

## While loop

1.  set the initial condition outside the while loop clearly
2.  set the condition to be evaluated inside the while loop parenthesis
3.  Add the logic inside the while loop block
4.  set the increment/or decrement value at the end of the code so that you can exit the loop at the right time

### Syntax

```js
initializer;
while (condition) {
	// Logic
	final - expression;
}
```

```js
var x = 0;
while (x < 10) {
	console.log("Hello", x);
	x += 1;
}
```

## Note:

Do not use `const` while using loops.
