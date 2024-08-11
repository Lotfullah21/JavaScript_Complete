# Data Types

Each piece of information has a different value and all values are called data.

But values are different and needs to be stored differently.

in JavaScript, data types are typically categorized into two main kinds:

## 1. Primitive Data Types

Primitive data types are the basic data types that are not objects and have no methods. They are immutable, meaning their values cannot be changed once created. The primitive data types in JavaScript are:

- `Number`: Represents numeric values.
- `String`: Represents sequences of characters.
- `Boolean`: Represents a logical entity that can be either true or false.
- `Undefined`: Represents a variable that has been declared but not yet assigned a value, javascript cannot find the value for this.
  - Examples: variables without values, missing object properties, missing function arguments.
- `Null`: Represents the intentional absence of any object value, for instance, the developer sets this value to null.
- `Symbol`: Represents a unique and immutable value used as object property keys. 2. Non-Primitive Data Types

When declaring numbers in JavaScript, you do not declare the type (whether it be a decimal or an integer); JavaScript will figure that out. You can perform -, \*, / operations on two strings that have numeric values. However, for addition, it would be concatenation.

## 2. Non-primitive data types:

They are also known as reference types, are objects that can hold collections of values and more complex entities. They are mutable, meaning their content can be changed. The primary non-primitive data types are:

### 1. Object:

Represents a collection of key-value pairs, where values can be of any type. Objects can be created using object literals ({}) or using the `new` keyword and a constructor function.

### 2. Array:

A special type of object that represents an ordered list of values, which can be of any type. Arrays are created using square brackets ([]). For example: [1, 2, 3], ['apple', 'banana', 'orange'].

### 3. Function:

A type of object that represents a reusable block of code. Functions in JavaScript are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

### 4. Falsy and Truthy

All values except "", ' ', 0, -0, NaN, undefined, false, and null are truthy, meaning they will evaluate to true in a boolean context.

```js
let a = 3290n;
```

the n suffix in 3290n denotes a BigInt literal. The BigInt type is used for representing and working with large integers that are beyond the range of the standard Number type.

## Null vs Undefined

Null is something that is set by us, but undefined value is something that is set by javascript.

```js
var num1 = 10;
console.log(num1 + null); // 10+0 = 10
var num1 = 10;
console.log(num1 + undefined); // Nan
```
