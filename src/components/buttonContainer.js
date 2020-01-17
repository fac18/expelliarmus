import React from "react";
import Button from "./button";
import './button.css'

const ButtonContainer = ({
  turnCounter,
  setTurnCounter,
  setMostRecentMove,
  gameOver
}) => {
  return (
    <div className="button-container">
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
