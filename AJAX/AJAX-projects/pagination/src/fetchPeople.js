const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const me = `https://api.github.com/users/Lotfullah21/following`;
const fetchFollowers = async (username, token) => {
  try {
    const response = await fetch(me, {
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
const accessToken =
  "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";
const githubUsername = "Lotfullah21";

const fetchPoeple = fetchFollowers(githubUsername, accessToken);

export default fetchPoeple;
