const myPromise = new Promise((resolve, reject) => {
	// Simulate an asynchronous operation
	const success = false;
	if (success) {
		resolve("The operation was successful!");
	} else {
		reject("The operation failed.");
	}
});

myPromise
	.then((resolvedValue) => {
		console.log(resolvedValue);
	})
	.catch((rejectedValue) => {
		console.log(rejectedValue);
	});
