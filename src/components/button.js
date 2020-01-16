import React from "react";

const Button = ({
  currentSpell,
  text,
  turnCounter,
  setTurnCounter,
  setMostRecentMove
}) => {
  return (
    <button
      onClick={() => {
        console.log({ currentSpell });
        setMostRecentMove(text);
        setTurnCounter(turnCounter + 1);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
