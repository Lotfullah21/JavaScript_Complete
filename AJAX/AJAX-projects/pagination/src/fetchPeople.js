const url = "https://api.github.com/users/karpathy/followers?per_page=100";
const me = "https://github.com/Lotfullah21?tab=following";
const fetchFollowers = async (username, token) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }
    const following = await response.json();
    return following;
  } catch (error) {
    console.log(error);
  }
};
const accessToken = "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";
const githubUsername = "Lotfullah21";

const fetchPoeple = fetchFollowers(githubUsername, accessToken);

export default fetchPoeple;
