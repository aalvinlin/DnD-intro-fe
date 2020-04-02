import React from "react";

import CharacterProfile from "./CharacterProfile";
import AbilityScores from "./AbilityScores";
import ProficiencyBonus from "./ProficiencyBonus";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import StatBlock from "./StatBlock";
import Equipment from "./Equipment";
import Abilities from "./Abilities";

// import Weapons from "./Weapons";
// import Armour from "./Armour";
// import Items from "./Items";
// import SpellsAbilities from "./SpellsAbilities";
// import Proficiencies from "./Proficiencies";

import "./CharacterSheet.css";

import sampleCharacter from "../../data/sampleCharacter";

const CharacterSheet = () => {

  return (
    <div className="content">
        <div className="character_sheet">
            <CharacterProfile character={sampleCharacter} />
            <div className="character_sheet_main_section">
                <div className="character_sheet_column">
                    <AbilityScores character={sampleCharacter} />
                </div>
                <div className="character_sheet_column">
                    <ProficiencyBonus character={sampleCharacter} />
                    <SavingThrows character={sampleCharacter} />
                    <Skills character={sampleCharacter} />
                </div>
                <div className="character_sheet_column">
                    <StatBlock character={sampleCharacter} />
                    <Equipment character={sampleCharacter} />
                    <Abilities character={sampleCharacter} />
                    
                    {/* <div className="equipment">
                        <Weapons character={sampleCharacter} />
                        <Armour character={sampleCharacter} />
                        <Items character={sampleCharacter} />
                    </div>
                    <div className="proficiencies">
                        <SpellsAbilities character={sampleCharacter} />
                        <Proficiencies character={sampleCharacter} />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default CharacterSheet;