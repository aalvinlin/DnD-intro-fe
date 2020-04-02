import React from "react";
import SectionTitle from "./SectionTitle";

const ProficiencyBonus = ({character}) => {

  return (
    <div className="section_container">
        
        <SectionTitle number="2" title="Proficiency Bonus" />

        <div className="proficiency_bonus placeholder">
        
        </div>

    </div>
  );
}

export default ProficiencyBonus;