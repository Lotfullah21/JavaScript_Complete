## >Spread syntax(...)

Allows an iterable to expand/spread individually inside the receiver.

It allows iterables like array or strings to be expanded,so that they can be used later in functions as arguments and in arrays as elements.

we are not referencing to the elements which would cause mutating the original values,but to copy them.

It splits the items into single single items, if it is a string, that will be separated into letters if it is an array, that will be divide into elements.

One of the main usage of spread operator is changing a list or strings into an array, which we can apply all the array methods on them.

For instance, we can combine few arrays into a single array, due to using spread operator, which split an array into its individual items.
