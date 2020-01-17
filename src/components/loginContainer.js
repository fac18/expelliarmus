import React from "react";
import GithubChooseOrg from "./githubChooseOrg";
import GithubChoosePlayer from "./githubChoosePlayer";
import "./loginContainer.css";

const LoginContainer = ({ user1, setUser1, user2, setUser2 }) => {
  const [organisation, setOrganisation] = React.useState(null);
  const [team, setTeam] = React.useState(null);

  const [allUsers, setAllUsers] = React.useState(null);

  //useEffect for adding class when a user1 is selected
  React.useEffect(() => {
    //lists don't appear until org and team are selected
    if (organisation && team) {
      const userList1 = document.getElementById("userList1");

      //initially userLists have no children and these will error if condition not used
      if (userList1) {
        const userList1Users = userList1.children;

        //this is like a forEach for an HTMLCollection (.children returns an HTMLCollection)
        //it removes any existing selections
        for (let user of userList1Users) {
          user.classList.remove("user-selected");
        }

        if (user1) {
          document
            .getElementsByClassName(user1.login)[0]
            .classList.add("user-selected");
        }
      }
    }
  }, [user1]);

  //for user2
  React.useEffect(() => {
    //lists don't appear until org and team are selected
    if (organisation && team) {
      const userList2 = document.getElementById("userList2");

      //initially userLists have no children and these will error if condition not used
      if (userList2) {
        const userList2Users = userList2.children;

        //this is like a forEach for an HTMLCollection (.children returns an HTMLCollection)
        //it removes any existing selections
        for (let user of userList2Users) {
          user.classList.remove("user-selected");
        }

        if (user2) {
          document
            .getElementsByClassName(user2.login)[1]
            .classList.add("user-selected");
        }
      }
    }
  }, [user2]);

  return (
    <section className="login-container">
      <p className="form-instruction">Welcome to Hogwarts!</p>
      <p>
        {" "}
        Dare to duel to the death? Wands only, no contact.
      </p>
      <GithubChooseOrg
        organisation={organisation}
        setOrganisation={setOrganisation}
        team={team}
        setTeam={setTeam}
        setAllUsers={setAllUsers}
      />
      <GithubChoosePlayer
        allUsers={allUsers}
        setUser1={setUser1}
        setUser2={setUser2}
      />
    </section>
  );
};

export default LoginContainer;
