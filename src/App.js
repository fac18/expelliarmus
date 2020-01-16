import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginContainer from "./components/LoginContainer";
import GameContainer from "./components/GameContainer";

function App() {
  const [user, setUser] = React.useState(null);

  return user ? (
    <GameContainer user={user} />
  ) : (
    <LoginContainer user={user} setUser={setUser} />
  );
}

export default App;
