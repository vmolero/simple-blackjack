import Hand from './Hand';
import Card from './Card';

export default class Player {
    private hand: Hand;

    public constructor();
    public constructor(hand?: Hand) {
        this.hand = hand || new Hand();
    }

    public pullCard(card: Card) {
        this.hand.add(card);
    }

    public getScore(): number {
        return this.hand.getScore();
    }

    public getHand(): Hand {
        return this.hand;
    }
} 