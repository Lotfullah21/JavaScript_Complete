const number = [...document.querySelectorAll(".number")];

const updateCount = (ele) => {
	const value = parseInt(ele.dataset.value);
	const increment = Math.ceil(value / 1000);
	let initialValue = 0;

	const incrementCount = setInterval(() => {
		initialValue += increment;
		if (initialValue > value) {
			ele.textContent = `${value}+`;
			clearInterval(incrementCount);
			return;
		}
		ele.textContent = `${initialValue}`;
	}, 1);
};

number.forEach((item) => {
	updateCount(item);
});
