import Hand from './Hand';
import Card from './Card';

export default class Player {
    private hand: Hand;

    public constructor(hand: Hand) {
        this.hand = hand;
    }

    public hit(card: Card): Player {
        let cards: Array<Card> = this.hand.getCards();
        cards.push(card);
        return new Player(new Hand(cards));
    }

    public getScore(): number {
        return this.hand.getScore();
    }

    public getHand(): Hand {
        return this.hand;
    }
} 