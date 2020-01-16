import React from "react";
import Button from "./button";

const ButtonContainer = ({ currentSpell }) => {
  return (
    <div>
      <Button
        points={-10}
        currentSpell={currentSpell}
        text="Cast Spell"
      ></Button>
      <Button points={5} text="Eat Chocolate Frog"></Button>
    </div>
  );
};

export default ButtonContainer;
