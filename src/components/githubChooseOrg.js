import React from "react";

const ChooseOrg = ({ organisation, setOrganisation, team, setTeam }) => {
  return (
    <fieldset>
      <legend>Enter your Github Organisation and Team</legend>
      <label>Organisation</label>
      <input
        type="text"
        className="github-input"
        value={organisation}
        onChange={event => setOrganisation(event.target.value)}
        required
      ></input>
      <label>Team</label>
      <input
        type="text"
        className="github-input"
        value={team}
        onChange={event => setTeam(event.target.value)}
        required
      ></input>
      <button>Submit</button>
    </fieldset>
  );
};

export default ChooseOrg;
