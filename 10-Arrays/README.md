## Array

Arrays are one kind of non-primitive data types that allows us to store and access different kind of data types.

## Methods

### 1. arr.length

It returns the length of the array which is the number of elements present inside an array.

## forEach

It does not return a new array.
In forEach method, we pass a callback function.
In two ways we can do this:

- one is directly passing as an anonymous function
- The 2nd way is passing from outside.
- This methods allows us to iterate over an array.

## map

it is method that iterates over the elements of an array.
it returns a new array.
it returns a new array by modifying the original array elements.
we pass a callback or anonymous function.
take this callback function and apply to each element in the array and return me a new array.

## filter

It iterates over the elements of an array
returns a new array
it can change the size of the original array.
it returns an array based on a condition.

## find

it returns a single object and returns the first instance of the match, if no match is found, it will return undefined.

## Reduce

Iterates over an array and uses a call back function.
reduces the values to a single value,which can be a single value,array,object.
it takes two parameters

- First one is `accumulator`: total of all calculations.
- Second one is `current_iteration`: current value/iteration, or the once we are interested in, it is iterator which iterates over every item in our array.

put a default or starter value at the end of the function.

```js
object.reduce(function (acc, currentIteration) {
	// logic
	return acc;
}, 0);
```

0 is default or starter value which we are adding the iterator value in.
and also make sure to return the first parameter.
