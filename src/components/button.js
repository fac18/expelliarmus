import React from "react";
import "./button.css";

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
