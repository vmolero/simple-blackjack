import Hand from './Hand';
import Card from './Card';
import CardDeck from './CardDeck';

export default class Board {
    private hand: Hand;
    private deck: CardDeck;
    
    constructor() {
        this.hand = new Hand();
        this.deck = new CardDeck();
        this.deck.shuffle();
    }

    public addCard(card: Card) {
        this.hand.add(card);
    }
    public getHandScore() {
        return this.hand.getScore();
    }
}