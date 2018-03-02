import Hand from './Hand';
import Card from './Card';

export default class Board {
    private hand: Hand;

    constructor() {
        this.hand = new Hand();
    }
    public addCard(card: Card) {
        this.hand.add(card);
    }
    public getHandScore() {
        return this.hand.getScore();
    }
}