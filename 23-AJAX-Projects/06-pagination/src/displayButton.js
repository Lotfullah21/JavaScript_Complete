const displayButtons = (container, pages, activeIdx) => {
	let btns = pages.map((item, pageIdx) => {
		return `<button class="page-btn ${
			activeIdx === pageIdx ? "active-btn" : "null"
		}" data-index=${pageIdx}>${pageIdx + 1}</button>`;
	});
	console.log(btns);
	// Our btns is still an array
	btns.push(`<button class="next-btn">next</button>`);
	btns.unshift(`<button class="prev-btn">prev</button>`);
	console.log("After adding btns", btns);
	container.innerHTML = btns.join("");
};

export default displayButtons;
