import React from "react";
import getGithubData from "../utils/getGithubData";
import './button';

const ChooseOrg = ({
  organisation,
  setOrganisation,
  team,
  setTeam,
  setAllUsers
}) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        getGithubData(organisation, team).then(res => setAllUsers(res));
      }}
    >
      <fieldset>
        <legend>Enter your Github Organisation and Team</legend>
        <label htmlFor="organisation-input">Organisation</label>
        <input
          type="text"
          className="github-input"
          id="organisation-input"
          value={organisation}
          placeholder="e.g. foundersandcoders"
          onChange={event => setOrganisation(event.target.value)}
          required
        ></input>
        <label htmlFor="team-input">Team</label>
        <input
          type="text"
          className="github-input"
          id="team-input"
          value={team}
          placeholder="e.g. FAC18"
          onChange={event => setTeam(event.target.value)}
          required
        ></input>
        <input type="submit" value="Submit" className="submit-button"></input>
      </fieldset>
    </form>
  );
};

export default ChooseOrg;
