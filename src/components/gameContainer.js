import React from "react";
import Player from "./player";
import getSpellsData from "../utils/getSpellsData";
import TextOverlay from "./textOverlay";
import ButtonContainer from "./buttonContainer";
import "./gameContainer.css";

//user is an object which contains the github login and the avatar url
const GameContainer = ({ user1, user2 }) => {
  const [healthPlayer1, setHealthPlayer1] = React.useState(70);
  const [healthPlayer2, setHealthPlayer2] = React.useState(70);

  const [spellsData, setSpellsData] = React.useState(null);
  const [currentSpell, setCurrentSpell] = React.useState(null);

  const [turnCounter, setTurnCounter] = React.useState(1);
  const [mostRecentMove, setMostRecentMove] = React.useState(null);

  const [gameOver, setGameOver] = React.useState(false);

  //get all spells
  React.useEffect(() => {
    getSpellsData().then(res => setSpellsData(res));
  }, []);

  //choose a current spell
  React.useEffect(() => {
    if (spellsData) {
      const randomSpellIndex = Math.floor(Math.random() * spellsData.length);
      setCurrentSpell(spellsData[randomSpellIndex].spell);
    }
  }, [spellsData]);

  //rerun every turn: get new spell, calculate effect of previous turn on health
  React.useEffect(() => {
    if (spellsData) {
      const randomSpellIndex = Math.floor(Math.random() * spellsData.length);
      setCurrentSpell(spellsData[randomSpellIndex].spell);
    }

    const spellPoints = Math.floor(Math.random() * -40);

    const healthPointsChange =
      mostRecentMove === "Cast Spell" ? spellPoints : 10;

    if (turnCounter === 1) {
      return;
      //checks if is odd
    } else if (turnCounter % 2 === 1) {
      if (healthPointsChange > 0) {
        setHealthPlayer2(healthPlayer2 + healthPointsChange);
      } else {
        setHealthPlayer1(healthPlayer1 + healthPointsChange);
      }
    } else {
      if (healthPointsChange > 0) {
        setHealthPlayer1(healthPlayer1 + healthPointsChange);
      } else {
        setHealthPlayer2(healthPlayer2 + healthPointsChange);
      }
    }
  }, [turnCounter]);

  //checks if game is over whenever player health changes (in case one was killed)
  React.useEffect(() => {
    if (healthPlayer1 <= 0 || healthPlayer2 <= 0) {
      setGameOver(true);
    }
  }, [healthPlayer1, healthPlayer2]);

  return (
    <section >
      {gameOver ? <TextOverlay text="GAME OVER" /> : null}
      <div>
        <h3 className="action-text">
          {mostRecentMove === null
            ? ""
            : mostRecentMove === "Cast Spell"
            ? currentSpell
            : "Ate a chocolate frog!!!"}
        </h3>
        <div className="players">
          <Player user={user1} health={healthPlayer1} />
          <Player user={user2} health={healthPlayer2} />
        </div>
      </div>
      {gameOver ? null : (
        <p className="player-to-move">
          Player {turnCounter % 2 === 1 ? "1" : "2"} to move
        </p>
      )}
      <div className="button-container">
        <ButtonContainer
          currentSpell={currentSpell}
          turnCounter={turnCounter}
          setTurnCounter={setTurnCounter}
          setMostRecentMove={setMostRecentMove}
          gameOver={gameOver}
          setGameOver={setGameOver}
          setHealthPlayer1={setHealthPlayer1}
          setHealthPlayer2={setHealthPlayer2}
        />
      </div>
    </section>
  );
};

export default GameContainer;
