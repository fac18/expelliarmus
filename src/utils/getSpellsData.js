import { tokens } from "../token";

const checkResponse = res => {
  if (res.status !== 200) {
    console.log(`error with the request! ${res.status}`);
    return;
  }
  return res;
};

const getSpellsData = () => {
  const spells = fetch(
    `https://www.potterapi.com/v1/spells?key=${tokens.hp_token}`
  )
    .then(checkResponse)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(`fetch spells failed ${err}`);
    });

  // returns an array of objects for each spell

  return spells;
};

export default getSpellsData;
