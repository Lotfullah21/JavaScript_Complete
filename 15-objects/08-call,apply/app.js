const counter = {
	count: 0,
	increment: function () {
		console.log(this);
		this.count += 1;
		console.log(this.count);
	},

	decrement() {
		console.log(this);
		this.count += 1;
		console.log(this.count);
	},
};

const btn = document.querySelector(".btn");

// We are pointing the inc function to the button which is wrong, it should points to counter.
// btn.addEventListener("click", counter.increment);

// the given code will work, but without reference, we cannot remove this event listener.
// btn.addEventListener("click", counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
