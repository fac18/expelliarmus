import React from "react";

const PlayerStats = ({health}) => {
  return <progress max="100" value={health}></progress>;
};

export default PlayerStats;
