import React from "react";
import Player from "./player";
import getSpellsData from "../utils/getSpellsData";
import TextOverlay from "./textOverlay";
import ButtonContainer from "./buttonContainer";
import { clearConfigCache } from "prettier";

//user is an object which contains the github login and the avatar url
const GameContainer = ({ user }) => {
  const [healthPlayer1, setHealthPlayer1] = React.useState(70);
  const [healthPlayer2, setHealthPlayer2] = React.useState(70);

  const [spellsData, setSpellsData] = React.useState(null);
  const [currentSpell, setCurrentSpell] = React.useState(null);

  const [turnCounter, setTurnCounter] = React.useState(1);
  const [mostRecentMove, setMostRecentMove] = React.useState(null);

  const [gameOver, setGameOver] = React.useState(false);

  console.log({ mostRecentMove });

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

  //rerun every turn
  React.useEffect(() => {
    if (spellsData) {
      const randomSpellIndex = Math.floor(Math.random() * spellsData.length);
      setCurrentSpell(spellsData[randomSpellIndex].spell);
    }

    const spellPoints = Math.floor(Math.random() * -40);

    const healthPointsChange =
      mostRecentMove === "Cast Spell" ? spellPoints : 10;

    if (turnCounter == 1) {
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

      console.log({ healthPlayer1, healthPlayer2 });

      //check if game is over
      if (healthPlayer1 <= 0 || healthPlayer2 <= 0) {
        setGameOver(true);
      }
    }
  }, [turnCounter]);

  return (
    <section>
      {gameOver ? <TextOverlay text="GAME OVER" /> : null}
      <div>
        <h3 className="action-text">
          {mostRecentMove === null
            ? ""
            : mostRecentMove === "Cast Spell"
            ? currentSpell
            : "Ate a chocolate frog!!!"}
        </h3>
        <Player user={user} health={healthPlayer1} />
        <Player
          user={{ login: "DummyUser", avatar_url: "url" }}
          health={healthPlayer2}
        />
      </div>
      <ButtonContainer
        currentSpell={currentSpell}
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
        setMostRecentMove={setMostRecentMove}
      />
    </section>
  );
};

export default GameContainer;
