const rent = [100, 120, 130, 140, 200, 30];
const notes = [2, 30, 30, 30, 5, 5, 1];

function totalCost(prices) {
	var total = 0;
	for (var i = 0; i < prices.length; i++) {
		total = total + prices[i];
	}
	return total;
}

totalRent = totalCost(rent);
totalNotes = totalCost(notes);

console.log({
	rent: totalRent,
	notes: totalNotes,
});
