import {token} from '../../token';

const checkResponse = res => {
    if (res.status !== 200) {
        console.log(`error with the request! ${res.status}`);
        return
    }
    return res.JSON();
}

const getGithubData = async (org, team) => {
    const team_id = await fetch(`https://api.github.com/orgs/${org}/teams/${team}?access_token=${token}`)
        .then(checkResponse)
        .then(res => {
            return res.JSON()
        })
        .catch(err => {
            throw new Error(`fetch team_id failed ${err}`)
        });

    // returns an array of objects for each user. we will be using the keys login and avatar_url 
    const users = await fetch(`https://api.github.com/teams/${team_id}/members?access_token=${token}`) 
        .then(checkResponse)
        .then(res => {
            return res.JSON()
        })
        .catch(err => {
            throw new Error(`fetch users failed ${err}`)
        });
    return users.map(user => ({login: user.login, avatar_url: user.avatar_url}));
};

export default getGithubData;
