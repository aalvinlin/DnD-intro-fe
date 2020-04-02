export const getBonus = (abilityScore) => {
    return Math.floor((abilityScore - 10) / 2);
}

export const getBonusFormatted = (abilityScore) => {
    let bonus = getBonus(abilityScore);

    if (bonus < 0)
        { return "-" + bonus; }
    else if (bonus > 0)
        { return "+" + bonus; }
    else
        { return bonus; }
}