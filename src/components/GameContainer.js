import React from "react";
import Player from "./Player";
import TextOverlay from "./TextOverlay";

//user is an object which contains the github login and the avatar url
const GameContainer = ({ user }) => {
  return (
    <section>
      <Player user={user} />
      <Player user={{ login: "DummyUser", avatar_url: "url" }} />
    </section>
  );
};

export default GameContainer;
