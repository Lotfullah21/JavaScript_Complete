const hooshmandlab = {
	name: "Hooshmandlab",
	area: "Computer Science and technology",
	subjects: ["Artificial intelligence", "Python"],
	details: {
		name: "hooshmandlab",
		info: {
			address: "on the cloud",
			founder: "Lotfullah Andishmand",
		},
	},
	"random-value": "random",
};

console.log(hooshmandlab.details.info.address);
console.log(hooshmandlab["details"]["info"]["address"]);
