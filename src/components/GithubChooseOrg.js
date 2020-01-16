import React from "react";
import getGithubData from "../utils/getGithubData";

const ChooseOrg = ({
  organisation,
  setOrganisation,
  team,
  setTeam,
  setAllUsers
}) => {
  return (
    <fieldset>
      <legend>Enter your Github Organisation and Team</legend>
      <label htmlFor="organisation-input">Organisation</label>
      <input
        type="text"
        className="github-input"
        id="organisation-input"
        value={organisation}
        onChange={event => setOrganisation(event.target.value)}
        required
      ></input>
      <label htmlFor="team-input">Team</label>
      <input
        type="text"
        className="github-input"
        id="team-input"
        value={team}
        onChange={event => setTeam(event.target.value)}
        required
      ></input>
      <button
        onClick={() => {
          getGithubData(organisation, team).then(res => setAllUsers(res));
        }}
      >
        Submit
      </button>
    </fieldset>
  );
};

export default ChooseOrg;
