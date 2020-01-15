import React from "react";

const GithubUser = ({ name, avatar_url }) => {
  return (
    <li>
      <h3>{name}</h3>
      <img src={avatar_url} />
    </li>
  );
};

export default GithubUser;
