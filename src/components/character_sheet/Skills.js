import React from "react";
import SectionTitle from "./SectionTitle";
import { getAbilityScoreBonus, formatBonus, abilityScoreFullNames } from "../../utils/utils";

const Skills = ({character}) => {

  return (
    <div className="section_container">

      <SectionTitle number="4" title="Skills" />

      <div className="skills">
      {
          Object.keys(character.skillProficiencies).map(ability => {

            let isProficient = character.skillProficiencies[ability];
            let savingThrowBonus = getAbilityScoreBonus(12);

            if (isProficient)
              { savingThrowBonus += character.proficiencyBonus; }

            return (
              <div className="proficiency_info">
                <p className="saving_throw_bonus">{formatBonus(savingThrowBonus)}</p>
                <div className={"proficiencyCircle " + (isProficient ? "proficient" : "")}></div>
                <p className="saving_throw_name">{ability}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default Skills;