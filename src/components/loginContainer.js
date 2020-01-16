import React from "react";
import GithubChooseOrg from "./GithubChooseOrg";
import GithubChoosePlayer from "./GithubChoosePlayer";
import getGithubData from "../utils/getGithubData";

const LoginContainer = () => {
  const [organisation, setOrganisation] = React.useState(null);
  const [team, setTeam] = React.useState(null);

  const [allUsers, setAllUsers] = React.useState(null);

  const [user, setUser] = React.useState(null);

  getGithubData("FAC18", "students").then(res => setAllUsers(res));

  return (
    <section>
      <GithubChooseOrg setOrganisation={setOrganisation} setTeam={setTeam} />
      <GithubChoosePlayer allUsers={allUsers} setUser={setUser} />
    </section>
  );
};

export default LoginContainer;
