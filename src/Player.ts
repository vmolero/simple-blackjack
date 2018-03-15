import Hand, { HandJsonInterface } from './Hand';
import Card from './Card';

export interface PlayerJsonInterface {
    hand: HandJsonInterface;
}

export default class Player {
    private hand: Hand;

    public static fromJSON(json: PlayerJsonInterface | string): Player {
        if (typeof json === 'string') {
            return JSON.parse(json, Player.reviver); 
        }
        return new this(Hand.fromJSON(json.hand));
    }

    public static reviver(key: string, value: PlayerJsonInterface): Player | PlayerJsonInterface {
        return key === '' ? this.fromJSON(value) : value;
    }

    public toJSON(): PlayerJsonInterface {
        return {
            hand: this.hand.toJSON(),
        };
    }

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