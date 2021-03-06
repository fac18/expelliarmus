const tokens = {
  gh_token: process.env.REACT_APP_GH_TOKEN,
  hp_token: process.env.REACT_APP_HP_TOKEN
};

const checkResponse = res => {
  if (res.status !== 200) {
    console.log(`error with the request! ${res.status}`);
    return;
  }
  return res;
};

const getGithubData = async (org, team) => {
  const teamData = await fetch(
    `https://api.github.com/orgs/${org}/teams/${team}?access_token=${tokens.gh_token}`
  )
    .then(checkResponse)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(`fetch team_id failed ${err}`);
    });

  const team_id = teamData.id;

  // returns an array of objects for each user. we will be using the keys login and avatar_url
  const users = await fetch(
    `https://api.github.com/teams/${team_id}/members?access_token=${tokens.gh_token}`
  )
    .then(checkResponse)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(`fetch users failed ${err}`);
    });

  return users;
};

export default getGithubData;
