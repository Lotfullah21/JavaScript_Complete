## Conditional Statements

The code block is dependent on the condition, if the condition is true, the code inside the block will be executed.

```js
syntax: if (condition) {
	codeblock;
}
```

### Multiple Ifs

If we are having multiple if conditions and they are true, the last true if condition will be executed

```js
if (age < 15) {
	console.log("hello");
}
if (age < 17) {
	console.log("hello 17");
}
if (age < 20) {
	console.log("age is smaller than 16");
}
```

## Unary,Binary,Ternary

The above classification is done based on how many operators are used in the expression.

## Unary

```Js
type of x
```

## Binary

binary (declaration and assignment)

```js
x = 20;
```

## Ternary

```js
syntax: condition ? (runs if condition is true):(runs if condition is false)
```

```js
const x = 10;
x > 2 ? "True" : "False"; // True, because the condition is true and 10>2.
```

```js
x = 10;
if (x > 2) {
	console.log("True");
} else {
	console.log("Not True");
}
```

## Truthy and Falsy

In javascript, all the values are either truthy or falsy.
Falsy-values: "``,"",'',Nan,null,undefined, false "
Truthy: All values except the falsy values.
