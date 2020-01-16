import React from "react";

const Button = ({ points, currentSpell, text }) => {
  return (
    <button
      onClick={() => {
        console.log({ currentSpell });
      }}
    >
      {text}
    </button>
  );
};

export default Button;
