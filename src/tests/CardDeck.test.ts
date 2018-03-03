import CardDeck from "../CardDeck";
import Suit from "../Suit";

test('A new deck is filled with Cards', () => {
    let deck: CardDeck = new CardDeck();
    return expect(deck.getLength()).toBe(13 * 4);
});

test('A new deck has ordered cards', () => {
    let deck: CardDeck = new CardDeck();
    let stop: boolean = false;
    for (let rank: number = 1; rank <= this.RANKS && !stop; rank++) {
        for (let suit: Suit = Suit.Clubs; suit <= Suit.Diamonds && !stop; suit++) {
            let card = this.deck[((suit-1)*13)+(rank-1)];
            stop = (card.getRank() !== rank || card.getSuit() !== suit);
        }
    }
    return expect(stop).toBeFalsy();
});

test('A shuffled deck has no ordered cards', () => {
    let deck: CardDeck = new CardDeck();
    let stop: boolean = false;
    deck.shuffle();
    for (let rank: number = 1; rank <= this.RANKS && !stop; rank++) {
        for (let suit: Suit = Suit.Clubs; suit <= Suit.Diamonds && !stop; suit++) {
            let card = this.deck[((suit-1)*13)+(rank-1)];
            stop = (card.getRank() !== rank || card.getSuit() !== suit);
        }
    }
    return expect(stop).toBeTruthy();
});