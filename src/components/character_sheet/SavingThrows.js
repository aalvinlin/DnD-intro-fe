import React from "react";
import SectionTitle from "./SectionTitle";

import { getAbilityScoreBonus, formatBonus, abilityScoreFullNames } from "../../utils/utils";

const SavingThrows = ({character}) => {

  return (
    <div className="section_container">

      <SectionTitle number="3" title="Saving Throws" />

      <div className="saving_throws placeholder">

        {
          Object.keys(character.savingThrowProficiencies).map(ability => {

            let isProficient = character.savingThrowProficiencies[ability];
            let savingThrowBonus = getAbilityScoreBonus(character.abilityScores[ability]);

            if (isProficient)
              { savingThrowBonus += character.proficiencyBonus; }

            return (
              <div className="proficiency_info">
                <p className="bonus">{formatBonus(savingThrowBonus)}</p>
                <div className={"proficiencyCircle " + (isProficient ? "proficient" : "")}></div>
                <p>{abilityScoreFullNames[ability]}</p>
              </div>
            )
          })
        }

      </div>

    </div>
  );
}

export default SavingThrows;