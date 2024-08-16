## Add and remove to the start of an array

```js
array.shift();
```

This method removes an element from beginning of an array.

```js
array.unshift();
```

It removes an element from the beginning of a list.

## Adding two arrays

### 1. Using +

when we use `+`, the output will be a string.

### 2. Using concat method

It gives an array object.

## Add and remove to and from the end

### 1. push()

It adds an element to the end of an array.

### 2. pop()

It removes an element from the end of a list.

## reverse an array

```js
arr.reverse();
```

reverse a an array, it also changes the original array and make it reversed.

## split()

It converts a string to an array.

```js
string.split(",");
```

## join()

It converts an list to a string

```js
string.join();
```

## splice()

It takes arguments and based on those arguments, removes the elements.
It mutates the original array.
splice remove the specific element out of an array(mutates original array), or we can say it grabs those elements
it takes two parameters, one for starting index, and second how many elements we want to remove

```js
subjects.splice(1, 2); // starting from index one, remove two elements from subjects list
```
