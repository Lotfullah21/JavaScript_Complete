const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	console.log(this);
	this.style.color = "red";
});

// The above code will give error, because this is pointing to global scope and that is window object which does not have anything to do with style.
// Here, we can use regular functions

btn.addEventListener("click", function () {
	console.log(this);
	this.style.color = "red";
});

// Now, in the above snippet, it will points to button.
btn.addEventListener("click", function () {
	console.log(this);
	setTimeout(function () {
		this.style.color = "red";
	});
});

// Event Listeners: When you attach a function to an event listener using addEventListener, the this keyword inside the callback function refers to the element the event is attached to. In this case, it's the btn element.
