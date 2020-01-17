import React from "react";
import Button from "./button";

const ButtonContainer = ({
  turnCounter,
  setTurnCounter,
  setMostRecentMove,
  gameOver,
  setGameOver,
  setHealthPlayer1,
  setHealthPlayer2
}) => {
  return (
    <div>
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
      {gameOver ? (
        <button
          onClick={() => {
            setTurnCounter(1);
            setHealthPlayer1(70);
            setHealthPlayer2(70);
            setGameOver(false);
          }}
        >
          Play again?
        </button>
      ) : null}
    </div>
  );
};

export default ButtonContainer;
