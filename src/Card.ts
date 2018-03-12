import Suit from './Suit';
import Serializable from './interfaces/Serializable';

export interface CardJsonInterface {
    rank: number;
    suit: number;
}

export default class Card implements Serializable {
    readonly MIN_RANK = 1;
    readonly MAX_RANK = 13;
    private readonly rank: number;
    private readonly suit: Suit;
    
    public static fromJSON(json: CardJsonInterface): Card {
        return new Card(json.rank, json.suit);
    }

    public static reviver(key: string, value: CardJsonInterface): Card | CardJsonInterface {
        return key === '' ? Card.fromJSON(value) : value;
    }

    public toJSON(): CardJsonInterface {
        return {
            rank: this.getRank(),
            suit: this.getSuit(),
        };
    }

    constructor(rank: number, suit: Suit) {
        if (typeof(Suit[suit]) !== 'string') {
            throw new Error('Invalid Suit');
        }
        if (rank < this.MIN_RANK || rank > this.MAX_RANK) {
            throw new Error('Invalid Rank');
        }
        this.rank = rank;
        this.suit = suit;
    }

    public getRank(): number {
        return this.rank;
    }

    public getRankName(): string {
        if (this.rank === 1) { 
            return 'Ace'; 
        } else if (this.rank === 11) { 
            return 'Jack'; 
        } else if (this.rank === 12) { 
            return 'Queen'; 
        } else if (this.rank === 13) { 
            return 'King'; 
        } else { 
            return '' + this.rank; 
        }
    }

    public getFullName(): string {
        return this.getRankName() + this.getSuitName();
    }

    public getSuit(): Suit {
        return this.suit;
    }

    public getSuitName(): string {
        return Suit[this.suit];
    }

    public getScore(): Array<number> {
        if (this.rank === 1) {
            return [1, 11];
        }
        return this.rank < 10 ? [this.rank] : [10];
    }
}