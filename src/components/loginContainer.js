import React from "react";
import GithubChooseOrg from "./githubChooseOrg";
import GithubChoosePlayer from "./githubChoosePlayer";

const LoginContainer = () => {
  const [organisation, setOrganisation] = React.useState(null);
  const [team, setTeam] = React.useState(null);

  const [user, setUser] = React.useState(null);

  const data = [];

  return (
    <section>
      <GithubChooseOrg setOrganisation={setOrganisation} setTeam={setTeam} />
      <GithubChoosePlayer users={data} setUser={setUser} />
    </section>
  );
};

export default LoginContainer;
