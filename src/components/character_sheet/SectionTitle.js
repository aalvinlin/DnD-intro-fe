import React from "react";

const SectionTitle = ({number, title}) => {

  return (
    <div className="section_title_container">
        <div className="number">{number}</div>
        <h2 className="section_title">{title}</h2>
    </div>
  );
}

export default SectionTitle;


