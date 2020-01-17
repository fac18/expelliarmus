import React from "react";
import './playerStats';

const PlayerStats = ({health}) => {
  return <progress max="100" value={health}></progress>;
};

export default PlayerStats;
