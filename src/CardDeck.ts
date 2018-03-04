import Card from './Card';
import Suit from './Suit';

export default class CardDeck {
    public readonly RANKS = 13;
    private deck: Array<Card>;

    public constructor() {
        this.deck = new Array<Card>();
        this.fill();
    }

    /** 
     * Fisher-Yates shuffle algorithm
     * 
     * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    public shuffle() {
        let randomizedDeck: Array<Card> = [];
        let array: Array<Card> = this.deck.slice();
        while (array.length !== 0) {
            let rIndex = Math.floor(array.length * Math.random());
            randomizedDeck.push(array[rIndex]);
            array.splice(rIndex, 1);
        }
        this.deck = randomizedDeck;
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

    private fill() {
        for (let suit: Suit = Suit.Clubs; suit <= Suit.Diamonds; suit++) {
            for (let rank: number = 1; rank <= this.RANKS; rank++) {
                const card = new Card(rank, suit);
                this.deck.push(card);
            }
        }
    }
}