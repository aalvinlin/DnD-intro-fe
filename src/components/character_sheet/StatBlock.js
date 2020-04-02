import React from "react";
import SectionTitle from "./SectionTitle";

const StatBlock = ({character}) => {

  return (
      <div className="section_container">

        <SectionTitle number="5" title="Vital Stats" />

        <div className="stat_block placeholder">

        </div>

    </div>
  );
}

export default StatBlock;