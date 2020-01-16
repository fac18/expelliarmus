import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import LoginContainer from "./components/LoginContainer";
import GameContainer from "./components/GameContainer";

function App() {
  const [user, setUser] = React.useState(null);
  console.log(user);

  return (
    <div>
      <Header />
      {user ? (
        <GameContainer user={user} />
      ) : (
        <LoginContainer user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
