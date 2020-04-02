import React from "react";
import SectionTitle from "./SectionTitle";
import { getAbilityScoreBonus, formatBonus } from "../../utils/utils";

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
      
      <SectionTitle number="1" title="Ability Scores" />

      <div className="ability_scores">

          {Object.keys(character.abilityScores).map(ability => {

            let abilityScore = character.abilityScores[ability];
            let bonus = formatBonus(getAbilityScoreBonus(abilityScore));

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