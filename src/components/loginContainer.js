import React from "react";
import GithubChooseOrg from "./githubChooseOrg";
import GithubChoosePlayer from "./githubChoosePlayer";

const LoginContainer = ({ user, setUser }) => {
  const [organisation, setOrganisation] = React.useState(null);
  const [team, setTeam] = React.useState(null);

  const [allUsers, setAllUsers] = React.useState(null);

  return (
    <section>
      <p>
        Welcome to Expelliarmus! With a classmate find your Github user profile
        and duel.... to the death!!
      </p>
      <GithubChooseOrg
        organisation={organisation}
        setOrganisation={setOrganisation}
        team={team}
        setTeam={setTeam}
        setAllUsers={setAllUsers}
      />
      <GithubChoosePlayer allUsers={allUsers} setUser={setUser} />
    </section>
  );
};

export default LoginContainer;
