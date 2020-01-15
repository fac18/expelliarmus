import React from "react";

const ChooseOrg = () => {
  return (
    <fieldset>
      <legend>Enter your Github Organisation and Team</legend>
      <label>Organisation</label>
      <input type="text" className="github-input" required></input>
      <label>Team</label>
      <input type="text" className="github-input" required></input>
      <button>Submit</button>
    </fieldset>
  );
};

export default ChooseOrg;
