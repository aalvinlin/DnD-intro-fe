import React from "react";
import { getBonusFormatted } from "../../utils/utils";

const AbilityScores = ({character}) => {

  let fullNames = {
    "str": "Strength",
    "dex": "Dexterity",
    "con": "Constitution",
    "int": "Intelligence",
    "wis": "Wisdom",
    "cha": "Charisma"
  };

  return (
    <div className="ability_scores">
        {Object.keys(character.abilityScores).map(ability => {

          let abilityScore = character.abilityScores[ability];
          let bonus = getBonusFormatted(abilityScore);

          return (
            <div className="ability_score">
              <h3 className="full_name">{fullNames[ability]}</h3>
              <p className="bonus">{bonus}</p>
              <p className="value">({abilityScore})</p>
            </div>
          )
        })}
    </div>
  );
}

export default AbilityScores;