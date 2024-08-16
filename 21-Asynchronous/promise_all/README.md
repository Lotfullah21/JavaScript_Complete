we use promise.all() if we want all of the promises to be fulfilled,which means succeed, if any of them reject the promise, then the code will execute the catch block.

we use promise.any() if we do not care about all of the promises to be fulfilled, even with one of the promises cause to succeed we can call the succeed call back
