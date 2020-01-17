import React from "react";
import PlayerStats from "./playerStats";

const Player = ({ user, health }) => {
  return (
    <div>
      <PlayerStats health={health}/>
      <p className="player">{user.login}</p>
      <img src={user.avatar_url} alt="player"></img>
    </div>
  );
};

export default Player;
