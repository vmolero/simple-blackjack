import Suit from './Suit';

export default class Card {
    private value: number;
    private suit: Suit;
    
    constructor(value: number, suit: Suit) {
        if (typeof(Suit[suit]) !== 'string') {
            throw new Error('Invalid Suit');
        }
        this.value = value;
        this.suit = suit;
    }

    public getValue(): number {
        return this.value;
    }

    public getCardName(): string {
        if (this.value === 1) { 
            return 'Ace'; 
        } else if (this.value === 11) { 
            return 'Jack'; 
        } else if (this.value === 12) { 
            return 'Queen'; 
        } else if (this.value === 13) { 
            return 'King'; 
        } else { 
            return '' + this.value; 
        }
    }

    public getFullName(): string {
        return this.getCardName() + this.getSuitName();
    }

    public getSuit(): Suit {
        return this.suit;
    }

    public getSuitName(): string {
        return Suit[this.suit];
    }
}