import React from "react";
import Button from "./button";

const ButtonContainer = ({
  turnCounter,
  setTurnCounter,
  setMostRecentMove,
  gameOver
}) => {
  return (
    <div>
      <Button
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        setMostRecentMove={setMostRecentMove}
        gameOver={gameOver}
        text="Cast Spell"
      ></Button>
      <Button
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        setMostRecentMove={setMostRecentMove}
        gameOver={gameOver}
        text="Eat Chocolate Frog"
      ></Button>
    </div>
  );
};

export default ButtonContainer;
