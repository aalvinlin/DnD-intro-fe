import React from "react";

import logo from "../../images/logo_small.png";

const CharacterProfile = ({character}) => {

  return (
    <div className="character_profile">
        <img src={logo} alt="Character Portrait" className="portrait" />
        <div className="character_profile_text">
          <p className="character_name">{character.profile.name} ({character.player})</p>
          <p className="character_class_race_level">{character.profile.race} {character.profile.class}, level {character.profile.level}</p>
          <p className="exp">{character.profile.exp} exp</p>
        </div>
    </div>
  );
}

export default CharacterProfile;