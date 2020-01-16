import React from "react";
import Button from "./button";

const ButtonContainer = ({ currentSpell, turnCounter, setTurnCounter }) => {
  return (
    <div>
      <Button
        points={-10}
        currentSpell={currentSpell}
        turnCounter={turnCounter} setTurnCounter={setTurnCounter}
        text="Cast Spell"
      ></Button>
      <Button points={5} turnCounter={turnCounter} setTurnCounter={setTurnCounter}
      text="Eat Chocolate Frog"></Button>
    </div>
  );
};

export default ButtonContainer;
