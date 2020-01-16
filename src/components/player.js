import React from "react";
import PlayerStats from "./playerStats";

const Player = ({ user, health }) => {
  return (
    <div>
      <PlayerStats health={health}/>
      <p>My name is {user.login}</p>
      <img src={user.avatar_url}></img>
    </div>
  );
};

export default Player;
