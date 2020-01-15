import React, { useImperativeHandle } from "react";
import GithubUser from "./GithubUser";

const GithubChoosePlayer = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <GithubUser name={user.name} avatar_url={user.avatar_url} />
      ))}
    </ul>
  );
};

export default GithubChoosePlayer;
