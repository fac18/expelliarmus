import React from "react";

const Button = ({ points, currentSpell, text, turnCounter, setTurnCounter }) => {
  return (
    <button
      onClick={() => {
        console.log({ currentSpell })
        setTurnCounter(turnCounter + 1);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
