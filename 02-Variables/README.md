## Variables

Variables are the basic blocks of programming. They allow us to:

- Store values
- Access them
- Modify them if needed
  We can declare a variable and assign values later:

## var

A keyword that allows us to declare a variable, there are other keywords as well, for now lets focus on this keyword only.

```js
var a = 10;
```

We are declaring a variable with the name of a and assigning the value 10.

We can assign different values for our variables.

```js
var a = "ahmad";
```

```js
var a = true;
```

```js
var a = null;
```

## Declare variable and assign the value later

Using `var` keyword, we can declare a variable and assign the value later

```js
console.log(a); // ReferenceError: b is not defined
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

```js
var name, duration, starting_date;
console.log(); // undefined undefined undefined
name = "algorithms";
duration = "3 months";
starting_date = "25th of september";
console.log(name, duration, starting_date); // algorithms 3 months 25th of september
```

## Variable Naming rules

1. A variable name can contain digits, letters, underscore and $
2. must start with letter, $ or \_.
3. If two words combined use "name1_name2" instead of "name1-name2"/
4. Cannot start with numbers.
5. Keywords cannot be used.

For better convention, use camelCase or underscore.

## Different keywords

# let, const, and var

In the latest version of JavaScript, var has been replaced by let and const.

## 1. let

You can re-assign the values later and also declare and assign values later. For instance:

```js
let name = "ahmad";
name = "mahmood";
console.log(name); // mahmood
```

## 2. const

Once a value is assigned, you cannot change the value, and the value must be assigned during initialization:

```js
const name = "ahmad";
// name = "mahmood"; // Error
console.log(name); // ahmad
```

## 3. var

It is a general case of both let and const. You can re-assign values to a variable:

```js
var name = "ahmad";
name = "mahmood";
console.log(name); // mahmood
```

It is your choice, whichever you prefer.
