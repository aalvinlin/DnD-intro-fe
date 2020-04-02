// find the bonus associated with an ability score
// returns an integer so that the result can be added to other modifiers
export const getAbilityScoreBonus = (abilityScore) => {
    return Math.floor((abilityScore - 10) / 2);
}

// formats an integer, adding a "+" sign if positive
// negative and zero stay the same
export const formatBonus = (bonus) => {
    if (bonus > 0)
        { return "+" + bonus; }
    else
        { return bonus; }
}

export const abilityScoreFullNames = {
    "str": "Strength",
    "dex": "Dexterity",
    "con": "Constitution",
    "int": "Intelligence",
    "wis": "Wisdom",
    "cha": "Charisma"
  };
