import React from "react";
import GithubChooseOrg from "./GithubChooseOrg";
import GithubChoosePlayer from "./GithubChoosePlayer";
import getGithubData from "../utils/getGithubData";

const LoginContainer = () => {
  const [organisation, setOrganisation] = React.useState(null);
  const [team, setTeam] = React.useState(null);

  const [user, setUser] = React.useState(null);

  const userData = getGithubData("FAC18", "students").then(console.log);
  // console.log(userData);

  return (
    <section>
      <GithubChooseOrg setOrganisation={setOrganisation} setTeam={setTeam} />
      <GithubChoosePlayer users={userData} setUser={setUser} />
    </section>
  );
};

export default LoginContainer;
