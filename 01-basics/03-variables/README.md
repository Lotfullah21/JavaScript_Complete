## Variables

Variables are the basic blocks of programming. They allow us to:

- Store values
- Access them
- Modify them if needed
  We can declare a variable and assign values later:

```js
let name, lastName, country;
name = "me";
lastName = "ahmad";
country = "India";
```

For better convention, use camelCase or underscore.

# let, const, and var

In the latest version of JavaScript, var has been replaced by let and const.

## let

You can re-assign the values later and also declare and assign values later. For instance:

```js
let name = "ahmad";
name = "mahmood";
console.log(name); // mahmood
```

## const

Once a value is assigned, you cannot change the value, and the value must be assigned during initialization:

```js
const name = "ahmad";
// name = "mahmood"; // Error
console.log(name); // ahmad
```

## var

It is a general case of both let and const. You can re-assign values to a variable:

```js
var name = "ahmad";
name = "mahmood";
console.log(name); // mahmood
```

It is your choice, whichever you prefer.

## Strings

Strings are sequences of characters.

### Concatenation

Addition of two strings is known as concatenation.

```js
string1 + string2;
```

### Backticks

An easy technique to use with strings:

```js
`{variable name}`;
```

### Numbers

When declaring numbers in JavaScript, you do not declare the type (whether it be a decimal or an integer); JavaScript will figure that out. You can perform -, \*, / operations on two strings that have numeric values. However, for addition, it would be concatenation.

## Data Types

Data types specify which kind of operations can be done on that data. In JavaScript, there are a total of 7 different data types:

## Primitives

- Number
- String
- Boolean
- Undefined: Represents an uninitialized or undeclared variable. If a variable is declared but not assigned a value, it is automatically assigned the value undefined.
- Null: Represents the intentional absence of any object value, or a developer-assigned null value.
- Symbol

## Non-primitive

- object

## Objects

- Array: Represents an ordered list of values, which can be of any type. Arrays are created using square brackets ([]). For example: [1, 2, 3], ['apple', 'banana', 'orange'].
- Function: Represents a reusable block of code that can be invoked by its name. Functions are objects in JavaScript and can be assigned to variables, passed as arguments, and returned from other functions.
  Objects: Represents a collection of key-value pairs, where values can be of any type. Objects can be created using object literals ({}) or using the new keyword and a constructor function.
- Falsy and Truthy
  All values except "", ' ', 0, -0, NaN, undefined, false, and null are truthy, meaning they will evaluate to true in a boolean context.

```js
text = "salam";
if (text) {
	console.log("truthy value");
} else {
	console.log("falsy value");
}
// The above code evaluates to True.
```

```js
text = "";
if (text) {
	console.log("truthy value");
} else {
	console.log("falsy value");
}
```
