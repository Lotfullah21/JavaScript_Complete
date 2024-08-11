# String

Sequence of characters are known as strings.

Every time we create a string, javascript create a wrapper object, a wrapper object is an object that is created to wrap a primitive value.
The wrapper objects provide methods and properties that allow you to perform operations on the wrapped primitive values.

\*/

## Methods

### 1. charAt(idx)

It gives the element present at the given index.
If nothing present there, it will give an empty string.

```js
string.charAt(idx);

name = "Ahmad";
console.log(name.chartAt(0)); // A
```

### 2. toLowerCase and toUpperCase

It converts our string to upper or lower case.

```js
string.toLowerCase();
string.upperCase();

const name = "Ahmad";
console.log(name.toUpperCase()); // AHMAD
console.log(name.toLowerCase()); // ahmad
```

### 3. indexOf(char)

Returns the index of the given character in our string, if it does not exist, it will return -1.

```js
string.indexOf(char);

const name = "Ahmad";
console.log(name.indexOf("a"));
```

### 4. trim()

It removes the empty spaces from the beginning and end of our string.

```js
string.trim();
const name = " Ahmad ";
console.log(name.trim()); // Ahmad
```

### 4. slice(start_idx, end_idx)

It returns a new string from the original string, including starting index and excluding the ending index.
In JavaScript, the slice() method is used to extract a portion of an array or a string and returns a new array or string containing the extracted elements.
slice returns the grabbed elements of the string.

```js
const message = "Hello people";
console.log(message.slice(0, 2));
```

# Note:

if you are working with strings that involve characters specific to a particular language or region, or if you want to ensure proper case conversion based on the user's locale, `toLocaleLowerCase()`.

## Template Literals

Using ``, we can create template literals which is much easier than using +.
We will be adding the variable names or expressions inside `${expression}`

```js
const info = "Hello, I am " + name + "and I am " + age + " years old";
console.log(info);

const tempLiterals = `Hello, I am ${name} and I am ${age} years old`;
console.log(tempLiterals);
```
