function square(n) {
	for (var i = 1; i < n; i++) {
		var result = i + "x" + `${i}` + "=" + i * i;
		console.log(result);
	}
}
square(10);

