import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import LoginContainer from "./components/loginContainer";
import GameContainer from "./components/gameContainer";

function App() {
  const [user1, setUser1] = React.useState(null);
  const [user2, setUser2] = React.useState(null);

  //when users have been selected, change to game background
  if (user1 && user2) {
    document.body.style.backgroundImage =
      "url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Hogwarts-Castle-Background.jpg)";
  }

  return (
    <div>
      <Header />
      {user1 && user2 ? (
        <GameContainer user1={user1} user2={user2} />
      ) : (
        <LoginContainer
          user1={user1}
          setUser1={setUser1}
          user2={user2}
          setUser2={setUser2}
        />
      )}
    </div>
  );
}

export default App;
