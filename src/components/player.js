import React from "react";
import PlayerStats from "./PlayerStats";

const Player = ({ user }) => {
  return (
    <div>
      <PlayerStats />
      <p>My name is {user.login}</p>
      <img src={user.avatar_url}></img>
    </div>
  );
};

export default Player;
