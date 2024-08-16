// Array of articles with 'new Date()' instead of strings
let articles = [
	{
		id: 1,
		title: "Machine Learning in Future",
		date: new Date(2012, 0, 14), // January is 0, so this is Jan 14th, 2012
		length: 5,
		content:
			"An overview of how machine learning will impact the future of technology and industries.",
	},
	{
		id: 2,
		title: "The Rise of Quantum Computing",
		date: new Date(2018, 5, 22), // June is 5, so this is June 22nd, 2018
		length: 6,
		content:
			"Exploring the potential of quantum computers to solve complex problems faster than classical computers.",
	},
	{
		id: 3,
		title: "Blockchain Revolution in Finance",
		date: new Date(2020, 2, 10), // March is 2, so this is March 10th, 2020
		length: 4,
		content:
			"A look into how blockchain technology is transforming financial services and banking systems.",
	},
	{
		id: 4,
		title: "Advancements in AI for Healthcare",
		date: new Date(2021, 10, 18), // November is 10, so this is November 18th, 2021
		length: 7,
		content:
			"Discussing the role of artificial intelligence in diagnosing diseases and personalizing treatment plans.",
	},
	{
		id: 5,
		title: "The Future of Renewable Energy",
		date: new Date(2019, 8, 5), // September is 8, so this is September 5th, 2019
		length: 8,
		content:
			"How renewable energy sources like solar and wind are paving the way for sustainable power solutions.",
	},
];
