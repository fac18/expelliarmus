import React from "react";

const GithubUser = ({ login, avatar_url, setUser }) => {
  return (
    <li
      onClick={() => {
        setUser({ login, avatar_url });
      }}
    >
      <h3>{login}</h3>
      <img src={avatar_url} />
    </li>
  );
};

export default GithubUser;
