import Suit from './Suit';

export default class Card {
    readonly MIN_RANK = 1;
    readonly MAX_RANK = 13;
    private rank: number;
    private suit: Suit;
    
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