fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

fetch(url)
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
