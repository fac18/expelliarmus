import React from "react";

const GithubUser = ({ login, avatar_url }) => {
  return (
    <li>
      <h3>{login}</h3>
      <img src={avatar_url}/>
    </li>
  );
};

export default GithubUser;
