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
    <div className="section_container">
      
      <div className="section_title_container">
          <div className="number">1</div>
          <h2 className="section_title">Ability Scores</h2>
      </div>

      <div className="ability_scores">

          {Object.keys(character.abilityScores).map(ability => {

            let abilityScore = character.abilityScores[ability];
            let bonus = getBonusFormatted(abilityScore);

            return (
              <div className="ability_score_container">
                <h3 className="full_name">{fullNames[ability]}</h3>
                <div className="ability_score">
                  <p className="bonus">{bonus}</p>
                  <p className="value">({abilityScore})</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default AbilityScores;