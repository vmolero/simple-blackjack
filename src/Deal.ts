import Card from './Card';
import CardDeck, { CardDeckJsonInterface } from './CardDeck';

export interface DealJsonInterface {
    cardDeck: CardDeckJsonInterface
}

export default class Deal {
    private cardDeck: CardDeck;

    public constructor(cardDeck?: CardDeck) {
        this.cardDeck = cardDeck || CardDeck.createStandard52CardDeck();
    }

    public static fromJSON(json: DealJsonInterface | string): Deal {
        if (typeof json === 'string') {
            return JSON.parse(json, Deal.reviver); 
        }
        return new Deal(CardDeck.fromJSON(json.cardDeck));
    }

    public static reviver(key: string, value: DealJsonInterface): Deal | DealJsonInterface {
        return key === '' ? Deal.fromJSON(value) : value;
    }

    public toJSON(): DealJsonInterface {
        return {
            cardDeck: this.cardDeck.toJSON(),
        };
    }

    public pullCard(): Card {
        try {
            return this.cardDeck.popCard();
        } catch (doNothingOnEmptyDeck) {
            throw Error('No cards');
        }
    }
}