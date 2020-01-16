import React from "react";
import Player from "./player";
import getSpellsData from "../utils/getSpellsData";
import TextOverlay from "./textOverlay";

//user is an object which contains the github login and the avatar url
const GameContainer = ({ user }) => {

  const [healthPlayer1, setHealthPlayer1] = React.useState(70);

  const [healthPlayer2, setHealthPlayer2] = React.useState(70);

  const [spellsData, setSpellsData] = React.useState(null);

  React.useEffect(() => {
    getSpellsData().then(res => setSpellsData(res))
  }, []);

  console.log(spellsData);

  return (
    <section>
      <Player user={user} health={healthPlayer1} />
      <Player user={{ login: "DummyUser", avatar_url: "url" }} health={healthPlayer2} />
    </section>
  );
};

export default GameContainer;
