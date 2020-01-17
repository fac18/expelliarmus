import React from "react";
import GithubUser from "./githubUser";
import "./githubChoosePlayer.css";

const GithubChoosePlayer = ({ allUsers, setUser1, setUser2 }) => {
  return allUsers ? (
    <section>
      <h3>Choose Player 1</h3>
      <ul id="userList1">
        {allUsers.map(user => (
          <GithubUser
            key={user.login}
            login={user.login}
            avatar_url={user.avatar_url}
            setUser={setUser1}
          /> // unique key required for top-level element to track its place
        ))}
      </ul>
      <h3>Choose Player 2</h3>
      <ul id="userList2">
        {allUsers.map(user => (
          <GithubUser
            key={user.login}
            login={user.login}
            avatar_url={user.avatar_url}
            setUser={setUser2}
          /> // unique key required for top-level element to track its place
        ))}
      </ul>
    </section>
  ) : null; // return null, if no data
};

export default GithubChoosePlayer;
