const url = "https://randomuser.me/api/?nat=in";

const getUser = async () => {
	const response = await fetch(url);
	const data = await response.json();
	const person = data.results[0];
	const {
		dob: { age, date },
		email,
		gender,
		location,
		login,
		nat,
		picture,
		name,
		phone,
	} = person;
	const { street, city, state } = location;
	const { number } = street;
	const { title, first, last } = name;
	const { large } = picture;
	const { password } = login;
	console.log(person);
	return {
		img: large,
		name: `${title} ${first} ${last}`,
		email,
		age,
		address: `${number} ${city} ${state}`,
		phone,
		password,
	};
};

export default getUser;
