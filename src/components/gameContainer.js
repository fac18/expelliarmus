import React from "react";
import Player from "./player";
import getSpellsData from "../utils/getSpellsData";
import TextOverlay from "./textOverlay";
import ButtonContainer from "./buttonContainer";

//user is an object which contains the github login and the avatar url
const GameContainer = ({ user }) => {
  const [healthPlayer1, setHealthPlayer1] = React.useState(70);

  const [healthPlayer2, setHealthPlayer2] = React.useState(70);

  const [spellsData, setSpellsData] = React.useState(null);

  const [currentSpell, setCurrentSpell] = React.useState(null);

  React.useEffect(() => {
    getSpellsData().then(res => setSpellsData(res));
  }, []);

  React.useEffect(() => {
    if (spellsData) {
      const randomSpellIndex = Math.floor(Math.random() * spellsData.length);
      setCurrentSpell(spellsData[randomSpellIndex].spell);
    }
  }, [spellsData]);

  console.log({ currentSpell });

  return (
    <section>
      <div>
        <Player user={user} health={healthPlayer1} />
        <Player
          user={{ login: "DummyUser", avatar_url: "url" }}
          health={healthPlayer2}
        />
      </div>
      <ButtonContainer currentSpell={currentSpell} />
    </section>
  );
};

export default GameContainer;
