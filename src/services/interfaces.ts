interface ICardSet {
    name: string;
    expansion: string;
    uri: string;
}

interface IImages {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}

interface ICardFace {
    artist: string;
    artist_id: string;
    colors: Array<string>;
    flavor_text: string;
    illustration_id: string;
    image_uris: IImages;
    mana_cost: string;
    name: string;
    object: string;
    oracle_text: string;
    power: string;
    toughness: string;
    type_line: string;
}

export interface Card {
    id: string;
    name: string;
    printed_name?: string;
    printed_text?: string;
    printed_type_line: string;
    flavor_text: string;
    lang: string;
    uri: string;
    released_at: string;
    mana_cost: string;
    type_line: string;
    colors: Array<string>
    color_identity: Array<string>
    foil: boolean;
    legalities: {
        standard: string;
        future: string;
        historic: string;
        pioneer: string;
        modern: string;
        legacy: string;
        pauper: string;
        vintage: string;
        penny: string;
        commander: string;
        brawl: string;
        duel: string;
        oldschool: string;
    };
    set: ICardSet;
    rarity: string;
    artist: string;
    card_back_id: string;
    card_faces: Array<ICardFace>;
    prices: {
        usd: string;
        usd_foil: string;
        eur: string;
        tix: string;
    };
    image_uris: IImages;
    power: string;
    toughness: string;
}