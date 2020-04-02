import React from "react";

import CharacterProfile from "./CharacterProfile";
import AbilityScores from "./AbilityScores";
import ProficiencyScore from "./ProficiencyScore";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import StatBlock from "./StatBlock";
import Weapons from "./Weapons";
import Armour from "./Armour";
import Items from "./Items";
import SpellsAbilities from "./SpellsAbilities";
import Proficiencies from "./Proficiencies";

import "./CharacterSheet.css";

import logo from "../../images/logo_small.png";

const CharacterSheet = () => {

  return (
    <div className="content">
        <div className="character_sheet">
            <CharacterProfile />
            <div className="character_sheet_main_section">
                <div className="character_sheet_column">
                    <AbilityScores />
                </div>
                <div className="character_sheet_column">
                    <ProficiencyScore />
                    <SavingThrows />
                    <Skills />
                </div>
                <div className="character_sheet_column">
                    <StatBlock />
                    <div className="equipment">
                        <Weapons />
                        <Armour />
                        <Items />
                    </div>
                    <div className="proficiencies">
                        <SpellsAbilities />
                        <Proficiencies />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CharacterSheet;