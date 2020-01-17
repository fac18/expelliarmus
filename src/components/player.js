import React from "react";
import PlayerStats from "./playerStats";
import './player';

const Player = ({ user, health }) => {
  return (
    <div className="player-stats">
      <PlayerStats health={health}/>
      <p className="player">{user.login}</p>
      <img src={user.avatar_url} alt="player"  className="player-avatar"></img>
    </div>
  );
};

export default Player;
