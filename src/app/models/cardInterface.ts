export interface PokemonCard {

    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    evolvesFrom: string;
    abilities: {
        name: string;
        text: string;
        type: string;
    }[];
    attacks: {
        name: string;
        cost: string[];
        convertedEnergyCost: number;
        damage: string;
        text: string;
    }[];
    weaknesses: {
        type: string;
        value: string;
    }[];
    resistances: {
        type: string;
        value: string;
    }[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: {
        id: string;
        name: string;
        series: string;
        printedTotal: number;
        total: number;
        legalities: {
            unlimited: string;
        };
        ptcgoCode: string;
        releaseDate: string;
        updatedAt: string;
        images: {
            symbol: string;
            logo: string;
        };
    };
    number: string;
    artist: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    legalities: {
        unlimited: string;
    };
    images: {
        small: string;
        large: string;
    };
    tcgplayer: {
        url: string;
        updatedAt: string;
        prices: {
            holofoil: {
                low: number;
                mid: number;
                high: number;
                market: number;
                directLow: any;
            };
            reverseHolofoil: {
                low: number;
                mid: number;
                high: number;
                market: number;
                directLow: any;
            };
        };
    };
    cardmarket: {
        url: string;
        updatedAt: string;
        prices: {
            averageSellPrice: number;
            lowPrice: number;
            trendPrice: number;
            germanProLow: number;
            suggestedPrice: number;
            reverseHoloSell: number;
            reverseHoloLow: number;
            reverseHoloTrend: number;
            lowPriceExPlus: number;
            avg1: number;
            avg7: number;
            avg30: number;
            reverseHoloAvg1: number;
            reverseHoloAvg7: number;
            reverseHoloAvg30: number;
        };
    };
    _id: string;
}