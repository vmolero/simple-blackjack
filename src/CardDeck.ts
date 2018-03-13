import Card, { CardJsonInterface } from './Card';
import Suit from './Suit';
import Serializable from './interfaces/Serializable';

export interface CardDeckJsonInterface {
    deck: Array<CardJsonInterface>;
}

export default class CardDeck implements Serializable {
    public readonly RANKS = 13;
    private deck: Array<Card>;

    public static fromJSON(json: CardDeckJsonInterface | string): CardDeck {
        if (typeof json === 'string') {
            return JSON.parse(json, CardDeck.reviver); 
        }
        let deck: Array<Card> = new Array<Card>();
        deck = json.deck.map((card: CardJsonInterface): Card => {
            return Card.fromJSON(card);
        });
        return new CardDeck(deck);
    }

    public static reviver(key: string, value: CardDeckJsonInterface): CardDeck | CardDeckJsonInterface {
        return key === '' ? CardDeck.fromJSON(value) : value;
    }

    public toJSON(): CardDeckJsonInterface {
        return {
            deck: this.cards.map((card: Card): CardJsonInterface => { 
                return card.toJSON();
            }),
        };
    }

    public get cards(): Array<Card> {
        return this.deck;
    }

    public static createStandard52CardDeck() {
        let deck: Array<Card> = new Array<Card>();
        for (let suit: Suit = Suit.Clubs; suit <= Suit.Diamonds; suit++) {
            for (let rank: number = 1; rank <= 13; rank++) {
                const card = new Card(rank, suit);
                deck.push(card);
            }
        }

        return this.shuffle(new CardDeck(deck));
    }

    /** 
     * Fisher-Yates shuffle algorithm
     * 
     * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    public static shuffle(deck: CardDeck) {
        let randomizedDeck: Array<Card> = [];
        let array: Array<Card> = deck.cards.slice();
        while (array.length !== 0) {
            let rIndex = Math.floor(array.length * Math.random());
            randomizedDeck.push(array[rIndex]);
            array.splice(rIndex, 1);
        }
        return new CardDeck(randomizedDeck);
    }

    public getLength(): number {
        return this.deck.length;
    }

    public popCard(): Card {
        const card: Card | undefined = this.deck.pop();
        if (card === undefined) {
            throw new Error('Empty deck!');
        }
        return card;
    }

    public pushCard(card: Card) {
        this.deck.push(card);
    }

    private constructor(deck: Array<Card>) {
        this.deck = deck;
    }
}