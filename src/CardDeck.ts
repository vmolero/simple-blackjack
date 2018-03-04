import Card from './Card';
import Suit from './Suit';

export default class CardDeck {
    public readonly RANKS = 13;
    private deck: Array<Card>;

    public static createStandard52CardDeck() {
        let deck: Array<Card> = new Array<Card>();
        for (let suit: Suit = Suit.Clubs; suit <= Suit.Diamonds; suit++) {
            for (let rank: number = 1; rank <= 13; rank++) {
                const card = new Card(rank, suit);
                deck.push(card);
            }
        }

        return new CardDeck(deck);
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

    public pushCard(card: Card) {
        this.deck.push(card);
    }

    private constructor(deck: Array<Card>) {
        this.deck = deck;
    }
}