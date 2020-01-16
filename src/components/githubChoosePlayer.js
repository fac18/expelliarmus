import React from "react";
import GithubUser from "./GithubUser";

const GithubChoosePlayer = ({ allUsers }) => {
  return allUsers ? (
    <ul>
      {allUsers.map(user => (
        <GithubUser key={user.login} login={user.login} avatar_url={user.avatar_url} /> // unique key required for top-level element to track its place
      ))}
    </ul>
  ) : null; // return null, if no data
};

export default GithubChoosePlayer;
