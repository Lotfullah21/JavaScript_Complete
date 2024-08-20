const paginate = (people) => {
	const itemsPerPage = 10;
	const pages = Math.ceil(people.length / 10);
	const followersChunks = Array.from({ length: pages }, (_, idx) => {
		const startIdx = idx * itemsPerPage;
		return people.slice(startIdx, startIdx + itemsPerPage);
	});
	// console.log("people", pages);
	return followersChunks;
};

export default paginate;
