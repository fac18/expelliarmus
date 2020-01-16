import React from "react";

const Button = ({
  text,
  turnCounter,
  setTurnCounter,
  setMostRecentMove,
  gameOver
}) => {
  return (
    <button
      onClick={() => {
        if (!gameOver) {
          setMostRecentMove(text);
          setTurnCounter(turnCounter + 1);
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
