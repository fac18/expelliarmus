import React from "react";
import Button from "./button";

const ButtonContainer = ({
  currentSpell,
  turnCounter,
  setTurnCounter,
  setMostRecentMove,
  setHealthPlayer1,
  setHealthPlayer2
}) => {
  return (
    <div>
      <Button
        currentSpell={currentSpell}
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        setMostRecentMove={setMostRecentMove}
        text="Cast Spell"
      ></Button>
      <Button
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        setMostRecentMove={setMostRecentMove}
        text="Eat Chocolate Frog"
      ></Button>
    </div>
  );
};

export default ButtonContainer;
