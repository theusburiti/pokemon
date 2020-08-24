export interface Card {
    cards: Card
}
export interface Cards {
    cards: {
        ability: Ability;
        artist: string;
        attacks: Attack[];
        convertedRetreatCost: number;
        evolvesFrom: string;
        hp: string;
        id: string;
        imageUrl: string;
        imageUrlHiRes: string;
        name: string;
        nationalPokedexNumber: number;
        number: string;
        rarity: string;
        resistances: Resistance[];
        retreatCost: string[];
        series: string;
        set: string;
        setCode: string;
        subtype: string;
        supertype: string;
        text: string[];
        types: string[];
        weaknesses: Weakness[];
    }
}


export interface Ability {
    name: string;
    text: string;
    type: string;
}

export interface Attack {
    convertedEnergyCost: string;
    cost: string[];
    damage: string;
    name: string;
    text: string;
}

export interface Resistance {
    type: string;
    value: string;
}

export interface Weakness {
    type: string;
    value: string;
}