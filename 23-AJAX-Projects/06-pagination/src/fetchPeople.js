const url = "https://api.github.com/users/WeMakeDevs/followers?per_page=100";
const me = "https://github.com/Lotfullah21?tab=following";
const fetchFollowers = async () => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const accessToken = "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";
const githubUsername = "Lotfullah21";

const fetchPeople = fetchFollowers(githubUsername, accessToken);

export default fetchFollowers;
