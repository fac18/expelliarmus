import React from "react";
import GithubChooseOrg from "./githubChooseOrg";
import GithubChoosePlayer from "./githubChoosePlayer";
import './loginContainer.css'

const LoginContainer = ({ user1, setUser1, user2, setUser2 }) => {
  const [organisation, setOrganisation] = React.useState(null);
  const [team, setTeam] = React.useState(null);

  const [allUsers, setAllUsers] = React.useState(null);

  return (
    <section>
      <p className="form-instruction">
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
      <GithubChoosePlayer
        allUsers={allUsers}
        setUser1={setUser1}
        setUser2={setUser2}
      />
    </section>
  );
};

export default LoginContainer;
