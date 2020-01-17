import React from "react";
import "./githubUser.css";

const GithubUser = ({ login, avatar_url, setUser }) => {
  return (
    <li
      onClick={event => {
        setUser({ login, avatar_url });
        // event.target.classList.add("user-selected");
      }}
    >
      <h3>{login}</h3>
      <img src={avatar_url} alt="selected github user" />
    </li>
  );
};

export default GithubUser;
