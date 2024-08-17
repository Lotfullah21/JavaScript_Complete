const promise = new Promise((resolve, reject) => {
	value = 2;
	if (value) {
		resolve("promise resolved,Congratulations !!!!!");
	}
	reject("OOPs,Promised denied as you did not wanted");
});

promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});
